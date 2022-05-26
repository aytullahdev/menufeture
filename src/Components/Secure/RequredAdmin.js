import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Auth from '../Firebase.init';
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
const RequredAdmin = ({children}) => {
    const [user,loading] = useAuthState(Auth);
     const [udata, setUdata] = useState(null)
     let location = useLocation();
     const id =localStorage.getItem('adminid');
    useEffect(()=>{
        console.log(localStorage.getItem('adminid'))
        
        if(!id || id==="") return;
        axios.post('https://menufeture.herokuapp.com/isadmin',{_id:id})
        .then(res=>{
            setUdata(res.data);
            console.log(res.data);
        })
    },[])
    if(!id){return <Navigate to="/profile" state={{ from: location }} replace></Navigate>;}
    if(loading || !udata){
        return "...Loading";
    }
    if(!user ){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    if(user.email===udata.email && udata.role==='admin'){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default RequredAdmin;
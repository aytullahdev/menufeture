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
    useEffect(()=>{
        console.log(localStorage.getItem('adminid'));
        axios.post('http://localhost:5000/isadmin',{_id:localStorage.getItem('adminid')})
        .then(res=>{
            setUdata(res.data);
            console.log(res.data);
        })
    },[])
    if(loading || !udata){
        return "...Loading";
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    if(user.email===udata.email && udata.role==='admin'){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default RequredAdmin;
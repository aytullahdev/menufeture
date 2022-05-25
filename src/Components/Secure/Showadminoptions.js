import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import Auth from '../Firebase.init';

const Showadminoptions = ({children}) => {
    const [user,loading] = useAuthState(Auth);
    const [udata, setUdata] = useState(null)
    const id =localStorage.getItem('adminid');
    
    useEffect(()=>{
       console.log();
       if(!id || id==="") return;
       axios.post('http://localhost:5000/isadmin',{_id:localStorage.getItem('adminid')})
       .then(res=>{
           setUdata(res.data);
           console.log(res.data);
       })
   },[])
   if(loading) return;
   if(user){
       if(udata){
           if(user.email===udata.email && udata.role==='admin'){
               return children;
           }
       }
   }
return ;
  
};

export default Showadminoptions;
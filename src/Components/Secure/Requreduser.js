import React from 'react';
import Auth from '../Firebase.init'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
const Requreduser = ({children}) => {
    const [user, loading] = useAuthState(Auth);
    let location = useLocation();
    if(loading){
        return "...Loading";
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default Requreduser;
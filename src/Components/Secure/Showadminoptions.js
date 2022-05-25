import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Auth from "../Firebase.init";

const Showadminoptions = ({ children }) => {
  const [user, loading] = useAuthState(Auth);
  const [udata, setUdata] = useState(null);
  const id = localStorage.getItem("adminid");

  useEffect(() => {
    console.log();
   
    if(id){
        axios
        .post("http://localhost:5000/isadmin", {
          _id: localStorage.getItem("adminid"),
        })
        .then((res) => {
          setUdata(res.data);
          console.log(res.data);
        });
    }
  }, []);
  if (!id || id === "") return;
  if(loading) return;
  if(!loading && udata){
        if(udata.role==='admin'){
            return children;
        }else{
            return;
        }
        
  }else{
    return;
  }
      
  
  
};

export default Showadminoptions;

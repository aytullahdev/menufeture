import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Auth from "../Firebase.init";

const Showadminoptions = ({ children }) => {
  const [user, loading] = useAuthState(Auth);
  const [udata, setUdata] = useState(null);
  const id = localStorage.getItem("userId");

  useEffect(() => {
    console.log();

    if (id) {
      axios
        .post("https://menufeture.herokuapp.com/isadmin", {
          _id: localStorage.getItem("userId"),
        })
        .then((res) => {
          setUdata(res.data);
          console.log(res.data);
        });
    }
  }, [user,loading]);
  
  if (udata) {
    if (udata.result === true) {
      return children;
    } 
  }else{
    if (udata?.result === true) {
      return children;
    } 
    return ;
  }
  if(user){
    if (udata?.result === true) {
      return children;
    } 
  }
};

export default Showadminoptions;

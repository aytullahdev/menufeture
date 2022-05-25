import React from "react";
import Navlink from "./Navlink";
import Auth from "../../Firebase.init";
import {signOut} from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import Showadminoptions from "../../Secure/Showadminoptions";
const Navbar = () => {
  const [user,loading]= useAuthState(Auth)

  return (
    <div className="bg-green-400 hidden lg:sticky top-0 left-0 w-full lg:min-h-screen lg:flex lg:flex-col py-10">
     
       <Navlink to="/" text="Home"/>
       <Navlink to="/products" text="Product"/>
       <Navlink text="Blogs"/>
       <Navlink text="About"/>
      {user && <Showadminoptions> <Navlink to="/dashboard" text="Dashboard"/></Showadminoptions>}
       {user && <Navlink to="/profile" text="Profile"/>}
       {!user && <Navlink to="/login" text="Login"/>}
       {user && <button className="btn mx-5" onClick={()=>{signOut(Auth);localStorage.setItem('userid','');localStorage.setItem('adminid','')}}>Signout</button>}
     
      
      
      
    </div>
  );
};

export default Navbar;

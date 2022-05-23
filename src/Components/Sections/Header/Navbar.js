import React from "react";
import Navlink from "./Navlink";
import Auth from "../../Firebase.init";
import {signOut} from 'firebase/auth'
const Navbar = () => {
  return (
    <div className="bg-green-400 hidden lg:sticky top-0 left-0 w-full lg:min-h-screen lg:flex lg:flex-col py-10">
     
       <Navlink to="/" text="Home"/>
       <Navlink to="/products" text="Product"/>
       <Navlink text="Blogs"/>
       <Navlink text="About"/>
       <Navlink to="/dashboard" text="Dashboard"/>
       <Navlink to="/profile" text="Profile"/>
       <Navlink to="/login" text="Login"/>
       <button className="btn mx-5" onClick={()=>{signOut(Auth);localStorage.setItem('userid','')}}>Signout</button>
     
      
      
      
    </div>
  );
};

export default Navbar;

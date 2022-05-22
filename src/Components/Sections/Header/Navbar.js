import React from "react";
import Navlink from "./Navlink";
const Navbar = () => {
  return (
    <div className="bg-green-400 sticky top-0 left-0 w-full lg:min-h-screen flex lg:flex-col py-10">
     
       <Navlink to="/" text="Home"/>
       <Navlink text="Product"/>
       <Navlink text="Blogs"/>
       <Navlink text="About"/>
       <Navlink to="/dashboard" text="Dashboard"/>
       <Navlink to="/profile" text="Profile"/>
     
      
      
      
    </div>
  );
};

export default Navbar;

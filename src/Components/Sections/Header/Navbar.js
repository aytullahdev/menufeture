import React from "react";
import Navlink from "./Navlink";
import Auth from "../../Firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Navbar = () => {
  const [user, loading] = useAuthState(Auth);
  const [isAdmin, setisAdmin] = useState(false);
  useEffect(() => {
    axios.post('https://menufeture.herokuapp.com/isadmin',{_id:localStorage.getItem('userId')})
    .then(res=>{
        setisAdmin(res.data.result)
       
    })
  }, [user])
  
  return (
    <div>
      <div class="navbar bg-base-100  text-black">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>{!user && <Link to="/login">Log in</Link>}</li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>{!user && <Link to="/login">Log in</Link>}</li>
          </ul>
          
        </div>
        <div>
        {user && (
            <div class="navbar-end w-full">
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </label>
                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" class="justify-between">
                      Profile
                      <span class="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    { isAdmin && <Link to="/Dashboard">Dashboard</Link>}
                  </li>
                  <li>
                    <button onClick={()=>{signOut(Auth);localStorage.clear('userid');localStorage.clear('adminid')}}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
      </div>
      
    </div>
  );
};

export default Navbar;

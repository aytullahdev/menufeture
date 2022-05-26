import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Notfound from "../Errorpage/Notfound";
import { useAuthState } from "react-firebase-hooks/auth";
import Auth from "../Firebase.init";
import UpdateprofileModal from "./UpdateprofileModal";
import { useQuery } from "react-query";
import Userorder from "./Userorder";
const Profile = () => {
  const [user, loading] = useAuthState(Auth);
  
  const userId = useParams().id || localStorage.getItem("userid");
  const { isLoading, error, data, refetch } = useQuery("userData", () =>
    axios.get(`https://menufeture.herokuapp.com/user/${userId}`).then((res) => res.data)
  );
  
  if(isLoading ){
    refetch();
     return '...Loading';
  }
  
  return (
    <>
    
      {!isLoading && data  ? (
        <div className="text-black bg-white grid grid-col-1 lg:grid-cols-2 p-4">
          <div className="flex justify-center">
            <div class="avatar">
              <div class="h-32 w-32 rounded-full">
                <img
                  className="h-full w-full"
                  src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center  text-4xl uppercase">
              User Information
            </h1>
            <div className="text-left py-5 px-2">
              <h3>
                Name: <span className="text-md px-5 ">{data.name}</span>
              </h3>
              <h3>
                Email:<span className="text-md px-5 ">{data.email}</span>
              </h3>
              <p>
                Location:
                <span className="text-md px-5 ">{data.location}</span>
              </p>
              <p>
                Linkdin:
                <span className="text-md px-5 "><a target="_blank" className=" link link-hover" href={data.linkdin}>linkdin profile</a></span>
              </p>
              {user && !loading  && user.email === data.email && (
                <label
                  for="update-profile-modal"
                  className="btn btn-success text-white mt-2"
                >
                  Update Profile
                </label>
              )}
            </div>
          </div>
         
          <UpdateprofileModal userinfo={data} refetch={refetch}/>
        </div>
        
      ) : (
        <Notfound />
      )}
      {!isLoading && data && <Userorder id={data._id} userInfo={data}/>}
      
    </>
  );
};

export default Profile;

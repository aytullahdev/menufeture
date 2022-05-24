import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Notfound from "../Errorpage/Notfound";
import { useAuthState } from "react-firebase-hooks/auth";
import Auth from "../Firebase.init";
import UpdateprofileModal from "./UpdateprofileModal";
const Profile = () => {
  const [user, loading] = useAuthState(Auth);
  const [userinfo, setUserinfo] = useState({});
  const userId = useParams().id || localStorage.getItem("userid");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${userId}`)
      .then((res) => {
        if (res.data?.email) {
          setUserinfo(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 404) {
          setUserinfo(null);
        }
      });
  }, []);
  return (
    <>
    
      {userinfo  ? (
        <div className="text-black bg-white grid grid-col-1 lg:grid-cols-3 p-4">
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
                Name: <span className="text-md px-5 ">{userinfo.name}</span>
              </h3>
              <h3>
                Email:<span className="text-md px-5 ">{userinfo.email}</span>
              </h3>
              <p>
                Location:
                <span className="text-md px-5 ">{userinfo.location}</span>
              </p>
              <p>
                Linkdin:
                <span className="text-md px-5 "><a target="_blank" className=" link link-hover" href={userinfo.linkdin}>linkdin profile</a></span>
              </p>
              {user && !loading  && user.email === userinfo.email && (
                <label
                  for="update-profile-modal"
                  className="btn btn-success text-white mt-2"
                >
                  Update Profile
                </label>
              )}
            </div>
          </div>
          <UpdateprofileModal userinfo={userinfo}/>
        </div>
      ) : (
        <Notfound />
      )}
    </>
  );
};

export default Profile;

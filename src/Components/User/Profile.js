import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Notfound from "../Errorpage/Notfound";
const Profile = () => {
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
      {userinfo ? (
        <div className="text-black grid grid-col-1 lg:grid-cols-3 p-4">
          <div className="flex justify-center">
            <img
              className="w-32 h-32"
              src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-center text-4xl uppercase">User Information</h1>
            <div className="text-left py-5 px-2">
              <h3>Name:{userinfo.name}</h3>
              <h3>Email:{userinfo.email}</h3>
              <p>Location:{userinfo.location}</p>
              <p>Linkdin: {userinfo.linkdin}</p>
            </div>
          </div>
        </div>
      ) : (
        <Notfound />
      )}
    </>
  );
};

export default Profile;

import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ text, to }) => {
  return (
    <Link to={`${to}`}>
      <div className="text-white  cursor-pointer py-2 px-5 mb-4 transition-colors duration-200 hover:bg-green-800  text-xl flex text-md  items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <p className=" uppercase ml-3">{text}</p>
      </div>
    </Link>
  );
};

export default Navlink;

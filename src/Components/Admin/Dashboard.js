import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-2">
      <div className="grid grid-cols-3 gap-5">
        <Link
          to="/dashboard/addproduct"
          className="bg-green-500 text-xl uppercase rounded p-4 cursor-pointer hover:bg-green-400"
        >
          ADD PRODUCT
        </Link>
        <div className="bg-orange-600 text-xl uppercase rounded p-4 cursor-pointer hover:bg-green-400">
          ORDERS
        </div>
        <div className="bg-indigo-500 text-xl uppercase rounded p-4 cursor-pointer hover:bg-green-400">
          Manage Users
        </div>
      </div>
      <div className="py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

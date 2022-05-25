import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-2">
      <div className="grid grid-cols-4 gap-5">
        <Link
          to="/dashboard/addproduct"
          className="bg-green-500 text-xl uppercase rounded p-4 cursor-pointer hover:bg-green-400"
        >
          ADD PRODUCT
        </Link>
        <Link to="/dashboard/orders" className="bg-orange-600 text-xl uppercase rounded p-4 cursor-pointer hover:bg-green-400">
          ORDERS
        </Link>
        <Link to="/dashboard/manageuser" className="bg-indigo-500 text-xl uppercase rounded p-4 cursor-pointer hover:bg-green-400">
          Manage Users
        </Link>
        <Link to="/dashboard/products" className="bg-green-600 text-xl uppercase rounded p-4 cursor-pointer hover:bg-green-400">
          MANAGE PRODUCT
        </Link>
      </div>
      <div className="py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

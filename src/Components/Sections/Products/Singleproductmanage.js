import React from "react";
import { Link } from "react-router-dom";
const Singleproductmanage = ({ data }) => {
  return (
  
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.img} alt={data.name} />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.name}</div>
              <div className="text-sm opacity-50">${data.price}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge text-lg p-3 badge-ghost badge-sm">
            {data?.supplier || "ADMIN"}
          </span>
        </td>
        <td>{data.quan || 12}</td>
        <th>
          <Link
            to={`/dashboard/inventory/${data._id}`}
            className="btn btn-primary text-white btn-xs ml-2"
          >
            Details
          </Link>
        </th>
      </tr>
    
  );
};

export default Singleproductmanage;

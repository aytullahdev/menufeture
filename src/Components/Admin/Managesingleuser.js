import React from 'react';

const Managesingleuser = ({data,handelMakeAdmin}) => {
    return (
        
      <tr>
      
      <td>
        <span className="badge text-lg p-3 badge-ghost badge-sm">
          {data?.name}
        </span>
      </td>
      <td>{data.email}</td>
      <td>{data.role}</td>
      <td className=" space-x-2">
        <button className="btn btn-xs btn-primary text-white ">User Info</button>
        <button className="btn btn-xs btn-warning text-white hover:bg-yellow-600" onClick={()=>{handelMakeAdmin(data.email)}} disabled={data.role==="admin"}>Make Admin</button>
      </td>
    </tr>
    );
};

export default Managesingleuser;
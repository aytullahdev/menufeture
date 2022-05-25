import React from 'react';

const Singleorders = ({data}) => {
    return (
        <tr>
      
      <td>
        <span className="text-sm">
          {data?._id}
        </span>
      </td>
      {/* <td>{data.productid}</td>
      <td>{data.userid}</td>  */}
      <td>{data.email}</td>
      <td>{data.quan}</td>
      <td>{data.total}</td>
      <td>{data.payment?"PAYED":"UNPAID"}</td>
      <td className=" space-x-2">
        <button className="btn btn-xs btn-primary text-white ">Details</button>
        
      </td>
    </tr>
    );
};

export default Singleorders;
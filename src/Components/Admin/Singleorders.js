import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const Singleorders = ({data,refetch}) => {
  const handleAccept=(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Accept the order",
    }).then((result) => {
      if (result.isConfirmed) {
          axios.post("https://menufeture.herokuapp.com/acceptorder",data).then((res)=>{
            console.log(res.data);
            if(res.data.modifiedCount===1){
               Swal.fire("Updated!", "Order is Accepted.", "success");
               refetch();
            }else{
              Swal.fire("Updated!", "Order isn't Accepted.", "error");
            }
            
          })
         
         
         
     
      }
    });
  }
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
        <button onClick={()=>(handleAccept(data._id))} disabled={!(data.payment===true && data.pending===true)} className="btn btn-xs btn-warning text-white "  >{data.pending?"Accept":"Accepted"}</button>
        
      </td>
    </tr>
    );
};

export default Singleorders;
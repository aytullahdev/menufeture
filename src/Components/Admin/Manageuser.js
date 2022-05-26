import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Managesingleuser from "./Managesingleuser";

const Manageuser = () => {
  const { isLoading, error, data, refetch } = useQuery("repoUser", () =>
    axios.get("https://menufeture.herokuapp.com/users").then((res) => res.data)
  );
  const handelMakeAdmin=(email)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("https://menufeture.herokuapp.com/makeadmin",{email:email})
        .then(res=>{
          Swal.fire("Updated!", "User id updated.", "success");
         
          refetch();
        })
     
      }
    });
    
  }
  
  return (
    <div>
      {!isLoading && (
        <div>
          <div className="px-5 relative">
            <div className="overflow-x-auto w-full">
              {data && data.length === 0 && (
                <div className="px-5 text-3xl font-bold">No Product</div>
              )}

              {data && data.length > 0 && (
                <table className="table text-white  w-full my-5">
                  <thead className="text-black">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Option</th>
                    </tr>
                  </thead>

                  <tbody className="text-black">
                    {data.length > 0 &&
                      data.map((sp) => {
                        return <Managesingleuser key={sp._id} data={sp} handelMakeAdmin={handelMakeAdmin} />;
                      })}
                  </tbody>
                  <tfoot>
                    <tr className="text-black">
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Option</th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manageuser;

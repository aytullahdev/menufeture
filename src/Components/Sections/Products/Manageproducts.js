import React from "react";
import Singleproductmanage from "./Singleproductmanage";
import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
const Manageproducts = () => {
  const [products, setProducts] = useState([]);
  const { isLoading, error, data, refetch } = useQuery("repoData", () =>
    axios.get("http://localhost:5000/products").then((res) =>  res.data)
  );
 
  const handelDelete = (id) => {
    axios
      .post("http://localhost:5000/removeproduct", { _id: id })
      .then((res) =>{
        refetch();
      });
  };
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
                      <th>Supplier</th>
                      <th>Quantity</th>
                      <th>Option</th>
                    </tr>
                  </thead>

                  <tbody className="text-black">
                    {data.length > 0 &&
                      data.map((sp) => {
                        return (
                          <Singleproductmanage
                            key={sp._id}
                            data={sp}
                            handelDelete={handelDelete}
                          />
                        );
                      })}
                  </tbody>
                  <tfoot>
                    <tr className="text-black">
                      <th>Name</th>
                      <th>Supplier</th>
                      <th>Quantity</th>
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

export default Manageproducts;

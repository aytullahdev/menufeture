import React from "react";
import Singleproductmanage from "./Singleproductmanage";
import { useState, useEffect } from "react";
import axios from "axios";
const Manageproducts = () => {
    const [products, setProducts] = useState([])
   useEffect(() => {
    axios.get('http://localhost:5000/products')
    .then((data)=>{
        
        setProducts(data.data);
    })
   }, [])
  return (
    <div>
      <div className="px-5 relative">
        <div className="overflow-x-auto w-full">
          {products.length === 0 && (
            <div className="px-5 text-3xl font-bold">No Product</div>
          )}
         
          {products.length > 0 && (
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
                {products.length > 0 &&
                  products.map((sp) => {
                    return (
                      <Singleproductmanage
                        key={sp._id}
                        data={sp}
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
  );
};

export default Manageproducts;

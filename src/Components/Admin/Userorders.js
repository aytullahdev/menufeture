import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Singleorders from './Singleorders';

const Userorders = () => {
        const { isLoading, error, data, refetch } = useQuery("orders", () =>
    axios.get("http://localhost:5000/orders").then((res) => res.data)
  );
  
  
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
                      <th>Order ID</th>
                      {/* <th>Product ID</th>
                      <th>User ID</th> */}
                      <th>Order Email</th>
                      <th>Product Quantity</th>
                      <th>Total</th>
                      <th>Payment</th>
                      <th>Options</th>
                    </tr>
                  </thead>

                  <tbody className="text-black">
                    {data.length > 0 &&
                      data.map((sp) => {
                        return <Singleorders key={sp._id} data={sp}  />;
                      })}
                  </tbody>
                  <tfoot>
                    <tr className="text-black">
                      <th>Order ID</th>
                      {/* <th>Product ID</th>
                      <th>User ID</th> */}
                      <th>Order Email</th>
                      <th>Product Quantity</th>
                      <th>Total</th>
                      <th>Payment</th>
                      <th>Options</th>
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

export default Userorders;
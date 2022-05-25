import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Singleorder from "./Singleorder";
import { useState } from "react";
import Checkout from "../Sections/Products/Checkout";
import Addreviews from "./Addreviews";

const Userorder = ({ id, userInfo }) => {
  const [price, setprice] = useState(null);
  const [paymentid, setpaymentid] = useState(null);
  const [showcheckout, setShowcheckout] = useState(false);
  const [showReviewbox, setShowReviewbox] = useState(false)
  const [productId, setProductId] = useState(null)
  const { isLoading, error, data, refetch } = useQuery("repoData", () =>
    axios.get(`http://localhost:5000/orders?id=${id}`).then((res) => res.data)
  );
  const handlePayment = (payid, price) => {
    setprice(price);
    setpaymentid(payid);
    setShowcheckout(true);
  };
  const handelDelete = (id) => {
    axios.post("http://localhost:5000/delorder", { _id: id }).then((res) => {
      console.log(res.data);
      refetch();
    });
  };
  const handleReview=(orderid,productId)=>{
      setpaymentid(orderid);
      setProductId(productId);
        console.log(orderid)
        setShowReviewbox(true);
  }
  return (
    <div>
      {!isLoading && (
        <div>
            <button className="btn btn-success btn-md my-2 text-white  mx-2 b" onClick={()=>refetch()}>Reload</button>
          <div className="px-5 relative" >
            <div className="overflow-x-auto w-full">
              {data && data.length === 0 && (
                <div className="px-5 text-3xl font-bold">No Orders</div>
              )}

              {data && data.length > 0 && (
                <table className="table text-white  w-full my-5" >
                  <thead className="text-black">
                    <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Payment</th>
                      <th>Option</th>
                    </tr>
                  </thead>

                  <tbody className="text-black">
                    {data.length > 0 &&
                      data.map((sp) => {
                        return (
                          <Singleorder
                            key={sp._id}
                            data={sp}
                            handelDelete={handelDelete}
                            handlePayment={handlePayment}
                            handleReview={handleReview}
                          />
                        );
                      })}
                  </tbody>
                  <tfoot>
                    <tr className="text-black" >
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Payment</th>
                      <th>Option</th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
      <div>
        {!isLoading && showcheckout && <div className="w-2/3 my-5"><Checkout price={price} paymentid={paymentid} /></div>}
        {!isLoading && showReviewbox && <Addreviews  paymentid={paymentid} productId={productId} userInfo={userInfo} setShowReviewbox={setShowReviewbox} />}
      </div>
    </div>
  );
};

export default Userorder;

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Singleorder = ({
  handelDelete,
  data,
  handlePayment,
  handleReview,
  showReviewbox,
}) => {
  const [product, setProduct] = useState(null);
  const [hasreview, setHasreview] = useState(false);
  useEffect(() => {
    axios
      .get(`https://menufeture.herokuapp.com/products/${data.productid}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://menufeture.herokuapp.com/reviews?paymentId=${data._id}`)
      .then((res) => {
        if (res.data?.paymentid === data._id) {
          setHasreview(true);
        }
      });
  }, [showReviewbox]);

  useEffect(() => {
    axios
      .post("https://menufeture.herokuapp.com/isadmin", {
        _id: localStorage.getItem("userId"),
      })
      .then((res) => {
         if(res.data.result===true){
           setHasreview(true);
         }
      });
  }, [product]);
  return (
    <>
      {product && (
        <tr>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={product.img} alt={product.name} />
                </div>
              </div>
              <div>
                <div className="font-bold">{product.name}</div>
                <div className="text-sm opacity-50">{product.price}</div>
              </div>
            </div>
          </td>
          <td>
            <span className="badge text-lg p-3 badge-ghost badge-sm">
              {data.quan}
            </span>
          </td>
          <td>{data.total}</td>
          <td>{data.payment ? "Paid" : "Unpaid"}</td>
          <th className=" space-x-2">
            <label
              for="user-payment"
              onClick={() => handlePayment(data._id, data.total)}
              disabled={data.payment}
              className="btn btn-primary text-white btn-xs ml-2"
            >
              Pay
            </label>

            <label
              for="user-payment"
              onClick={() => handleReview(data._id, product._id)}
              disabled={!data.payment || hasreview}
              className="btn btn-sucess text-white btn-xs ml-2"
            >
              Add Review
            </label>
            <button
              className="btn btn-xs btn-warning text-white hover:bg-yellow-600"
              disabled={data.payment}
              onClick={() => handelDelete(data._id)}
            >
              Delete
            </button>
          </th>
        </tr>
      )}
    </>
  );
};

export default Singleorder;

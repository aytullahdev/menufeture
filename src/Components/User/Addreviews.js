import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const Addreviews = ({ paymentid, productId , userInfo, setShowReviewbox}) => {
  const [product, setProduct] = useState(null);
  const [review,setReview]=useState(0)
  const [reviewText, setReviewText] = useState("")
  useEffect(()=>{
    axios.get(`http://localhost:5000/products/${productId}`)
    .then((res)=>{
        setProduct(res.data);
    })
},[])
const handleReview=(val)=>{
    setReview(val);
}
const handelReview=()=>{
    if(userInfo.name===""){toast.error("Plz Update your User Name"); return;}
    axios.post('http://localhost:5000/postreviews',{productid:productId,paymentid:paymentid,rating:review,text:reviewText,name:userInfo.name
})
    .then(res=>{
        if(res.data.insertedId){
            toast.success("Review Inserted Sucssfully");
            
            
            return <Navigate to="/profile" />
           
            
        }
    })
}
  return (

    <>
      {product && (
        <div className="card my-10 bg-white  py-4 text-black  mx-auto">
          <h1>Your Review for product -{product.name}</h1>
          <div className="flex items-center flex-col space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.img} alt={product.name}/>
              </div>
            </div>
            <div>
              <div className="font-bold">Name: {product.name}</div>
              <div className="text-sm font-bold opacity-50">Price: {product.price}</div>
            </div>
          </div>
          <div>
            <div className="flex justify-center"><ReactStars size={50} count={5} onChange={handleReview}/></div>
            <div className="py-2">
                <textarea className="input input-bordered" onChange={(e)=> setReviewText(e.target.value)} placeholder="Your review" cols="30" rows="10"></textarea>
                
            </div>
            <div>
            <button className="btn btn-primary mx-auto" onClick={()=>{handelReview()}}>Submit</button>
            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Addreviews;

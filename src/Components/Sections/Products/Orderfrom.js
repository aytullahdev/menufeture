import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import Auth from "../../Firebase.init";
import { toast } from "react-toastify";
const stripePromise = loadStripe(
  "pk_test_51L2sXgF65j8JGYI7Esqw7JbRwzdYqdwhSDkR3Nc0pKE4ormrjsxeJSRWgZmflJmc8F8Iazdshcy0QaUEATogVfCd00tunE8JIm"
);
const Orderfrom = ({ product }) => {
   const [user,loading]=useAuthState(Auth)
  const [showcheckout, setShowcheckout] = useState(false);
  const [price,setPrice]= useState(0)
  const [paymentid,setPaymentid]=useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setPrice(product.price*data.quan);
    //insert the order into order database the database and get an id;
    axios.post('https://menufeture.herokuapp.com/order',{...data,total:product.price*data.quan,productid:product._id,userid:localStorage.getItem('userId')})
    .then(res=>{
       if(res?.data?.insertedId){
          setPaymentid(res.data.insertedId);
          reset();
          toast.success("Order is placed in profile");
          setShowcheckout(true)
       }
    })
    

   // setShowcheckout(true);
  };
  if(loading){
    return "...Loading";
  }
  return (
    <div className="">
      {!loading && !showcheckout && (
        <div class="card flex-shrink-0 w-full mx-auto max-w-sm my-2 rounded-none bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            <h1>ORDER NOW</h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                {...register("email")}
                defaultValue={user.email}
                class="input input-bordered"
                readOnly
              />
              <label className=" label text-red-500">
                {errors.email && <span>This filed is requres</span>}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Adress</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                {...register("adress", { required: true })}
                class="input input-bordered"
              />
              <label className=" label text-red-500">
                {errors.adress && <span>This filed is requres</span>}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                {...register("quan", {
                  required: true,
                  min: product.quan <= 5 ? product.quan : 5,
                  max: product.quan,
                })}
                defaultValue={product.quan <= 5 ? product.quan : 5}
                class="input input-bordered"
              />
              <label className=" label text-red-500">
                {errors.quan && errors.quan.type === "min" && (
                  <span>
                    Minium Quantity is {product.quan <= 5 ? product.quan : 5}
                  </span>
                )}
                {errors.quan && errors.quan.type === "max" && (
                  <span>maximum Quantity is {product.quan}</span>
                )}
              </label>
            </div>
            <div class="form-control mt-6">
              <button disabled={product.quan===0} class="btn bg-green-500 border-none hover:bg-green-600">
                Check OUT
              </button>
            </div>
          </form>
        </div>
      )}
      
     
      <div class={`modal ${showcheckout ? 'modal-open':'modal-close'}`}>
        <div class="modal-box relative">
          <label
            
            onClick={()=>{setShowcheckout(false)}}
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {showcheckout && (
          <div className="w-full ">
            <Checkout price={price} paymentid={paymentid} />
          </div>
        )}
        
        </div>
      </div>
    </div>
  );
};

export default Orderfrom;

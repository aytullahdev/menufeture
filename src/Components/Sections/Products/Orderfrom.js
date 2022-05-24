import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51L2sXgF65j8JGYI7Esqw7JbRwzdYqdwhSDkR3Nc0pKE4ormrjsxeJSRWgZmflJmc8F8Iazdshcy0QaUEATogVfCd00tunE8JIm"
);
const Orderfrom = ({ product }) => {
  const [showcheckout, setShowcheckout] = useState(false);
  const [price,setPrice]= useState(0)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setPrice(product.price*data.quan);
    setShowcheckout(true);
  };
  return (
    <div>
      {!showcheckout && (
        <div class="card flex-shrink-0 w-full max-w-sm rounded-none bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            <h1>ORDER NOW</h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                {...register("email", { required: true })}
                class="input input-bordered"
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
              <button class="btn bg-green-500 border-none hover:bg-green-600">
                Check OUT
              </button>
            </div>
          </form>
        </div>
      )}
      {showcheckout && (
        <Elements stripe={stripePromise}>
          <Checkout price={price}/>
        </Elements>
      )}
    </div>
  );
};

export default Orderfrom;

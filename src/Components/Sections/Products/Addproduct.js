import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const Addproduct = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data =>{
     axios.post('https://menufeture.herokuapp.com/addproduct',data)
     .then(res=>{
        console.log(res);
        reset();
     });
  };
  return (
    
    <div>
      <div className="card text-black flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("productName", { required: true })}
              className="input input-bordered"
            />
             <label className=" label text-sm text-red-500">{errors.productName && <span>This field is required</span>}</label>
          </div>
          <div  className="from-control grid grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              min={1}
              {...register("productPrice", { required: true,min:1 })}
              className="input input-bordered"
            />
             <label className=" label text-sm text-red-500">{errors.productPrice && <span>This field is required</span>}</label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              min={1}
              {...register("productQuantity", { required: true,min: 1 })}
              className="input input-bordered"
            />
             <label className=" label text-sm text-red-500">{errors.productQuantity && <span>This field is required</span>}</label>
          </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product image</span>
            </label>
            <input
              
              type="text"
              placeholder="Product Description"
              defaultValue="https://images.prismic.io/rpf-products/3a15d4da-46e3-4940-8be6-9fc7d201affe_RPi_4B_FEATURED.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=600&h=400"
              {...register("productImg")}
              className="block w-full py-1 text-sm font-normal  text-gray-700 bg-white bg-clip-padding px-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
           
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              
              type="text"
              placeholder="Product Description"
              {...register("productDesc", { required: true })}
              className="input input-bordered h-20"
            />
             <label className=" label text-sm text-red-500">{errors.productDesc && <span>This field is required</span>}</label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-500 border-none hover:bg-green-600">ADD PRODUCT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;

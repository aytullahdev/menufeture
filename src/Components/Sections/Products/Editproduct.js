import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Editproduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
     axios.get(`http://localhost:5000/products/${id}`)
     .then(res=>{
         setProduct(res.data);
     })
  }, [id])
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/addproduct", data).then((res) => {
      console.log(res);
      reset();
    });
  };
  return (
    <div>
      {product && <div className="card text-black flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1>Edit Product</h1>
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("productName", { required: true })}
              className="input input-bordered"
              defaultValue={product.name}
            />
            <label className=" label text-sm text-red-500">
              {errors.productName && <span>This field is required</span>}
            </label>
          </div>
          <div className="from-control grid grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                min={1}
                defaultValue={product.price}
                {...register("productPrice", { required: true, min: 1 })}
                className="input input-bordered"
              />
              <label className=" label text-sm text-red-500">
                {errors.productPrice && <span>This field is required</span>}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                min={1}
                {...register("productQuantity", { required: true, min: 1 })}
                className="input input-bordered"
                defaultValue={product.quan}
              />
              <label className=" label text-sm text-red-500">
                {errors.productQuantity && <span>This field is required</span>}
              </label>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product image</span>
            </label>
            <input
              type="text"
              placeholder="Product Description"
              defaultValue={product.img}
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
              defaultValue={product.desc}
            />
            <label className=" label text-sm text-red-500">
              {errors.productDesc && <span>This field is required</span>}
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-500 border-none hover:bg-green-600">
              UPDATE PRODUCT
            </button>
          </div>
        </form>
      </div>}
    </div>
  );
};

export default Editproduct;

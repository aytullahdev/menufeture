import React from "react";

const Addproduct = () => {
  return (
    <div>
      <div className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered"
            />
          </div>
          <div  className="from-control grid grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              className="input input-bordered"
            />
          </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product image</span>
            </label>
            <input
              
              type="file"
              placeholder="Product Description"
             
              className="block w-full py-1 text-sm font-normal  text-gray-700 bg-white bg-clip-padding px-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              
              type="text"
              placeholder="Product Description"
              className="input input-bordered h-20"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">ADD PRODUCT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;

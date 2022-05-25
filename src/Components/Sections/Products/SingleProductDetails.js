import React from "react";

const SingleProductDetails = ({ product }) => {
  return (
    <div className="text-black">
      <div className="">
        <div class="grid grid-cols-2 w-full p-5 rounded-none  bg-base-100">
          <figure>
            <img
              src={product.img}
            />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title">
              {product.tittle}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>{product.description}</p>
            <div class="card-actions justify-start flex flex-col">
              <div class="badge badge-secondary badge-outline">Price: {product.price}</div>
              <div class="badge badge-outline">Quantity {product.quan}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;

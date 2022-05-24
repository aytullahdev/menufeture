import React from "react";

const SingleProductDetails = ({ product }) => {
  return (
    <div className="text-black">
      <div className=" min-h-screen">
        <div class="card rounded-none w-96 bg-base-100">
          <figure>
            <img
              src={product.img}
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {product.name}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>{product.desc}</p>
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

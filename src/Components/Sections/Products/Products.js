import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div className="text-black text-left px-10 ">
      <h1 className="text-xl uppercase font-semibold">OUR PRODUCTS</h1>
      <div className="grid grid-cols-3 gap-5 my-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Products;

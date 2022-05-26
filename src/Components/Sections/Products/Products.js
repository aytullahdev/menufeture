import React from "react";
import Card from "./Card";
import { useState , useEffect} from "react";
import axios from "axios";
import { data } from "autoprefixer";
import { useQuery } from "react-query";
const Products = ({limit}) => {
   
   const { isLoading, error, data, refetch } = useQuery("products", () =>
    axios.get(`http://localhost:5000/products?limit=${limit || 100 }`).then((res) => res.data)
  );
  if(isLoading){
    return <progress class="progress w-56"></progress>;
  }
  return (
    <div className="text-black text-left px-10 ">
      <h1 className="text-xl uppercase font-semibold">OUR PRODUCTS</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
        {!isLoading && data && data.length>=1 && data.map(el=>{
          return <Card data={el} key={el._id}/>
        })}
      </div>
    </div>
  );
};

export default Products;

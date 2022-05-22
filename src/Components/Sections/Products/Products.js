import React from "react";
import Card from "./Card";
import { useState , useEffect} from "react";
import axios from "axios";
import { data } from "autoprefixer";
const Products = ({limit}) => {
   const [product, setProduct] = useState(null);
   useEffect(() => {
      axios.get(`http://localhost:5000/products?limit=${limit || 100 }`)
      .then(data=>{
         setProduct(data.data);
         
      })
   }, [])
  return (
    <div className="text-black text-left px-10 ">
      <h1 className="text-xl uppercase font-semibold">OUR PRODUCTS</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
        {product && product.length>=1 && product.map(el=>{
          return <Card data={el} key={el._id}/>
        })}
      </div>
    </div>
  );
};

export default Products;

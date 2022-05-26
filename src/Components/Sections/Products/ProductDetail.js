import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import SingleProductDetails from './SingleProductDetails';
import Orderfrom from './Orderfrom';
const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    useEffect(() => {
        axios.get(`https://menufeture.herokuapp.com/products/${id}`)
        .then((res)=>{
            setProduct(res.data);
        })
    }, [])
    return (
        <div>
            {
                product && <div className='grid grid-cols-1 text-black'>
                <SingleProductDetails product={product}/>
                <Orderfrom product={product}/>
                </div>
            }

            
        </div>
    );
};

export default ProductDetail;
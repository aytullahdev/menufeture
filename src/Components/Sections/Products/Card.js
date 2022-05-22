import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({data}) => {
    return (
        <div className='bg-white  rounded'>
            <div>
                <img className='h-40 w-full object-cover' src={data.img} alt="" />
            </div>
            <div className='p-5'>
                <h2 className='text-xl py-2'>{data.name}</h2>
                <p>{data.desc}</p>
                <p className='text-xl py-2'>From <span className='font-bold text-green-500'>${data.price}</span></p>
                <Link to={`/products/details/${data._id}`} ><button className='py-2 px-10 text-white rounded mx-auto block  bg-green-500 hover:bg-green-600'>MORE INFO</button></Link>
            </div>
        </div>
    );
};

export default Card;
import React from 'react';

const Card = () => {
    return (
        <div className='bg-white  rounded'>
            <div>
                <img className='h-40 w-full object-cover' src="https://images.prismic.io/rpf-products/3a15d4da-46e3-4940-8be6-9fc7d201affe_RPi_4B_FEATURED.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=600&h=400" alt="" />
            </div>
            <div className='p-5'>
                <h2 className='text-xl py-2'>Product Name</h2>
                <p>You'll recognise the price along with the basic shape and size</p>
                <p className='text-xl py-2'>From <span className='font-bold text-green-500'>$35</span></p>
                <button className='py-2 px-10 text-white rounded mx-auto block bg-green-500 hover:bg-green-600'>MORE INFO</button>
            </div>
        </div>
    );
};

export default Card;
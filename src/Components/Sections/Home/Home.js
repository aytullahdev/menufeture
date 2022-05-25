import React from 'react';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <div className='text-white uppercase my-4 bg-gradient-to-r from-green-500 to-green-400  cursor-pointer rounded-lg  text-left px-4 shadow mx-10 pt-10 pb-2'>
                <h1 className='text-3xl lg:text-6xl '>Welcome to our site</h1>
                <p className='py-3 px-2  text-sm lg:text-lg   font-semibold capitalize'>We Provide Authentic IOT Parts and Microcontroller</p>
                <button className='px-10 py-5  bg-green-600 hover:bg-green-500 rounded-xl mx-auto block my-5'>VIEW PRODUCT</button>
            </div>
            <Products limit="6"/>
        </div>
    );
};

export default Home;
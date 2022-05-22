import React from 'react';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <div className='text-white uppercase my-4 bg-gradient-to-r from-green-500 to-green-400  cursor-pointer rounded-lg  text-left px-4 shadow mx-10 pt-10 pb-2'>
                <h1 className='text-6xl '>Welcome to our site</h1>
                <p className='py-2 px-10 text-md  font-semibold capitalize'>We Provide Authentic Parts From our Company throw out the world</p>
                <button className='px-10 py-5  bg-green-600 hover:bg-green-500 rounded-xl mx-auto block my-5'>VIEW PRODUCT</button>
            </div>
            <Products/>
        </div>
    );
};

export default Home;
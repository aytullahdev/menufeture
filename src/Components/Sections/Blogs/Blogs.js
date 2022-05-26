import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-white text-black text-left'>
           <div className='w-3/4 mx-auto py-5 '>
               <h1 className='text-3xl uppercase pb-3 font-bold' >How will you improve the performance of a React Application?</h1>
               <p className='text-2xl capitalize'>
                   To improve the performance of react Application we have to Understand About How React Work. We have to Store Or Catch Data And Try to reuse The Same Data. We can use Some builtin Function Like React.memo() to memorize The same Component  expensive Function.
               </p>
           </div>
           <div className='w-3/4 mx-auto py-2 '>
               <h1 className='text-3xl uppercase pb-3 font-bold'> What are the different ways to manage a state in a React application?</h1>
               <p className='text-2xl capitalize'>
                   There are Many way to manage a state SOme of them Are UseStat, Context Api, useReducer, useRedux . This Help to Know and Update  a State to Mantain it's Funconality.
               </p>
           </div>
           <div className='w-3/4 mx-auto py-2 '>
               <h1 className='text-3xl uppercase pb-3 font-bold'>How does prototypical inheritance work? </h1>
               <p className='text-2xl capitalize'>
                The prototypical inheritance is  a Javascript feture to add method and property in objects. My this an object can inherit the properties of others object and methods. to set prototype of an object we use Object.getPrototypeof and Object.setPrototypeOF. Now we can also use __proto__: Objecttoprotype.
                  
               </p>
           </div>
           <div className='w-3/4 mx-auto py-2 '>
               <h1 className='text-3xl uppercase pb-3 font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
               <p className='text-2xl capitalize'>
                To update a state or product we Call setProduct. Because setProduct Update the Value in Memory and it state. It is a Function which update the product and then return a new State in the array. 
                  
               </p>
           </div>
           <div className='w-3/4 mx-auto py-2 '>
               <h1 className='text-3xl uppercase pb-3 font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
               <p className='text-2xl capitalize'>
                To find A product by name i will use .find() ES6 function. It will return an array with all the Desire Result . code -> products.find(el=>el.name==="iphone");
                  
               </p>
           </div>
           <div className='w-3/4 mx-auto py-2 '>
               <h1 className='text-3xl uppercase pb-3 font-bold'>What is a unit test? Why should write unit tests?</h1>
               <p className='text-2xl capitalize'>
               
                  Unite test is a automated test written by Developer to ensure that a Project or Programe is run well And Give the currect Output as want. We should write unit tests to ensure the Programme Qualitey and find Out its bugs and Other errors Before the production.
               </p>
           </div>
        </div>
        </div>
    );
};

export default Blogs;
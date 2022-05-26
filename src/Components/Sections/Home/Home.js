import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Reviews from "../Main/Reviews";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <div className="text-white uppercase my-4 bg-gradient-to-r from-green-500 to-green-400  cursor-pointer  text-left px-4 shadow  pt-10 pb-2">
        <h1 className="text-3xl lg:text-5xl font-semibold italic ">We are top manufacturer for IOT Device </h1>
        <p className="py-3 px-2  text-sm lg:text-lg   font-semibold uppercase">
          We Provide Authentic IOT Parts and Microcontroller
        </p>
        <button className="px-10 py-5  bg-green-600 hover:bg-green-500 rounded-xl mx-auto block my-5">
          VIEW PRODUCT
        </button>
      </div>
      <div className="grid grid-col-1  lg:grid-cols-2 bg-gray-700 p-4">
        <div className="order-2 lg:order-1 flex flex-col text-left justify-between">
          <div>
            <img
              src="https://assets.raspberrypi.com/static/rpi-zero-2-w-logo-1bb07a4b8d53a66df3b7914f1d9b5687.svg"
              alt="BannerImg"
            />
          </div>
          <h1 className="text-3xl font-bold uppercase py-2">
            Your tiny, tiny $15 computer
          </h1>
          <p className="text-xl ">
            With wireless connectivity, 40-pin GPIO and a Raspberry Pi-designed
            System in Package, Raspberry Pi Zero 2 W packs a mighty punch into a
            little footprint.
          </p>
          <Link
            to="products/details/628e6f8fe873c9637ab04004"
            className="text-center py-3 uppercase rounded-lg my-2 hover:bg-green-600 px-[10px] text-sm bg-green-500"
          >
            Buy Raspberry Pi Zero 2 W
          </Link>
        </div>
        <div className=" order-1 lg:order-2">
          <img
            src="https://assets.raspberrypi.com/static/1b935037a6cf40c789d7bbc2fa2841b1/7a763/rpi-zero-2-w-featured.webp"
            alt=""
          />
        </div>
      </div>
      <Products limit="6" />
      <Reviews/>
      <div className="bg-white text-black py-2">
        <h1 className="text-3xl text-center uppercase">News</h1>
        <p className="py-2 text-lg lg:text-xl my-4 lg:font-semibold">
          Discover the latest stories from Raspberry Pi and from our community
          all over the world
        </p>

        <div className="grid mx-4 grid-cols-1 lg:grid-cols-3 ">
          <div className="hover:shadow rounded-xl  px-2 flex flex-col justify-between my-2">
            <div>
              <img
                className="rounded-xl"
                src="https://assets.raspberrypi.com/static/2b181bb0ac1f6ba686cba267f021af0d/26222/store.webp"
                alt=""
              />
            </div>
           
            <div className="py-2">
              <h1 className="font-bold text-2xl">Raspberry Pi Store</h1>
              <p className="text-xl text-left py-2">
                Cambridge’s one-stop shop for all things Raspberry Pi.
              </p>
              <button className="link text-sm font-semibold">More</button>
            </div>
          </div>
          <div className="hover:shadow rounded-xl  px-2 flex flex-col justify-between my-2">
            <div>
              <img
                className="rounded-xl"
                src="https://assets.raspberrypi.com/static/d1a74b4357672010429db3e0cc18f9a4/26222/press.webp"
                alt=""
              />
            </div>
            <div className="py-2">
              <h1 className="font-bold text-2xl">Raspberry Pi Press</h1>
              <p className="text-xl text-left py-2">
                Your essential bookshelf for computing, gaming and hands-on
                making.
              </p>
              <button className="link text-sm font-semibold">More</button>
            </div>
          </div>
          <div className="hover:shadow rounded-xl  px-2 flex flex-col justify-between my-2">
            <div>
              <img
                className="rounded-xl"
                src="https://assets.raspberrypi.com/static/8c35cb5d5ab33531733f58e4dbde6402/26222/foundation.webp"
                alt=""
              />
            </div>
            <div className="py-2">
              <h1 className="font-bold text-2xl">Raspberry Pi Foundation</h1>
              <p className="text-xl text-left py-2">
              Putting the power of computing and digital making into the hands of people all over the world.
              </p>
              <button className="link text-sm font-semibold">More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

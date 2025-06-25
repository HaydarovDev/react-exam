import React from "react";
import phone from "../assets/images/Iphone Image.png";

const Home = () => {
  return (
    <article className="bg-[#211C24] w-full min-h-[100vh] flex justify-center items-center text-white">
      <div className="w-[80%] flex justify-between items-center">
        <div>
          <h3 className="opacity-[40%] text-2xl">Pro.Beyond.</h3>
          <h1 className="text-8xl bold my-2">
            <span className="thin">IPhone 14</span> Pro
          </h1>
          <p className="text-[#909090] mb-2">
            Created to change everything for the better. For everyone
          </p>
          <button className="border-1 py-3 px-12 cursor-pointer rounded-[6px]  border-white">
            Shop Now
          </button>
        </div>
        <img className="relative top-12" src={phone} alt="" />
      </div>
    </article>
  );
};

export default Home;

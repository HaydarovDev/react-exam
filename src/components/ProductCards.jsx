import React from "react";
import img1 from "../assets/images/Group 1.png";
import img2 from "../assets/images/image 64.png";
import img3 from "../assets/images/image 41.png";
import img4 from "../assets/images/Macbook 1.png";

const ProductCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white p-7">
        <img
          src={img1}
          alt="Huawei Product"
          className="w-full mx-auto h-[400px]"
        />
        <h2 className="text-2xl thin font-semibold mb-2">Popular Products</h2>
        <p className="text-gray-500 text-sm mb-4">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </p>
        <button className="cursor-pointer border px-6 py-2 rounded hover:bg-gray-100">
          Shop Now
        </button>
      </div>

      <div className="bg-[#F9F9F9] p-7">
        <img src={img2} alt="iPad Pro" className="w-full mx-auto h-[400px]" />
        <h2 className="text-xl font-semibold mb-2">Ipad Pro</h2>
        <p className="text-gray-500 text-sm mb-4">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </p>
        <button className="cursor-pointer border px-6 py-2 rounded hover:bg-gray-100">
          Shop Now
        </button>
      </div>

      <div className="bg-[#EAEAEA] p-7">
        <img
          src={img3}
          alt="Samsung Galaxy"
          className="w-full mx-auto h-[400px]"
        />
        <h2 className="text-xl font-semibold mb-2">Samsung Galaxy</h2>
        <p className="text-gray-500 text-sm mb-4">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </p>
        <button className="cursor-pointer border px-6 py-2 rounded hover:bg-gray-100">
          Shop Now
        </button>
      </div>

      <div className="bg-[#2C2C2C] p-7 text-white">
        <img
          src={img4}
          alt="Macbook Pro"
          className="w-full mx-auto h-[400px]"
        />
        <h2 className="text-xl font-semibold mb-2">Macbook Pro</h2>
        <p className="text-gray-300 text-sm mb-4">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </p>
        <button className="cursor-pointer border px-6 py-2 rounded hover:bg-gray-800">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCards;

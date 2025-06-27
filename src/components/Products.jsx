import React from "react";
import macbook from "../assets/images/MacBookPro14.png";
import ps from "../assets/images/Playstation.png";
import earPhones from "../assets/images/earphone.png";
import vr from "../assets/images/VR.png";

const Products = () => {
  return (
    <article className="flex w-full">
      <div className="w-[50%]">
        <div className="w-full flex items-center">
          <img src={ps} alt="" />
          <div className="p-3">
            <h1 className="text-6xl">Playstation 5</h1>
            <p className="mt-2 text-[#909090]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EDEDED] flex items-center">
            <img src={earPhones} alt="" />
            <div className="p-3 w-[50%]">
              <h1 className="regular text-4xl">
                Apple AirPods <span className="bold">Max</span>
              </h1>
              <p className="text-[#909090] leading-6 text-[16px]">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
          <div className="bg-[#353535] min-w-[50%] flex items-center text-white">
            <img src={vr} alt="" />
            <div className="p-3">
              <h1 className="regular text-4xl">
                Apple AirPods <span className="bold">Max</span>
              </h1>
              <p className="text-[#909090] leading-6 text-[16px] mt-2">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[50%] flex items-center bg-[#EDEDED]">
        <div className="pl-5">
          <h1 className="thin text-7xl">
            Macbook <span className="bold block">Air</span>
          </h1>
          <p className="text-[#909090] leading-6 text-[16px]">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className="border-1 py-3 px-12 cursor-pointer rounded-[6px]  border-[#000000] mt-2">
            Shop Now
          </button>
        </div>
        <img src={macbook} alt="" />
      </div>
    </article>
  );
};

export default Products;

import React from "react";

const Banner = () => {
  return (
    <article className="py-35 bg-[#2E2E2E] text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl thin">
        Big Summer <span className="bold">Sale</span>
      </h1>
      <p className="text-[#787878] regular">
        Commodo fames vitae vitae leo mauris in. Eu consequat.
      </p>
      <button className="cursor-pointer px-10 mt-7 border border-[#FFFFFF] rounded py-2">
        Shop Now
      </button>
    </article>
  );
};

export default Banner;

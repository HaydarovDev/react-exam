import React from "react";
import logo from "../assets/images/Logo.svg";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex z-10 py-4 justify-center items-center fixed w-full bg-white">
      <div className="w-[80%] flex justify-between items-center">
        <h1>
          <a href="">
            <img src={logo} alt="" />
          </a>
        </h1>
        <label
          htmlFor="id"
          className="flex items-center bg p-2 rounded w-[400px]"
          title="Search..."
        >
          <CiSearch className="mx-2 clr" />
          <input
            type="search"
            placeholder="Search"
            id="id"
            className="regular outline-none placeholder:text-[15px] clr"
          />
        </label>
        <ul className="flex gap-7">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
        <div className="flex gap-3 text-2xl">
          <IoIosHeartEmpty />
          <CiShoppingCart />
          <CiUser />
        </div>
      </div>
    </header>
  );
};

export default Header;

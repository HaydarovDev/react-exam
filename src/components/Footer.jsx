import React from "react";
import logo from "../assets/images/Logo.png";
import { FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black flex justify-center items-center text-white px-6 py-10">
      <main className="w-[80%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <p className="text-sm text-gray-400 mt-3">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">
              Assistance to the buyer
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex gap-4 justify-center sm:justify-start">
          <FaTwitter />
          <FaFacebookF />
          <FaTiktok />
          <AiFillInstagram />
        </div>
      </main>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../Assets/Images/dclogo.png";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="flex fixed w-full mb-5 z-10 justify-between items-center p-4 backdrop-blur-lg text-white gap-80 font-bold font-mono">
      <img src={logo} alt="" className="h-[2rem]" />

      <div className="flex">
        <HamburgerMenu />
        <div>
          <ul className="hidden  xl:flex justify-center items-center gap-7">
            <li className=" text-[1rem] hover:text-white">Comics</li>
            <li className=" text-[1rem] hover:text-white">
              <a href="#movie">Movies</a>
            </li>
            <li className=" text-[1rem] hover:text-white">
              <a href="#Bat Mobile">Bat Mobile</a>
            </li>
            <li className=" text-[1rem] hover:text-white">
              <a href="#facts">Facts</a>
            </li>
            <li className=" text-[1rem] hover:text-white">Shop</li>
            <li className=" text-[1rem] hover:text-white">Collectibles</li>
          </ul>
        </div>
      </div>
      <div className="md:hidden  xl:flex">
        <button className="hidden xl:flex border border-white rounded-lg">
          <p className="px-5 py-2"> Subscribe</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

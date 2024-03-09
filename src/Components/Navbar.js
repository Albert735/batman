import React from "react";
import logo from "../Assets/Images/batman 4k wallpaper for iphone.png";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-transparent">
      <div>
        <img src={logo} alt="" className="h-[2rem]" />
      </div>
      <div className="flex">
        <HamburgerMenu />
        <div>
          <ul className="hidden md:flex justify-center items-center gap-7">
            <li className="font-mono font-light text-[1rem] hover:text-white">
              GALLERY
            </li>
            <li className="font-mono font-light text-[1rem] hover:text-white">
              STORY
            </li>
            <li className="font-mono font-light text-[1rem] hover:text-white">
              TRAILER
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../Assets/Images/dclogo.png";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="flex fixed z-10 justify-between items-center p-4 bg-transparent text-white">
      <div>
        <img src={logo} alt="" className="h-[2rem]" />
      </div>
      <div className="flex">
        <HamburgerMenu />
        <div>
          <ul className="hidden md:flex justify-center items-center gap-7">
            <li className="font-mono font-light text-[1rem] hover:text-white">
              Comics
            </li>
            <li className="font-mono font-light text-[1rem] hover:text-white">
              Movies
            </li>
            <li className="font-mono font-light text-[1rem] hover:text-white">
              Games
            </li>
            <li className="font-mono font-light text-[1rem] hover:text-white">
              News
            </li>
            <li className="font-mono font-light text-[1rem] hover:text-white">
              Shop
            </li>
            <li className="font-mono font-light text-[1rem] hover:text-white">
              Collectibles
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

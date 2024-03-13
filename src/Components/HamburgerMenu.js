import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggling} className="xl:hidden">
        <IoMenu size={30} />
      </button>

      {isOpen && (
        <div className="fixed w-full h-[30rem] left-0 top-0 bg-[#173250] p-10 z-20 border-b-4 ">
          <div className="flex  justify-center items-center">
            <IoMdCloseCircleOutline
              onClick={toggleDropdown}
              size={30}
              className="absolute top-2 right-2 m-2"
            />

            <ul className="flex flex-col justify-center items-center h-[20rem] gap-y-5">
              <li
                onClick={toggleDropdown}
                className="font-mono font-light text-[1.3rem] hover:text-white"
              >
                Comics
              </li>
              <li
                onClick={toggleDropdown}
                className="font-mono font-light text-[1.3rem] hover:text-white"
              >
                <a href="#movie"> Movies</a>
              </li>
              <li
                onClick={toggleDropdown}
                className="font-mono font-light text-[1.3rem] hover:text-white"
              >
                Bat Mobile
              </li>
              <li
                onClick={toggleDropdown}
                className="font-mono font-light text-[1.3rem] hover:text-white"
              >
                Facts
              </li>
              <li
                onClick={toggleDropdown}
                className="font-mono font-light text-[1.3rem] hover:text-white"
              >
                Shop
              </li>
              <li
                onClick={toggleDropdown}
                className="font-mono font-light text-[1.3rem] hover:text-white"
              >
                Collectibles
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

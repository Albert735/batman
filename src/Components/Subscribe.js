import React from "react";
import logo from "../Assets/Images/dclogo.png";

const Subscribe = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-[#0E0F10] text-white">
      <button className="border-2 p-2 rounded-md">Subscribe</button>
      <img src={logo} alt="" className="h-[2rem]" />
    </div>
  );
};

export default Subscribe;

import React from "react";
// import man from "../Assets/Images/1340752.png";
// import left from "../Assets/Images/Batman Art.png";
// import { FaShieldAlt } from "react-icons/fa";
// import { GiPistolGun } from "react-icons/gi";
// import { GiKnifeThrust } from "react-icons/gi";
// import { GiHeavyBullets } from "react-icons/gi";
// import { GiKingJuMask } from "react-icons/gi";
const Hero = () => {
  return (
    <div className="flex relative flex-col justify-center items-center bg-image h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="batmfa text-[10rem] text-gray-400">BATMAN</h1>
        <p className="batmfo text-[3rem] text-yellow-400 text-center">
          A SYMBOL Of <br /> VENGEANCE
        </p>
      </div>
    </div>
  );
};

export default Hero;

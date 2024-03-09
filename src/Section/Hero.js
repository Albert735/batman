import React from "react";
import man from "../Assets/Images/1340752.png";
import left from "../Assets/Images/Batman Art.png";
import { FaShieldAlt } from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";
import { GiKnifeThrust } from "react-icons/gi";
import { GiHeavyBullets } from "react-icons/gi";
import { GiKingJuMask } from "react-icons/gi";
const Hero = () => {
  return (
    <div className="flex relative flex-col justify-center items-center bg-image h-screen">
      <div className="flex absolute top-2 left-10 justify-center items-center">
        <h1 className="batmfa font-sans md:text-[10rem] text-white font-light">
          BAtMAN
        </h1>
      </div>
      <div className="flex absolute top-[13rem] left-10 justify-center items-center">
        <p className="batmfo font-sans md:text-[3rem] text-white font-light">
          A SYMBOL OF <br /> VENGEANCE
        </p>
      </div>
      <div className="flex flex-col  absolute top-[40rem] left-[15rem] justify-center items-start">
        <p className="flex flex-col batmfo font-sans md:text-[3rem] text-white font-light leading-normal">
          <span className="font-mono text-[2rem]">City:</span>{" "}
          <span>GOTHAM CITY</span>
        </p>
        <p className=" font-mono font-semi-bold text-[1.3rem] text-white border-b-4 border-yellow-400">
          Dangerous
        </p>
        <p className="batmfa text-[1.3rem] text-white">
          <span>Zip Code</span>:123456
        </p>
      </div>
      <div className="absolute -left-[20rem] bottom-[0rem]">
        <img src={left} alt="" className="h-[40rem] " />
      </div>

      <div className="absolute right-0 bottom-0">
        <img
          src={man}
          alt=""
          className="h-[40rem] rounded-b-md brightness-125 "
        />
      </div>
      <div className="flex absolute bottom-11 right-5 flex-col justify-center items-start text-white space-y-3">
        <h1 className="font-mono text-[1.3rem] border-b-4 border-yellow-400">
          Specialty
        </h1>
        <ul className="flex flex-col gap-x-4 gap-y-4 font-light ">
          <li>
            <span className="bg-[#F4C24A] px-1 font-mono mr-2 rounded-full"></span>
            <span>Armed</span>
          </li>
          <li>
            <span className="bg-[#F4C24A]  px-1 font-mono mr-2 rounded-full"></span>
            <span> Intelligent</span>
          </li>
          <li>
            <span className="bg-[#F4C24A] px-1 font-mono mr-2 rounded-full"></span>{" "}
            <span>Tech Guy </span>
          </li>
        </ul>
      </div>
      <div className="absolute top-8 right-2 w-[25rem] flex flex-col justify-center items-start text-white">
        <h1 className="batmfa border-b-4 border-yellow-400 text-[2rem]">
          Gotham's Dark Knight
        </h1>
        <p className="font-sans leading-loose text-[13px]">
          Batman, created in 1939, is a symbol of justice and self-discovery,
          based on the traumatic loss of his parents. As the "World's Greatest
          Detective," Batman uses intellect, physical prowess, and high-tech
          gadgets to combat crime in Gotham City. His dual identity as playboy
          and vigilante adds depth to the character. His legacy extends to film
          and television, inspiring generations to confront darkness and rise
          above adversity.
        </p>
      </div>
      <div className="absolute top-[20rem] left-[40rem] flex flex-col text-white">
        <span className="font-mono text-[1.3rem]">Alias:</span>
        <span className="batmfa text-[1.3rem] font-lighter">Bruce Wayne</span>
      </div>
      <div className="absolute right-[23rem] top-[30rem]">
        <h1 className="font-mono text-white border-b-4">Armour</h1>
        <div className="">
          <span className="m-4 flex-row">
            <GiKingJuMask
              size={35}
              fill="white"
              className="rounded-full border-2 p-1 "
            />{" "}
            Suite
          </span>
          <span className="m-4">
            <GiPistolGun
              size={35}
              fill="white"
              className="rounded-full border-2 p-1 "
            />
          </span>
          <span className="m-4">
            <GiKnifeThrust
              size={35}
              fill="white"
              className="rounded-full border-2 p-1 "
            />
          </span>
          <span className="m-4">
            <GiHeavyBullets
              size={35}
              fill="white"
              className="rounded-full border-2 p-1 "
            />
          </span>
          <span className="m-4">
            <FaShieldAlt
              size={35}
              fill="white"
              className="rounded-full border-2 p-1 "
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

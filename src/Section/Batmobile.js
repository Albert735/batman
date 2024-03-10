import React from "react";
import pic1 from "../Assets/Images/mobile1.jpeg";
import mobile2 from "../Assets/Images/mobile2.jpeg";
import mobile3 from "../Assets/Images/mobile3.jpeg";
import mobile4 from "../Assets/Images/mobile4.jpeg";
import mobile5 from "../Assets/Images/mobile5.jpeg";

const Batmobile = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-batmobile  text-white space-y-10 p-10">
      <div className="flex flex-row">
        <h1 className="batmfa text-[5rem]">BATMOBILE</h1>
        <p className="batmfo">More Than just a car</p>
      </div>

      <div className="flex justify-center items-center max-w-screen-xl gap-10">
        <div className="space-y-4">
          <h1 className="batmfa text-center text-[2rem] text-yellow-400">
            The Ultimate weapon
          </h1>
          <p className="font-mono w-[30rem] text-justify">
            The Batmobile is Batman's iconic vehicle, transforming from a
            classic muscle car to a high-tech beast. Packed with armor, weapons,
            and advanced tech, it's not just transport - it's a command center
            and a psychological weapon. Always evolving, the Batmobile
            symbolizes Batman's power and commitment to justice.
          </p>
        </div>

        <img
          src={pic1}
          alt=""
          className="h-[30rem] brightness-125 rounded-md"
        />
      </div>
      <div className="flex justify-center items-center max-w-screen-xl font-mono">
        <ul className="flex justify-center items-start gap-[5rem]">
          <li className="flex flex-col space-y-2">
            <span className="border-b-2 p-1 font-bold border-yellow-400">
              length:
            </span>
            <span className="font-light">15ft (4.527 m).</span>
          </li>
          <li className="flex flex-col space-y-2">
            <span className="border-b-2 p-1 font-bold border-yellow-400">
              Width:
            </span>
            <span className="font-light"> 2.8448 in broad.</span>
          </li>
          <li className="flex flex-col space-y-2">
            <span className="border-b-2 p-1 font-bold border-yellow-400">
              Weight:
            </span>
            <span className="font-light space-y-2">2.5 tons.</span>
          </li>
          <li className="flex flex-col space-y-2">
            <span className="border-b-2 p-1 font-bold border-yellow-400">
              Acceleration:
            </span>
            <span className="font-light">0-60 mph in 5.3 seconds.</span>
          </li>
          <li className="flex flex-col space-y-2">
            <span className="border-b-2 p-1 font-bold border-yellow-400">
              Engine:
            </span>
            <span className="font-light space-y-2">
              350-Cubic-inch Chevy engine <br /> capable of 500 horsepower.
            </span>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-10 max-w-screen-xl">
        <div>
          <img
            src={mobile2}
            alt=""
            className="h-[15rem] brightness-150 hover:scale-110 hover:ease-in-out hover:delay-75 hover:duration-200  rounded-md"
          />
        </div>
        <div>
          <img
            src={mobile3}
            alt=""
            className="h-[15rem] brightness-150 hover:scale-110 hover:ease-in-out hover:delay-75 hover:duration-200  rounded-md"
          />
        </div>
        <div>
          <img
            src={mobile4}
            alt=""
            className="h-[15rem] brightness-150 hover:scale-110 hover:ease-in-out hover:delay-75 hover:duration-200  rounded-md"
          />
        </div>
        <div>
          <img
            src={mobile5}
            alt=""
            className="h-[15rem] brightness-150 hover:scale-110 hover:ease-in-out hover:delay-75 hover:duration-200  rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Batmobile;

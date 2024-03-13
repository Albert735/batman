import React from "react";
import pic1 from "../Assets/Images/mobile1.jpeg";
import mobile2 from "../Assets/Images/mobile2.jpeg";
import mobile3 from "../Assets/Images/mobile3.jpeg";
import mobile4 from "../Assets/Images/mobile4.jpeg";
import mobile5 from "../Assets/Images/mobile5.jpeg";

const Batmobile = () => {
  return (
    <div
      id="Bat Mobile"
      className="flex flex-col justify-center items-center bg-batmobile  text-white space-y-10 p-10 "
    >
      <div className="flex flex-col ">
        <h1 className="batmfa md:text-[5rem] text-[2rem]">BATMOBILE</h1>
        <p className="batmfo text-yellow-400 text-center">
          More Than just a car
        </p>
      </div>

      <div className="flex flex-col-reverse xl:flex-row justify-center max-w-screen-xl gap-10">
        <div className="space-y-[3rem]">
          <div>
            <h1 className="batmfa text-center md:text-[2rem] text-yellow-400">
              The Ultimate weapon
            </h1>
            <p className="font-mono md:w-[30rem] text-justify">
              The Batmobile is Batman's iconic vehicle, transforming from a
              classic muscle car to a high-tech beast. Packed with armor,
              weapons, and advanced tech, it's not just transport - it's a
              command center and a psychological weapon. Always evolving, the
              Batmobile symbolizes Batman's power and commitment to justice.
            </p>
          </div>

          <button className="bg-yellow-400 text-black w-[10rem] rounded-md  p-3">
            Check it out
          </button>
        </div>

        <img
          src={pic1}
          alt=""
          className="xl:h-[30rem] md:h-[25rem] h-60  brightness-125 rounded-md"
        />
      </div>
      <div className="flex  justify-center items-center max-w-screen-xl font-mono">
        <ul className="grid grid-cols-2  xl:flex justify-center items-start gap-[5rem]">
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
      <div className="grid grid-cols-2 xl:flex justify-center items-center gap-10 max-w-screen-xl">
        <div>
          <img
            src={mobile2}
            alt=""
            className="h-[10rem] md:h-[15rem] w-[15rem] md:w-[20rem] brightness-150 hover:scale-110 hover:ease-in-out hover:delay-75 hover:duration-200  rounded-md"
          />
        </div>
        <div>
          <img
            src={mobile3}
            alt=""
            className="h-[10rem] md:h-[15rem] w-[15rem] md:w-[20rem] brightness-150 hover:scale-110 hover:ease-in-out hover:delay-75 hover:duration-200  rounded-md"
          />
        </div>
        <div>
          <img
            src={mobile4}
            alt=""
            className="h-[10rem] md:h-[15rem] w-[15rem] md:w-[20rem] brightness-150 hover:scale-110 hover:ease-in-out hover:delay-75 hover:duration-200  rounded-md"
          />
        </div>
        <div>
          <img
            src={mobile5}
            alt=""
            className="h-[10rem] md:h-[15rem] w-[15rem] md:w-[20rem] brightness-150 hover:scale-110 hover:ease-in-out hover:delay-75 hover:duration-200  rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Batmobile;

import React from "react";
import factslogo from "../Assets/Images/pic4.png";

const Facts = () => {
  return (
    <div
      id="facts"
      className="flex flex-col xl:flex-row justify-center items-center bg-[#0E0F10] gap-[5rem] py-20 pb-0 md:py-10 md:pb-0 "
    >
      <div className="flex flex-col max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-mono text-right text-gray-200 ">
            Character Facts
          </h1>
          <p className="text-[2.5rem] md:text-[5rem] batmfa text-yellow-400 text-center">
            Batman
          </p>
        </div>

        <div className="flex relative flex-col md:flex-row justify-center items-center  text-[12px] md:gap-[2rem]  ">
          <ul className=" text-gray-200 grid grid-cols-2 items-start space-y-5 font-mono gap-5 ">
            <li className="flex flex-col w-[10rem]">
              <span className="font-bold">POWERS:</span>
              <span>
                Exceptional Martial Artist,Combat Strategy, <br />
                Inexhaustible wealth, <br /> Brilliant deductive skill,Advanced
                Technology.
              </span>
            </li>
            <li className="flex flex-col w-[10rem]">
              <span className="font-bold"> OCCOPATION:</span>{" "}
              <span>CEO of Wayne Enterprise</span>{" "}
            </li>
            <li className="flex flex-col w-[10rem]">
              <span className="font-bold">ALIAS:</span>
              <span>Dark Knight, Caped Crusader, Matches Malone</span>
            </li>
            <li className="flex flex-col w-[10rem]">
              <span className="font-bold"> FIRST APPEARANCE: </span>{" "}
              <span>Detective Comics #27 (1939)</span>
            </li>
            <li className="flex flex-col w-[10rem]">
              <span className="font-bold"> REAL NAME: </span>{" "}
              <span>Bruce Wayne</span>
            </li>
          </ul>

          <img
            src={factslogo}
            alt=""
            className="items-end h-[20rem] md:h-[30rem] xl:h-[40rem] ml-[10rem] md:ml-0  brightness-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Facts;

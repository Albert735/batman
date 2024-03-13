import React from "react";
import factslogo from "../Assets/Images/pic4.png";

const Facts = () => {
  return (
    <div id="facts" className="flex justify-center items-center bg-[#0E0F10] gap-[5rem] py-10">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-mono text-right text-gray-200 ">Character Facts</h1>
          <p className="text-[5rem] batmfa text-yellow-400 text-center">Batman</p>
        </div>
        <div>
          <ul className="text-gray-200 space-y-5 font-mono">
            <li className="flex flex-col">
              <span className="font-bold">POWERS:</span>
              <span>
                Exceptional Martial Artist,Combat Strategy, <br />
                Inexhaustible wealth, <br /> Brilliant deductive skill,Advanced
                Technology.
              </span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold"> OCCOPATION:</span>{" "}
              <span>CEO of Wayne Enterprise</span>{" "}
            </li>
            <li className="flex flex-col">
              <span className="font-bold">ALIAS:</span>
              <span>Dark Knight, Caped Crusader, Matches Malone</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold"> FIRST APPEARANCE: </span>{" "}
              <span>Detective Comics #27 (1939)</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold"> REAL NAME: </span>{" "}
              <span>Bruce Wayne</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={factslogo} alt="" className="h-[40rem] brightness-125" />
      </div>
    </div>
  );
};

export default Facts;

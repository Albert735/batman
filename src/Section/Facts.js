import React from "react";
import factslogo from "../Assets/Images/pic4.png";

const Facts = () => {
  return (
    <div className="flex justify-center items-center bg-[#09121A] gap-[5rem]">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-mono text-right text-white ">Character Facts</h1>
          <p className="text-[5rem] batmfa text-white text-center">Batman</p>
        </div>
        <div>
          <ul className="text-white">
            <li>
              POWERS:
              <span>
                {" "}
                Exceptional Martial Artist,Combat Strategy, <br />
                Inexhaustible wealth, Brilliant deductive skill,Advanced
                Technology.
              </span>
            </li>
            <li>
              OCCOPATION: <span>CEO of Wayne Enterprise</span>{" "}
            </li>
            <li>
              {" "}
              ALIAS: <span>Dark Knight, Caped Crusader, Matches Malone</span>
            </li>
            <li>
              FIRST APPEARANCE: <span>Detective Comics #27 (1939)</span>
            </li>
            <li>
              REAL NAME: <span>Bruce Wayne</span>
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

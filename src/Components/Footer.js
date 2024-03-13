import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex  gap-[5rem] bg-footer text-white p-10 ">
      <div className="flex  justify-center items-start gap-[5rem] max-w-screen-xl mx-auto">
        <div className="space-y-3">
          <h1 className="font-mono text-[1.5rem] border-b-2 border-b-yellow-400">
            DC
          </h1>
          <ul className="space-y-4">
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>Ad Choices</li>
            <li>Advertising</li>
            <li>Jobs</li>
            <li>Subscription</li>
            <li>Talent Workshop</li>
            <li>CPSC Certificate</li>
            <li>Rating</li>
            <li>Shop help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h1 className="font-mono text-[1.5rem] border-b-2 border-b-yellow-400">
            {" "}
            DC Comics
          </h1>
          <ul className="space-y-4">
            <li>Characters</li>
            <li>Comics</li>
            <li>Movies</li>
            <li>TV</li>
            <li>Games</li>
            <li>Videos</li>
            <li>News</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h1 className="font-mono text-[1.5rem] border-b-2 border-b-yellow-400">
            Shop
          </h1>
          <ul className="space-y-4">
            <li>Shop DC</li>
            <li>Shop DC</li>
            <li>Shop DC Collectibles</li>
            <li>Shop DC Collectibles</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="font-mono text-[1.3rem] ">E-mail</h1>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="p-3 rounded-md xl:w-[20rem]"
          />
          <ul className="flex gap-8">
            <li>
              <FaDiscord size={30}/>
            </li>
            <li>
              <FaTwitch size={30}/>
            </li>
            <li>
              <FaPlaystation size={30}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

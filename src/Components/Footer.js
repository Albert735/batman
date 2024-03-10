import React from "react";
import footerpic from "../Assets/Images/footerpic.png";

const Footer = () => {
  return (
    <div className="flex  justify-center items-start gap-[5rem] bg-[#0E0F10] text-white p-10">
      <div className="flex justify-center items-start gap-[5rem]">
        <div  className="space-y-3">
          <h1 className="font-mono text-[1.5rem]">DC</h1>
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
          <h1 className="font-mono text-[1.5rem]"> DC Comics</h1>
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
        <div  className="space-y-3">
          <h1 className="font-mono text-[1.5rem]">Shop</h1>
          <ul className="space-y-4">
            <li>Shop DC</li>
            <li>Shop DC</li>
            <li>Shop DC Collectibles</li>
            <li>Shop DC Collectibles</li>
          </ul>
        </div>
      </div>
      <div className="absolute top-[5.5rem] right-0">
        <img src={footerpic} alt="" className="h-[25rem]" />
      </div>
    </div>
  );
};

export default Footer;

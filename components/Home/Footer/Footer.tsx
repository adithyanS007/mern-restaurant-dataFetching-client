import React from "react";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#121618] px-4 md:px-10 py-3 text-[#a4a1a1]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-full space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <MdCopyright />
          <p className="text-center md:text-left">Deepnetsoft. All rights reserved</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center">
          <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
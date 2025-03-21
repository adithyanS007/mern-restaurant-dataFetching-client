import React from "react";
import { FaXTwitter, FaLocationPin } from "react-icons/fa6";
import { FaFacebookF, FaInstagramSquare, FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";

const ContactUs = () => {
  return (
    <footer className="bg-[#000000] px-4 md:px-16 lg:px-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-10 text-white text-center">
        {/* Connect With Us Section */}
        <div className="border border-white p-4 rounded-lg shadow-md flex flex-col justify-center items-center relative">
          <h2 className="text-lg font-bold mb-4 text-sky-800">Connect With Us</h2>
          <ul className="flex space-x-4">
            <li className="pt-1">
              <FaPhoneAlt />
            </li>
            <p>+91 99999456</p>
          </ul>
          <ul className="flex space-x-4">
            <li className="pt-1">
              <IoIosMail />
            </li>
            <p>info@deepnetsoft.com</p>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="border p-4 rounded-lg shadow-md flex flex-col justify-center items-center relative">
          {/* PNG Image Positioned at the Top Center */}
          <div className="absolute -top-11">
            <Image
              src="/images/deepnetsoft.png"
              alt="Logo"
              width={86}
              height={76}
              className="mx-auto"
            />
          </div>
          <div className="pt-10"> {/* Adjust padding to account for the logo */}
            <h2 className="text-[25px] font-medium text-blue-600">
              DEEP <span className="text-white">NET</span>{" "}
              <span className="text-[25px] font-medium text-[#857878]">SOFT</span>
            </h2>
          </div>
          <ul className="flex space-x-4">
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
          </ul>
        </div>

        {/* Find Us Section */}
        <div className="border p-4 rounded-lg shadow-md flex flex-col justify-center items-center relative">
          <h2 className="text-lg font-bold mb-4 text-sky-800">Find Us</h2>
          <ul className="flex space-x-4">
            <li className="pt-1">
              <FaLocationPin />
            </li>
            <p>First floor, Geo Infopark</p>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-center items-center text-center pb-2">
        <ul className="flex space-x-4">
          <li className="pt-1">
            <FaRegCopyright />
          </li>
          <p>2024 Deepnetsoft Solutions. All rights reserved.</p>
        </ul>
      </div>
    </footer>
  );
};

export default ContactUs;
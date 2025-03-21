'use client';

import React from "react";

type MenuItem = {
  name: string;
  price: number;
  description: string;
};

type MenuDetailsProps = {
  menuItems: MenuItem[];
};

const MenuDetails: React.FC<MenuDetailsProps> = ({ menuItems }) => {
  return (
    <div className="relative w-full bg-[#000000] pt-10 pb-10">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-80"
        style={{
          backgroundImage: "url('/images/menudetailbg.png')",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Rectangular border - Responsive and Centered */}
      <div className="relative text-white flex justify-center items-center px-4 md:px-8 lg:px-12"> {/* Added padding around the box */}
        <div className="border border-white px-4 py-6 w-full max-w-[1100px] mt-10 flex flex-col justify-center items-center bg-opacity-80 ">
          <h1 className="text-3xl lg:text-4xl font-bold text-center pt-5">Menu Details</h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 pb-8 w-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="w-full h-auto flex flex-col items-start"
              >
                <h2 className="pb-5 text-xl lg:text-2xl">
                  {item.name} .................... ${item.price}
                </h2>
                <p className="w-full">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
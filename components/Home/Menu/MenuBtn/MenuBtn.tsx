'use client';

import React, { useState } from "react";
import axios from "axios";
import { MenuButton } from "@/app/constants/ConstData";

type MenuButtonType = {
  id: number;
  title: string;
};

type MenuItem = {
  name: string;
  price: number;
  description: string;
};

type MenuBtnProps = {
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

const MenuBtn: React.FC<MenuBtnProps> = ({ setMenuItems }) => {
  const [activeButton, setActiveButton] = useState<number | null>(null); // Tracks the currently active button

  const getMenuApiRoute = (title: string) => {
    const normalizedTitle = title.toLowerCase();

    switch (normalizedTitle) {
      case "food":
        return "https://deepnetsoft-test-server.vercel.app/api/foods"; // Food API route
      case "drinks":
        return "https://deepnetsoft-test-server.vercel.app/api/drinks"; // Drinks API route
      case "brunch":
        return "https://deepnetsoft-test-server.vercel.app/api/brunches"; // Brunch API route
      default:
        console.error(`No API route found for title: ${normalizedTitle}`);
        return null;
    }
    
  };

  const handleClick = async (id: number, title: string): Promise<void> => {
    setActiveButton(id); // Set the active button
    const apiRoute = getMenuApiRoute(title);

    if (!apiRoute) {
      console.error("Invalid API route");
      return;
    }

    try {
      const response = await axios.get(apiRoute);
      setMenuItems(response.data); // Pass the fetched data to the parent
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div className="relative w-full h-[100px]  mt-[120px] bg-[#000000]">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-80"
        style={{
          backgroundImage: "url('/images/menubg.png')",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <ul className="flex gap-5">
          {MenuButton.map((item: MenuButtonType) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id, item.title)} // Pass both the ID and title
                className={`${
                  activeButton === item.id
                    ? "bg-blue-600" // Highlight the active button
                    : "bg-black"
                } text-white text-lg px-5 py-3 hover:bg-blue-800 transition-all duration-300 font-semibold`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBtn;
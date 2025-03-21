'use client'

import Link from "next/link";
import { NavbarMenu } from "@/app/constants/ConstData";

type ResponsiveMenuProps = {
  isOpen: boolean;
};

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-20 left-0 px-20 w-full bg-[#444141] z-[20] rounded-3xl lg:hidden">
          <div className="text-[15px] font-medium uppercase text-white py-20 px-6 ">
            <ul className="flex flex-col justify-center items-center gap-10">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="hover:text-[#0063ff] transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveMenu;

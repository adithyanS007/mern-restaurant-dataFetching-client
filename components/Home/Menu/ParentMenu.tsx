'use client'
import React, { useState } from "react";
import MenuBtn from "./MenuBtn/MenuBtn";
import MenuDetails from "./MenuDetails/MenuDetails";

type MenuItem = {
    name: string;
    price: number;
    description: string;
};

const ParentMenu: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]); // Explicitly type the state as MenuItem[]

    return (
        <div>
            <MenuBtn setMenuItems={setMenuItems} />
            <MenuDetails menuItems={menuItems} />
        </div>
    );
};

export default ParentMenu;
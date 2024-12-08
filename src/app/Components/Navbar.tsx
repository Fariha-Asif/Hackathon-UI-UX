"use client"; // If you use hooks like useState or useEffect

import { ChevronDown, Search, ShoppingCartIcon, User } from "lucide-react";
import React from "react";


const Navbar = () => {
  return (
    <header className="flex min-w-[670px] xl:w-[1240px] h-[41px] mt-[42px] ml-[20px] xl:ml-[30px] bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[126px] h-[18px] text-2xl font-black text-black">
          <span className="tracking-wide">SHOP.CO</span>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex w-[421px] h-[22px] space-x-2 font-medium text-black">
          <a href="#" className="w-[57px] h-[22px] flex hover:text-black">
            Shop <span className="w-[16px] h-[16px] text-black"><ChevronDown/></span>
          </a>
          <a href="#" className="w-[65px] h-[22px] text-black">
            On Sale
          </a>
          <a href="#" className="w-[115px] h-[22px] text-black">
            New Arrivals
          </a>
          <a href="#" className="w-[56px] h-[22px] text-black">
            Brands
          </a>
        </nav>

        {/* Search Bar */}
        <div className="sm:hidden lg:flex items-center border rounded-full bg-gray-100 px-4 py-2 w-[377px] h-[48px]">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none px-2 w-full text-gray-600"
          />
        </div>

        {/* Icons */}
        <div className="w-[96px] lg:w-[62px] h-[24px] flex items-center space-x-6">
          {/* Cart Icon */}
          <ShoppingCartIcon className="w-[24px] h-[24px] text-black text-xl cursor-pointer" />
          {/* User Icon */}
          <User className="w-[24px] h-[24px] text-black text-xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
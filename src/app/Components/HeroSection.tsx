"use client";

import React from "react";
import Image from "next/image";
import { Sparkle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] w-[1440px] h-[663px] flex justify-center mt-20 py-10">
      {/* Right Content */}
      <div className="relative md:w-1/2 flex justify-center items-center">
          <Image
            src="/images/hero-pic.png" 
            alt="Models in stylish clothing"
            width={500}
            height={500}
            className="rounded-lg w-[1440px] h-[663px] mb-34 mr-36 "
          />
          {/* Decorative Stars */}
          <div className="absolute top-5 right-5 w-8 h-8 bg-black transform rotate-45"><Sparkle /></div>
          <div className="absolute bottom-5 left-10 w-6 h-6 bg-black transform rotate-45"><Sparkle /></div>
        
        Left Content
        <div className="w-[577px] h-[173px] text-black ml-11 mt-11 z-20">
          <h1 className="text-4xl md:text-5xl font-black text-black leading-tight">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="text-gray-700 w-[545px] h-[33px] text-base mt-6">
            Browse through our diverse range of meticulously styled garments,
            designed to bring elegance and flexibility, and order to your sense
            of style.
          </p>
          <button className="w-[210px] h-[52px] mt-16 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800">
            Shop Now
          </button> 
        </div>

        
        
        </div>
    </section>
  );
};

export default HeroSection;

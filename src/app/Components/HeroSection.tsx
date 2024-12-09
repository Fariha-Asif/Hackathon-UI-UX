"use client";

import React from "react";
import Image from "next/image";
import { Sparkle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] w-[1440px] h-[563px] mt-5 flex flex-col lg:flex-row justify-between items-center lg:px-10 lg:py-10">
      {/* Left Content */}
      <div className="lg:w-6/12 w-full text-center lg:text-left mr-96 pr-72 lg:mr-0 lg:pr-0">
        <h1 className="text-4xl md:text-5xl font-black text-black leading-tight">
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </h1>
        <p className="text-gray-700 text-base mt-6 max-w-md mx-auto lg:mx-0">
          Browse through our diverse range of meticulously styled garments,
          designed to bring elegance and flexibility, and order to your sense
          of style.
        </p>
        <button className="w-[210px] h-[52px] mt-8 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800 mx-auto lg:mx-0">
          Shop Now
        </button>
      </div>

      {/* Right Content */}
      <div className="relative lg:w-6/12 w-[350px] flex justify-center items-center mr-96 lg:mr-0">
        {/* Main Image */}
        <Image
          src="/images/hero-pic.png" // Update this to the correct path
          alt="Models in stylish clothing"
          width={900}
          height={563}
          className="rounded-lg "
        />

        {/* Decorative Stars */}
        <div className="absolute top-10 left-10">
          <Sparkle className="text-black w-8 h-8" />
        </div>
        <div className="absolute top-20 right-20">
          <Sparkle className="text-black w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

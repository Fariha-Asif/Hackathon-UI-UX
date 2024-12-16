"use client";

import React from "react";
import Image from "next/image";
import { Sparkle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] w-[1000px] lg:w-[1440px] flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16 py-10 lg:py-20 mt-6">
      {/* Left Content */}
      <div className="w-full lg:w-6/12 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight">
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </h1>
        <p className="text-gray-700 text-sm sm:text-base mt-4 lg:mt-6 max-w-md mx-auto lg:mx-0">
          Browse through our diverse range of meticulously styled garments,
          designed to bring your individuality and cater to your sense of style.
        </p>
        <button className="w-44 sm:w-52 h-12 sm:h-14 mt-6 lg:mt-8 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800">
          Shop Now
        </button>
      </div>

      {/* Right Content */}
      <div className="relative w-full lg:w-6/12 flex justify-center items-center mt-8 lg:mt-0">
        {/* Main Image */}
        <Image
          src="/images/hero-pic.png" // Update this to the correct path
          alt="Models in stylish clothing"
          width={600}
          height={600}
          className="rounded-lg object-cover w-full max-w-[400px] md:max-w-[500px] lg:max-w-none lg:w-[600px] h-auto"
        />

        {/* Decorative Stars */}
        <div className="absolute top-4 left-8 sm:top-8 sm:left-16">
          <Sparkle className="text-black fill-current w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="absolute top-10 right-10 sm:top-16 sm:right-20">
          <Sparkle className="text-black fill-current w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Featured1() {
  return (
    <section className="min-w-[925px] lg:w-[1450px] py-10 bg-white">
      {/* Header */}
      <h1 className="text-center font-black text-3xl mb-10">NEW ARRIVALS</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-10">
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow p-5 text-center">
          <Image
            src="/images/01.png"
            alt="T-shirt with Tape Details"
            width={500}
            height={500}
            className="w-full h-auto rounded"
          />
          <h4 className="mt-3 font-semibold text-lg">
            T-shirt with Tape Details
          </h4>
          <div className="flex justify-center items-center mt-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="mt-2 font-bold text-xl">$120</p>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow p-5 text-center">
          <Image
            src="/images/02.png"
            alt="Skinny Fit Jeans"
            width={500}
            height={500}
            className="w-full h-auto rounded"
          />
          <h4 className="mt-3 font-semibold text-lg">Skinny Fit Jeans</h4>
          <div className="flex justify-center items-center mt-2">
            {[...Array(3)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
            <Star className="w-5 h-5 text-gray-300" />
            <span className="ml-2 text-gray-600">3.5/5</span>
          </div>
          <div className="flex">
            <p className="font-bold text-xl text-red-500">$240</p>
            <span className="line-through text-gray-500">$260</span>
            <span className="ml-2 text-green-500">-20%</span>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-lg shadow p-5 text-center">
          <Image
            src="/images/03.png"
            alt="Checkered Shirt"
            width={500}
            height={500}
            className="w-full h-auto rounded"
          />
          <h4 className="mt-3 font-semibold text-lg">Checkered Shirt</h4>
          <div className="flex justify-center items-center mt-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="mt-2 font-bold text-xl">$180</p>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-lg shadow p-5 text-center">
          <Image
            src="/images/04.png"
            alt="Sleeve Striped T-shirt"
            width={500}
            height={500}
            className="w-full h-auto rounded"
          />
          <h4 className="mt-3 font-semibold text-lg">
            Sleeve Striped T-shirt
          </h4>
          <div className="flex justify-center items-center mt-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="mt-2 font-bold text-xl text-red-500">$130</p>
          <span className="line-through text-gray-500">$160</span>
          <span className="ml-2 text-green-500">-30%</span>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-white border border-black text-black rounded-lg font-semibold hover:bg-gray-200">
          View All
        </button>
      </div>
    </section>
  );
}

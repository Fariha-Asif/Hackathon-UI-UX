import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Featured2() {
  return (
    <section className="min-w-[925px] lg:w-[1450px] py-10 bg-white">
      {/* Header */}
      <h1 className="text-center font-black text-3xl mb-10">TOP SELLING</h1>

      {/* Product Grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-10">
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow-md p-5 text-center">
          <Image
            src="/images/05.png"
            alt="Vertical Striped Shirt"
            width={300}
            height={300}
            className="w-full h-auto rounded"
          />
          <h4 className="mt-3 font-medium text-lg">Vertical Striped Shirt</h4>
          <div className="flex justify-center items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">5.0/5</span>
          </div>
          <p className="mt-2 font-bold text-xl text-black">$212</p>
          <span className="line-through text-gray-500">$232</span>
          <span className="ml-2 text-green-500">-20%</span>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow-md p-5 text-center">
          <Image
            src="/images/06.png"
            alt="Courage Graphic T-shirt"
            width={300}
            height={300}
            className="w-full h-auto rounded"
          />
          <h4 className="mt-3 font-medium text-lg">Courage Graphic T-shirt</h4>
          <div className="flex justify-center items-center mt-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
            <span className="ml-2 text-gray-600">4.0/5</span>
          </div>
          <p className="mt-2 font-bold text-xl text-black">$145</p>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-lg shadow-md p-5 text-center">
          <Image
            src="/images/07.png"
            alt="Loose Fit Bermuda Shorts"
            width={300}
            height={300}
            className="w-full h-auto rounded"
          />
          <h4 className="mt-3 font-medium text-lg">Loose Fit Bermuda Shorts</h4>
          <div className="flex justify-center items-center mt-2">
            {[...Array(3)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            {[...Array(2)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gray-300" />
            ))}
            <span className="ml-2 text-gray-600">3.0/5</span>
          </div>
          <p className="mt-2 font-bold text-xl text-black">$80</p>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-lg shadow-md p-5 text-center">
          <Image
            src="/images/08.png"
            alt="Faded Skinny Jeans"
            width={300}
            height={300}
            className="w-full h-auto rounded"
          />
          <h4 className="mt-3 font-medium text-lg">Faded Skinny Jeans</h4>
          <div className="flex justify-center items-center mt-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="mt-2 font-bold text-xl text-black">$210</p>
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

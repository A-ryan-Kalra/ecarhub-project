"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import logo from "../public/hero-bg.png";
function Hero() {
  const handleScroll = () => {};
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0  max-w-[1440px] mx-auto  ">
      <div className="flex-1 pt-36 sm:px-16 px-6 ">
        <h1 className=" 2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold ">
          Find, book, or rent a car -Hassle-free!
        </h1>
        <p className="text-[25px] font-light">
          Make your car rental experience easy with our effortless booking
          experience.
        </p>
        <CustomButton
          title={"Explore Cars"}
          containerStyles="bg-[#3465FC] p-2 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="xl:flex-[1.5] flex  justify-end items-end w-full   xl:h-screen">
        <div className="relative  xl:w-full w-[90%]  xl:h-full h-[590px]  z-0">
          <Image
            src="/car-png-39059.png"
            alt="hero"
            className="object-contain p-1 "
            fill
          />
        </div>

        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg- bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden bg-gradient-to-r from-red-400 shadow-lg  to-yellow-300 -skew-x-12 -skew-y-3"></div>
      </div>
    </div>
  );
}

export default Hero;

"use client";
import { CarCardProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CarDetails from "./CarDetails";

export const CarCard = ({ car }: CarCardProps) => {
  console.log(generateCarImageUrl(car));
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent: number = Number(calculateCarRent(city_mpg, year));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6  text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">₹</span>
        {carRent * 83}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car-model"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="steering-wheel"
            />
            <p className="text-[13px]">
              {transmission === "a" ? "Automatice" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} width={20} height={20} alt="tire" />
            <p className="text-[13px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} width={20} height={20} alt="gas" />
            <p className="text-[13px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className=" hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            title="View More"
            textStyles="text-white text-[14px] leading-[17px] "
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
            containerStyles="w-full py-[16px] rounded-full font-bold bg-primary-blue"
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

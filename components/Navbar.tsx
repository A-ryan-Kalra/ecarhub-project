import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] shadow-md rounded-full border-black/20 border-2 p-1">
            <Image
              src={"/e-carhub1.png"}
              alt="Car Hub Logo"
              fill
              className="rounded-full  object-cover "
            />
          </div>
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;

"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || `button`}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`${textStyles}flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right-arrow"
            fill
            className="object-contain rounded-full"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;

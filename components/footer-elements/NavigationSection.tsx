"use client";
import * as React from "react";
import CustomButton from "../CustomButton";

interface NavigationSectionProps {}

export const NavigationSection: React.FC<NavigationSectionProps> = () => {
  return (
    <nav className="flex gap-6 items-center flex-row self-stretch my-auto text-2xl leading-none text-center text-white max-md:mt-10 max-md:max-w-full">
      <a href="/">
        Home
      </a>
      <a href="#my-work">
        My Work
      </a>
      <a href="#experience">
        Experience
      </a>
      <a href="#about">
        About
      </a>
      <CustomButton
            title="Hire Me"
            btnType="button"
            containerStyles="text-white rounded-sm bg-neutral-500 min-w-[130px] py-3"
      />
    </nav>
  );
};

"use client";
import * as React from "react";
import CustomButton from "../CustomButton";
import Link from "next/link";


export const NavigationSection = () => {
  return (
    <nav className="flex gap-6 items-center flex-col md:flex-row self-stretch my-auto text-md md:text-2xl leading-none text-center text-white max-md:mt-10 max-md:max-w-full">
      <Link href="/" className="disabled-link">
        Home
      </Link>
      <Link href="#my-work" className="disabled-link">
        My Work
      </Link>
      <Link href="#experience" className="disabled-link">
        Experience
      </Link>
      <Link href="#about" className="disabled-link">
        About
      </Link>
    </nav>
  );
};

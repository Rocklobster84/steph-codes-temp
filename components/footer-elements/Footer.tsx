"use client";
import * as React from "react";
import { ContactSection } from "./ContactSection";
import { NavigationSection } from "./NavigationSection";
import { CopyrightSection } from "./Copyright";


export const Footer = () => {
  return (
    <footer className="overflow-hidden flex flex-col items-center bg-neutral-900 max-w-full">
      <div className="w-full border-[1px] border-white border-solid min-h-[1px] max-md:max-w-full" />

      <div className="flex flex-row items-center w-full justify-center">
        <div className="w-1/2 md:w-1/3 flex justify-center md:justify-end mt-10 md:ml-10">
          <ContactSection />
        </div>
        <div className="shrink-0 w-0.5 border-white border-solid border-[1px] h-[300px] md:mx-6" />
        <div className="w-1/2 md:w-2/3 flex justify-center md:justify:start">
          <NavigationSection />
        </div>
      </div>

      <div className="shrink-0 border border-white border-solid h-[1px] w-full max-md:max-w-full" />

      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="w-full md:w-1/3 flex justify-end md:justify-end mb-4 md:mb-0">
          <CopyrightSection />
        </div>
        <div className="w-full md:w-0.5 mx-0 md:mx-8" />
        <div className="w-full md:w-2/3" />
      </div>
    </footer>
  );
};

export default Footer;
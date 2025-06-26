"use client";
import * as React from "react";
import { ContactSection } from "./ContactSection";
import { NavigationSection } from "./NavigationSection";
import { CopyrightSection } from "./Copyright";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="overflow-hidden flex flex-col items-center bg-neutral-900 max-w-full">
      <div className="w-full border-[1px] border-white border-solid min-h-[3px] max-md:max-w-full" />

      <div className="flex flex-row items-center w-full justify-center">
        <div className="w-1/3 flex justify-end">
          <ContactSection />
        </div>
        <div className="shrink-0 w-0.5 border-white border-solid border-[1px] h-[300px] mx-8" />
          <div className="w-2/3 flex justify-start">
            <NavigationSection />
          </div>
        </div>

      <div className="shrink-0 border border-white border-solid h-[3px] w-full max-md:max-w-full" />

      <div className="flex w-full justify-center">
        <div className="w-1/3 flex justify-end">
          <CopyrightSection />
        </div>
        <div className="w-0.5 mx-8" />
        <div className="w-2/3" />
      </div>
    </footer>
  );
};

export default Footer;
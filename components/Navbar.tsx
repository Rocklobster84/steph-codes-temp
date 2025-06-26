"use client";

import Link from "next/link";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="px-5 py-3 bg-neutral-900 shadow-md ">
      <nav className="px-10">
        <div className="h-8 items-center flex justify-between">
          <div className="text-xl text-white font-bold px-5 uppercase">Steph Codes</div>
          <div className="hidden sm:block">
          <Link href="/">
            <span className="px-5">Home</span>
          </Link>
          <Link href="/">
            <span className="px-5">My Work</span>
          </Link>
          <Link href="/">
            <span className="px-5">Experience</span>
          </Link>
          <Link href="/">
            <span className="px-5">About</span>
          </Link>
          <CustomButton
            title="Hire Me"
            btnType="button"
            containerStyles="text-white rounded-sm bg-neutral-500 min-w-[130px]"
          />
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="block sm:hidden px-4 text-2xl"><CiMenuBurger /></button>
        </div>

        <div className={`${ isOpen ? "block" : "hidden" } sm:hidden bg-gray-100 space-y-2 pb-3`}>
          <Link href="/">
            <span className="px-5 text-lg text-gray-600 block">Home</span>
          </Link>
          <Link href="/">
            <span className="px-5 text-lg text-gray-600 block">My Work</span>
          </Link>
          <Link href="/">
            <span className="px-5 text-lg text-gray-600 block">Experience</span>
          </Link>
          <Link href="/">
            <span className="px-5 text-lg text-gray-600 block">About</span>
          </Link>
          <CustomButton
            title="Hire Me"
            btnType="button"
            containerStyles="px-5 text-lg text-gray-600 block"
          />
        </div>
      </nav>
    </header>
  )
}


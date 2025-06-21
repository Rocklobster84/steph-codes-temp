import Link from "next/link";
import CustomButton from "./CustomButton";


export default function Navbar() {
  return (
    <header className="px-5 py-3 bg-stone-900 shadow-md">
      <nav className="flex justify-end-safe px-10">
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
      </nav>
    </header>
  )
}


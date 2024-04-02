import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="container py-5 bg-slate-800 px-5 mx-auto flex justify-between items-center">
      <div className=" relative max-w-44">
        <Image
          src={"/images/Logo/logo.svg"}
          alt="Website Logo"
          fill
          className="custom-img"
          priority
          sizes="100%"
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="font-bold hover:font-semibold text-primaryGray hover:text-primary cursor-pointer transition-all ease-linear duration-150">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="font-bold hover:font-semibold text-primaryGray hover:text-primary cursor-pointer transition-all ease-linear duration-150">
          <Link href={"/"}>About Us</Link>
        </div>
        <div className="font-bold hover:font-semibold text-primaryGray hover:text-primary cursor-pointer transition-all ease-linear duration-150">
          <Link href={"/"}>Services</Link>
        </div>
        <div className="font-bold hover:font-semibold text-primaryGray hover:text-primary cursor-pointer transition-all ease-linear duration-150">
          <Link href={"/"}>Projects</Link>
        </div>
        <div className="font-bold hover:font-semibold text-primaryGray hover:text-primary cursor-pointer transition-all ease-linear duration-150">
          <Link href={"/"}>FAQs</Link>
        </div>
        <div className="font-bold hover:font-semibold text-primaryGray hover:text-primary cursor-pointer transition-all ease-linear duration-150">
          <Link href={"/"}>Contact Us</Link>
        </div>
      </div>
      <button className="rounded bg-primary hover:bg-primaryGray px-10 py-4 relative font-bold text-[17px] text-primaryGray hover:text-black transition-all duration-300 ease-linear">
        Get A Qoute
      </button>
    </div>
  );
};

export default Header;

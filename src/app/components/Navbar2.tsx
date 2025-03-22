"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import EnsomeLogo from "../assets/EnsomeLogoWihte.svg";
import Link from "next/link";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#002B4E] border-b-2 border-gray-500/20">
      <div className="flex justify-between items-center py-6 px-6 md:px-20">
        <Link href={"/"}>
          <img
            src={EnsomeLogo.src}
            alt="Ensome Logo"
            className="h-8 cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex gap-16 font-light text-white">
          <Link
            href={"/"}
            className="cursor-pointer hover:text-blue-300 transition"
          >
            Home
          </Link>
          <Link
            href={"/solutions"}
            className="cursor-pointer hover:text-blue-300 transition"
          >
            Solutions
          </Link>
          <Link
            href={"/elements"}
            className="cursor-pointer hover:text-blue-300 transition"
          >
            Elements
          </Link>
        </div>

        <button className="hidden md:flex gap-2 items-center font-light bg-white hover:bg-gray-200 cursor-pointer rounded-lg text-black py-2 px-4 transition">
          <FaRegCirclePlay size={20} className="text-black" />
          Watch The Demo
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-4 bg-[#001f3f]">
          <Link
            href={"/"}
            className="text-white cursor-pointer hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/solutions"}
            className="text-white cursor-pointer hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href={"/elements"}
            className="text-white cursor-pointer hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Elements
          </Link>
          <button
            className="flex gap-2 items-center font-light bg-white hover:bg-gray-200 cursor-pointer rounded-lg text-black py-2 px-4 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaRegCirclePlay size={20} className="text-black" />
            Watch The Demo
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar2;

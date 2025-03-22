"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import EnsomeLogo from "../assets/EnsomeLogo.svg";
import Link from "next/link";

function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center py-4 px-6 md:px-20">
        <Link href={"/"}>
          <img
            src={EnsomeLogo.src}
            alt="Ensome Logo"
            className="h-8 cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex gap-16 font-light">
          <Link href={"/"} className="cursor-pointer hover:text-blue-600">
            Home
          </Link>
          <Link
            href={"/solutions"}
            className="cursor-pointer hover:text-blue-600"
          >
            Solutions
          </Link>
          <Link
            href={"/elements"}
            className="cursor-pointer hover:text-blue-600"
          >
            Elements
          </Link>
        </div>

        <button className="hidden md:flex gap-2 items-center font-light bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg text-white py-2 px-4">
          <FaRegCirclePlay size={20} />
          Watch The Demo
        </button>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-4 bg-gray-100">
          <Link
            href={"/"}
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/solutions"}
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href={"/elements"}
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Elements
          </Link>
          <button
            className="flex gap-2 items-center font-light bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg text-white py-2 px-4"
            onClick={() => setIsOpen(false)}
          >
            <FaRegCirclePlay size={20} />
            Watch The Demo
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar1;

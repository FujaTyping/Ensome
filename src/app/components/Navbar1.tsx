import React from "react";

import EnsomeLogo from "../assets/EnsomeLogo.svg";
import { FaRegCirclePlay } from "react-icons/fa6";
import Link from "next/link";

function Navbar1() {
  return (
    <div className="flex place-content-between items-center w-full py-4 px-56">
      <Link href={"/"}>
        <img src={EnsomeLogo.src} />
      </Link>
      <div className="flex gap-18 font-light">
        <Link href={"/"}>
          <p className="cursor-pointer">Home</p>
        </Link>
        <Link href={"/solutions"}>
          <p className="cursor-pointer">Solutions</p>
        </Link>
        <Link href={"/elements"}>
          <p className="cursor-pointer">Elements</p>
        </Link>
      </div>
      <button className="flex gap-2 items-center font-light bg-blue-600 cursor-pointer rounded-lg text-white py-2 px-3">
        <FaRegCirclePlay size={24} />
        Watch The demo
      </button>
    </div>
  );
}

export default Navbar1;

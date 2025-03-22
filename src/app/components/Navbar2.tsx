import React from "react";

import EnsomeLogo from "../assets/EnsomeLogoWihte.svg";
import PlayIcon from "../assets/icons/Play_Icon_Black.svg";
import Link from "next/link";

function Navbar2() {
  return (
    <div className="flex place-content-between bg-[#002B4E] border-b-2 border-gray-500/20 items-center w-full py-6 px-56">
      <Link href={"/"}>
        <img src={EnsomeLogo.src} />
      </Link>
      <div className="flex gap-28 font-light text-white">
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
      <button className="flex gap-2 items-center font-light bg-white cursor-pointer rounded-lg text-black py-2 px-3">
        <img src={PlayIcon.src} width={24} height={24} />
        Watch The demo
      </button>
    </div>
  );
}

export default Navbar2;

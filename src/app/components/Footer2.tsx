import React from "react";
import EnsomeLogo from "../assets/EnsomeLogoWihte.svg";

import BE from "@/app/assets/icons/White/BE.svg";
import Facebook from "@/app/assets/icons/White/Facebook.svg";
import Twitter from "@/app/assets/icons/White/Twitter.svg";
import Youtube from "@/app/assets/icons/White/Youtube.svg";
import Linkedin from "@/app/assets/icons/White/LinkedIn.svg";
import Dribble from "@/app/assets/icons/White/Dribble.svg";

function Footer2() {
  return (
    <>
      <div className="w-full p-10 py-20 bg-[#002B4E] border-b-2 border-gray-500/20 text-white flex gap-14 items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Subscribe to our newsletter</h1>
          <p className="max-w-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </p>
        </div>
        <div className="flex">
          <input
            className="bg-gray-200 p-4 w-68 rounded-l placeholder-black text-xs text-black"
            type="text"
            placeholder="Your email"
          />
          <button className="p-1 w-20 bg-gray-100 rounded-r text-black text-xs font-bold">
            SEND
          </button>
        </div>
      </div>
      <div>
        <div className="flex items-start w-full bg-[#002B4E] place-content-between py-12 px-32">
          <div className="flex flex-col gap-4">
            <img src={EnsomeLogo.src} className="w-32" alt="Logo" />
            <p className="text-gray-400 max-w-lg">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
            <div className="flex gap-4">
              <a href="#">
                <img src={Facebook.src} alt="FB" />
              </a>
              <a href="#">
                <img src={Twitter.src} alt="X" />
              </a>
              <a href="#">
                <img src={Linkedin.src} alt="LI" />
              </a>
              <a href="#">
                <img src={Youtube.src} alt="YT" />
              </a>
              <a href="#">
                <img src={Dribble.src} alt="DB" />
              </a>
              <a href="#">
                <img src={BE.src} alt="BE" />
              </a>
            </div>
          </div>
          <div className="flex gap-24 text-white">
            <div className="flex flex-col">
              <h1 className="text-xl mb-3">Quick link</h1>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="#">Home</a>
                <a href="#">Solutions</a>
                <a href="#">Blog</a>
                <a href="#">Contacts</a>
                <a href="#">Our team</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">FAQ</a>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl mb-3">Service</h1>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="#">Pages</a>
                <a href="#">Elements</a>
                <a href="#">FAQ</a>
                <a href="#">Pricing</a>
                <a href="#">Site map</a>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl mb-3">Contact info</h1>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="#">ensome@info.co.us</a>
                <a href="#">+1 601-201-5580</a>
                <a href="#" className="max-w-[200px]">
                  1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start w-full place-content-between py-8 px-32 bg-[#002B4E]">
          <div>
            <p className="text-gray-400">© 2022 Ensome. All Rights Reserved.</p>
          </div>
          <div className="flex gap-5 text-gray-400">
            <a href="#" className="flex items-center gap-2">
              Privacy policy
            </a>
            <a href="#" className="flex items-center gap-2">
              Terms of us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer2;

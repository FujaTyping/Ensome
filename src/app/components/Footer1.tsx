import React from "react";
import EnsomeLogo from "@/app/assets/EnsomeLogo.svg";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

import { FaArrowRightLong } from "react-icons/fa6";

function Footer1() {
  return (
    <>
      <div className="w-full p-10 py-20 bg-blue-600 text-white flex flex-col md:flex-row gap-14 items-center justify-center">
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
          <button className="p-1 w-20 bg-gray-100 rounded-r text-black text-xs font-bold cursor-pointer">
            SEND
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-start w-full place-content-between py-12 px-32">
          <img src={EnsomeLogo.src} alt="Logo" />
          <div className="flex flex-col mt-6 md:mt-0 md:flex-row gap-24">
            <div className="flex flex-col">
              <h1 className="font-bold text-xl mb-3">About</h1>
              <div className="flex flex-col gap-2 ">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Solutions</a>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl mb-3">Information</h1>
              <div className="flex flex-col gap-2">
                <a href="#">Contacts</a>
                <a href="#">Our team</a>
                <a href="#">Blog</a>
                <a href="#">FAQ</a>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl mb-3">Service</h1>
              <div className="flex flex-col gap-2">
                <a href="#">Pages</a>
                <a href="#">Elements</a>
                <a href="#">Site map</a>
                <a href="#">Pricing</a>
                <a href="#">FAQ</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 mx-auto bg-gray-200 h-0.5"></div>
        <div className="flex flex-col md:flex-row items-start w-full place-content-between py-12 px-32">
          <div>
            <h1 className="font-bold text-xl mb-3">Contact</h1>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h2>+1 601-201-5580</h2>
                <a
                  href="mailto:ensome@info.co.us"
                  className="flex items-center gap-2 font-bold"
                >
                  ensome@info.co.us <FaArrowRightLong />
                </a>
              </div>
              <div>
                <h2>1642 Washington Avenue, Jackson, MS, 39201</h2>
                <a href="#" className="flex items-center gap-2 font-bold">
                  Driving derections <FaArrowRightLong />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-3 mt-6 md:mt-0">Social</h2>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <FaFacebookF size={12} className="text-white" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <FaTwitter size={12} className="text-white" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <FaLinkedinIn size={12} className="text-white" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <FaYoutube size={12} className="text-white" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <FaDribbble size={12} className="text-white" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <FaBehance size={12} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-5/6 mx-auto bg-gray-200 h-0.5"></div>
        <div className="flex flex-col md:flex-row items-start w-full place-content-between py-12 px-32">
          <div className="flex gap-5 text-gray-400">
            <a href="#" className="flex items-center gap-2 font-bold">
              Privacy policy <FaArrowRightLong className="text-gray-400" />
            </a>
            <a href="#" className="flex items-center gap-2 font-bold">
              Terms of us <FaArrowRightLong className="text-gray-400" />
            </a>
          </div>
          <div>
            <p className="text-gray-400 mt-6 md:mt-0">
              © 2022 Ensome. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer1;

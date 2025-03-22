import React from "react";
import EnsomeLogo from "@/app/assets/EnsomeLogo.svg";
import ArrowIcon from "@/app/assets/icons/Arrow_Icon.svg";
import ArrowGrayIcon from "@/app/assets/icons/ArrowGray.svg";

import BE from "@/app/assets/icons/BE.svg";
import Facebook from "@/app/assets/icons/Facebook.svg";
import Twitter from "@/app/assets/icons/Twitter.svg";
import Youtube from "@/app/assets/icons/Youtube.svg";
import Linkedin from "@/app/assets/icons/LinkledIn.svg";
import Dribble from "@/app/assets/icons/Dribble.svg";

function Footer1() {
  return (
    <>
      <div className="w-full p-10 py-20 bg-blue-600 text-white flex gap-14 items-center justify-center">
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
        <div className="flex items-start w-full place-content-between py-12 px-32">
          <img src={EnsomeLogo.src} alt="Logo" />
          <div className="flex gap-24">
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
        <div className="flex items-start w-full place-content-between py-12 px-32">
          <div>
            <h1 className="font-bold text-xl mb-3">Contact</h1>
            <div className="flex gap-8">
              <div>
                <h2>+1 601-201-5580</h2>
                <a
                  href="mailto:ensome@info.co.us"
                  className="flex items-center gap-2 font-bold"
                >
                  ensome@info.co.us <img src={ArrowIcon.src} alt="Icon" />
                </a>
              </div>
              <div>
                <h2>1642 Washington Avenue, Jackson, MS, 39201</h2>
                <a href="#" className="flex items-center gap-2 font-bold">
                  Driving derections <img src={ArrowIcon.src} alt="Icon" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-3">Social</h2>
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
        </div>
        <div className="w-5/6 mx-auto bg-gray-200 h-0.5"></div>
        <div className="flex items-start w-full place-content-between py-12 px-32">
          <div className="flex gap-5 text-gray-400">
            <a href="#" className="flex items-center gap-2 font-bold">
              Privacy policy <img src={ArrowGrayIcon.src} alt="Icon" />
            </a>
            <a href="#" className="flex items-center gap-2 font-bold">
              Terms of us <img src={ArrowGrayIcon.src} alt="Icon" />
            </a>
          </div>
          <div>
            <p className="text-gray-400">© 2022 Ensome. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer1;

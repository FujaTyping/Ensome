import React from "react";
import Navbar1 from "./components/Navbar1";
import Footer1 from "./components/Footer1";

import Img1 from "./assets/ImgMain1.webp";
import Img2 from "./assets/ImgMain2.webp";
import Img3 from "./assets/ImgMain3.webp";

import ClientLogo1 from "./assets/ClientLogo/logo_1.svg";
import ClientLogo2 from "./assets/ClientLogo/logo_2.svg";
import ClientLogo3 from "./assets/ClientLogo/logo_3.svg";
import ClientLogo4 from "./assets/ClientLogo/logo_4.svg";
import ClientLogo5 from "./assets/ClientLogo/logo_5.svg";
import ClientLogo6 from "./assets/ClientLogo/logo_6.svg";

import Person1 from "@/app/assets/Avatar/001_img_person_1.svg";
import Person2 from "@/app/assets/Avatar/002_img_person_2.svg";

import { FaRegCirclePlay } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <section>
        <div className="flex flex-col-reverse md:flex-row my-10 justify-center items-center max-w-6xl mx-auto px-6">
          <div className="flex flex-col w-full md:w-96 gap-8 md:mr-12 text-center md:text-left py-14">
            <h1 className="text-4xl font-bold">
              Find true power in your data with Ensome
            </h1>
            <p className="text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex gap-2">
              <button className="rounded-lg bg-blue-600 py-3 px-4 text-white text-sm w-32 cursor-pointer">
                Learn more
              </button>
              <button className="flex gap-2 items-center cursor-pointer rounded-lg text-blac py-2 px-3">
                <FaRegCirclePlay size={24} />
                Watch The demo
              </button>
            </div>
          </div>
          <img
            src={Img1.src}
            className="w-full max-w-sm md:max-w-md"
            alt="Main1"
          />
        </div>
        <div className="flex justify-center items-center border-t-1 border-gray-500/10 gap-4">
          <img src={ClientLogo1.src} width={150} />
          <img src={ClientLogo2.src} width={150} />
          <img src={ClientLogo3.src} width={150} />
          <img src={ClientLogo4.src} width={150} />
          <img src={ClientLogo5.src} width={150} />
          <img src={ClientLogo6.src} width={150} />
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center py-24 bg-[#F1F6FA]">
          <div>
            <h1 className="text-4xl font-bold max-w-2xl">
              Why our clients chosse Ensome?
            </h1>
            <p className="text-gray-400 mt-4 mb-10 max-w-xl">
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            <div className="bg-white p-8 rounded-md">
              <LuBrainCircuit size={42} className="text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold pt-6">Machine Learning</h2>
                <p className="text-gray-400 mt-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-md">
              <BsGraphUpArrow size={42} className="text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold pt-6">Embed analytics</h2>
                <p className="text-gray-400 mt-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-md">
              <FaKey size={42} className="text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold pt-6">Access control</h2>
                <p className="text-gray-400 mt-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-30">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-6xl mx-auto gap-20 px-16">
          <div className="flex flex-col mx-auto gap-8">
            <h1 className="text-4xl font-bold max-w-2xl">
              The newest business analytics platform
            </h1>
            <p className="text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <button className="rounded-lg bg-blue-600 py-3 px-4 text-white text-sm w-32 cursor-pointer">
              Learn more
            </button>
          </div>
          <img src={Img2.src} width={500} alt="Main2" />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-6xl mx-auto gap-20 px-16 mt-16">
          <img src={Img3.src} width={500} alt="Main3" />
          <div className="flex flex-col mx-auto gap-8">
            <h1 className="text-4xl font-bold max-w-2xl">
              Radically new data solutions
            </h1>
            <p className="text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <button className="rounded-lg bg-blue-600 py-3 px-4 text-white text-sm w-32 cursor-pointer">
              Learn more
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-12 items-center justify-center bg-blue-100 p-10 py-18 ">
        <h1 className="text-4xl font-bold">Glad to help your success</h1>
        <div className="grid grid-cols-3 gap-4 max-w-5xl">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-gray-400 mb-4">22 June 2020</h2>
            <h1 className="text-xl font-bold mb-4">
              Sed ut perspiciatis unde omnis at vero blanditils
            </h1>
            <p className="text-gray-400">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti...
            </p>
            <div className="mt-4 flex gap-2">
              <span className="border border-gray-400 text-blue-500 font-bold rounded-lg p-2 text-sm">
                Proxy
              </span>
              <span className="border border-gray-400 text-blue-500 font-bold rounded-lg p-2 text-sm">
                VPN
              </span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-gray-400 mb-4">22 June 2020</h2>
            <h1 className="text-xl font-bold mb-4">
              Sed ut perspiciatis unde omnis at vero blanditils
            </h1>
            <p className="text-gray-400">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti...
            </p>
            <div className="mt-4 flex gap-2">
              <span className="border border-gray-400 text-blue-500 font-bold rounded-lg p-2 text-sm">
                Proxy
              </span>
              <span className="border border-gray-400 text-blue-500 font-bold rounded-lg p-2 text-sm">
                VPN
              </span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-gray-400 mb-4">22 June 2020</h2>
            <h1 className="text-xl font-bold mb-4">
              Sed ut perspiciatis unde omnis at vero blanditils
            </h1>
            <p className="text-gray-400">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti...
            </p>
            <div className="mt-4 flex gap-2">
              <span className="border border-gray-400 text-blue-500 font-bold rounded-lg p-2 text-sm">
                Proxy
              </span>
              <span className="border border-gray-400 text-blue-500 font-bold rounded-lg p-2 text-sm">
                VPN
              </span>
            </div>
          </div>
        </div>
        <button className="rounded-lg bg-blue-600 py-4 px-12 text-white text-sm cursor-pointer">
          Learn more
        </button>
      </div>
      <div className="p-10 py-18 flex flex-col items-center justify-center gap-20">
        <div className="flex w-full place-content-between items-center max-w-5xl">
          <h1 className="text-4xl font-bold max-w-lg">
            Trusted by the best in the business
          </h1>
          <div className="flex gap-4">
            <button className="p-5 w-20 bg-blue-100 rounded-full flex items-center justify-center">
              <FaArrowLeftLong className="text-gray-400" />
            </button>
            <button className="p-5 w-20 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mx-auto w-full max-w-5xl">
          <div className="p-8 shadow-md rounded-md">
            <img
              src={Person1.src}
              className="rounded-full absolute -mt-16"
              alt="Avatar"
            />
            <p className="text-gray-400 mt-8">
              “Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum.”
            </p>
            <div className="mt-4">
              <h1 className="font-bold">Alex Bern</h1>
              <h2 className="text-gray-400">CEO by PixelPerfect</h2>
            </div>
          </div>
          <div className="p-8 shadow-md rounded-md">
            <img
              src={Person2.src}
              className="rounded-full absolute -mt-16"
              alt="Avatar"
            />
            <p className="text-gray-400 mt-8">
              “Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum.”
            </p>
            <div className="mt-4">
              <h1 className="font-bold">Alex Bern</h1>
              <h2 className="text-gray-400">CEO by NOX</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 p-10 py-18 text-white flex items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold">1830+</h1>
          <p className="font-bold">Project executed</p>
        </div>
        <div className="w-[1px] h-20 bg-blue-300"></div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold">220</h1>
          <p className="font-bold">Data analytics</p>
        </div>
        <div className="w-[1px] h-20 bg-blue-300"></div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold">390</h1>
          <p className="font-bold">Data management</p>
        </div>
        <div className="w-[1px] h-20 bg-blue-300"></div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold">834+</h1>
          <p className="font-bold">Satisfied customers</p>
        </div>
      </div>
      <div className="flex items-center justify-center px-20 py-24 gap-14 bg-gray-100">
        <div>
          <div>
            <h1 className="text-4xl font-bold max-w-xl">
              Left questions? Contacts us now for a free consultation and free
              trial!
            </h1>
            <p className="mt-4 text-gray-400 max-w-xl">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
          </div>
          <div className="mt-24 flex flex-col gap-4">
            <div>
              <p className="text-gray-400">Email address</p>
              <h2 className="font-bold">ensome@info.co.us</h2>
            </div>
            <div>
              <p className="text-gray-400">Phone number</p>
              <h2 className="font-bold">+1601-201-5580</h2>
            </div>
            <div>
              <p className="text-gray-400">Address</p>
              <h2 className="font-bold">
                1642 Washington Avenue, Jackson, MS, Mississippi, 39201
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-md">
          <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-gray-400 mb-1">Name</p>
              <input
                type="text"
                placeholder="Your name"
                className="w-72 border-b-2 border-gray-400 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-gray-400 mb-1">Email</p>
              <input
                type="text"
                placeholder="Your email"
                className="w-72 border-b-2 border-gray-400 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-gray-400 mb-1">Theme</p>
              <input
                type="text"
                placeholder="Your theme"
                className="w-72 border-b-2 border-gray-400 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-gray-400 mb-1">Message</p>
              <input
                type="text"
                placeholder="Your message"
                className="w-72 border-b-2 border-gray-400 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button className="bg-blue-600 px-8 py-3 text-white rounded-md w-24 text-sm cursor-pointer">
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}

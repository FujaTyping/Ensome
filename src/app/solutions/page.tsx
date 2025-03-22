import React from "react";

import Navbar2 from "../components/Navbar2";
import Footer2 from "../components/Footer2";

import PlayIcon from "../assets/icons/Play_Icon.svg";

import ArrowInactive from "../assets/icons/ArrowInActive.svg";
import ArrowActive from "../assets/icons/ArrowActive.svg";
import Person1 from "../assets/Avatar/001_img_person_1.svg";
import Person2 from "../assets/Avatar/002_img_person_2.svg";

import PeopleGroup1 from "../assets/PeopleGroup1.svg";
import PeopleGroup2 from "../assets/PeopleGroup2.svg";

import icon_brain from "../assets/clientpageicon/01_icon_brain_circuit.svg";
import icon_arrow from "../assets/clientpageicon/02_icon_arrow_trending_lines.svg";
import icon_key from "../assets/clientpageicon/03_icon_key.svg";

import Banner1 from "@/app/assets/Banner1.svg";

import peopleWorking1 from "../assets/peopleWorking/img_1.svg";
import peopleWorking2 from "../assets/peopleWorking/img_2.svg";
import peopleWorking3 from "../assets/peopleWorking/img_3.svg";

import CheckICon from "@/app/assets/icons/Check.svg";

import PhoneIcon from "@/app/assets/icons/Phone.svg";
import EmailIcon from "@/app/assets/icons/Mail.svg";
import PinIcon from "@/app/assets/icons/Pin.svg";

import ArrowIcon from "@/app/assets/icons/Arrow_Icon_Blue.svg";

import ClientLogo1 from "../assets/ClientLogo/logo_1.svg";
import ClientLogo2 from "../assets/ClientLogo/logo_2.svg";
import ClientLogo3 from "../assets/ClientLogo/logo_3.svg";
import ClientLogo4 from "../assets/ClientLogo/logo_4.svg";
import ClientLogo5 from "../assets/ClientLogo/logo_5.svg";
import ClientLogo6 from "../assets/ClientLogo/logo_6.svg";

function Solutions() {
  return (
    <>
      <Navbar2 />
      <div className="bg-[#002B4E]">
        <div className="flex py-12 px-16 max-w-5xl mx-auto gap-6">
          <h1 className="text-4xl font-bold text-white">
            Find true power in your data with Ensome
          </h1>
          <div className="flex flex-col">
            <p className="font-light text-white max-w-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </p>
            <div className="flex gap-6 items-center mt-8">
              <button className="gap-2 items-center bg-white cursor-pointer rounded-lg text-black py-2 px-3">
                Learn more
              </button>
              <button className="flex text-white gap-2">
                <img src={PlayIcon.src} />
                Watch the demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-[#F1F6FA]">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-6xl mx-auto gap-20 px-16">
          <div className="flex flex-col mx-auto gap-8">
            <div>
              <h1 className="text-4xl font-bold max-w-2xl mb-4">
                The newest business analytics platform
              </h1>
              <div className="w-32 h-1 bg-blue-500"></div>
            </div>
            <p className="text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <button className="rounded-lg bg-blue-600 py-3 px-4 text-white text-sm w-32">
              Learn more
            </button>
          </div>
          <img src={PeopleGroup1.src} width={500} />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-6xl mx-auto gap-20 px-16 mt-16">
          <img src={PeopleGroup2.src} width={500} />
          <div className="flex flex-col mx-auto gap-8">
            <div>
              <h1 className="text-4xl font-bold max-w-2xl mb-4">
                {"Radically new solutions for data"}
              </h1>
              <div className="w-32 h-1 bg-blue-500"></div>
            </div>
            <p className="text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <button className="rounded-lg bg-blue-600 py-3 px-4 text-white text-sm w-32">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="p-10 py-18">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl mb-4 font-bold">Ensome in numbers</h1>
          <div className="w-32 h-1 bg-blue-500"></div>
        </div>
        <div className="grid grid-cols-4 max-w-5xl mx-auto mt-10 w-full">
          <div>
            <p className="font-bold text-gray-400 max-w-[200px]">
              {"Data analytics performed by Ensome's"}
            </p>
            <h1 className="text-6xl text-blue-500 mt-2">220</h1>
          </div>
          <div>
            <p className="font-bold text-gray-400 max-w-[200px]">
              {"Data management performed by Ensome's"}
            </p>
            <h1 className="text-6xl text-blue-500 mt-2">390</h1>
          </div>
          <div>
            <p className="font-bold text-gray-400 max-w-[200px]">
              {"Сustomers are satisfied with Ensome's work"}
            </p>
            <h1 className="text-6xl text-blue-500 mt-2">834+</h1>
          </div>
          <div>
            <p className="font-bold text-gray-400 max-w-[200px]">
              {"Projects implemented by Ensome"}
            </p>
            <h1 className="text-6xl text-blue-500 mt-2">1830+</h1>
          </div>
        </div>
      </div>
      <div className="pb-20 grid grid-cols-2 w-full">
        <img src={Banner1.src} alt="Banner" />
        <div className="pl-10  max-w-lg">
          <h1 className="text-4xl font-bold mb-4">The benefits of Ensome</h1>
          <div className="w-32 h-1 bg-blue-500"></div>
          <div className="flex flex-col gap-4 mt-6">
            <div>
              <div className="flex items-center gap-3">
                <img className="w-6" src={icon_brain.src} alt="Brain" />
                <h1 className="font-bold">Machine learning</h1>
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <img className="w-6" src={icon_arrow.src} alt="Arrow" />
                <h1 className="font-bold">Embed analytics</h1>
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <img className="w-6" src={icon_key.src} alt="Key" />
                <h1 className="font-bold">Access control</h1>
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-10 py-18 flex flex-col bg-[#F0F9FF] items-center justify-center gap-20">
          <div className="flex w-full place-content-between items-center max-w-5xl">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold mb-4 max-w-lg">
                What our customers say
              </h1>
              <div className="w-32 h-1 bg-blue-500"></div>
            </div>
            <div className="flex gap-4">
              <button className="p-5 w-20 bg-blue-100 rounded-full flex items-center justify-center">
                <img src={ArrowInactive.src} alt="Icon" />
              </button>
              <button className="p-5 w-20 bg-blue-100 rounded-full flex items-center justify-center">
                <img src={ArrowActive.src} alt="Icon" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mx-auto w-full max-w-5xl">
            <div className="p-8 shadow-md bg-white  rounded-md">
              <div className="flex items-center">
                <img src={Person1.src} className="rounded-full" />
                <div className="mt-1 ml-10">
                  <h1 className="font-bold">Alex Bern</h1>
                  <h2 className="text-gray-400">CEO by PixelPerfect</h2>
                </div>
              </div>
              <p className="text-gray-400 mt-8">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel
                illum.”
              </p>
            </div>
            <div className="p-8 shadow-md bg-white rounded-md">
              <div className="flex items-center">
                <img src={Person2.src} className="rounded-full" />
                <div className="mt-1 ml-10">
                  <h1 className="font-bold">Alex Bern</h1>
                  <h2 className="text-gray-400">CEO by NOX</h2>
                </div>
              </div>
              <p className="text-gray-400 mt-8">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel
                illum.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 py-18 flex flex-col items-center justify-center">
        <div className="flex w-full place-content-between items-center max-w-5xl">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4 max-w-lg">Our pricing</h1>
            <div className="w-32 h-1 bg-blue-500"></div>
          </div>
          <div className="flex gap-2 bg-blue-100 rounded-full">
            <button className="p-3 px-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
              Monthly
            </button>
            <button className="p-3 w-20 bg-blue-100 rounded-full flex items-center justify-center">
              Yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full max-w-5xl mt-10 gap-6">
          <div className="px-8 py-12 shadow-md rounded-md">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-xl">Starter</h2>
              <h1 className="font-bold text-4xl">Free</h1>
              <h2 className="font-bold text-xl">Trial plan for starters</h2>
            </div>
            <button className="rounded-lg text-blue-600 py-3 w-full border border-blue-600 text-sm my-5">
              Get started
            </button>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>For small teams – 5 users</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Community support</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Individual data – 20GB</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-12 shadow-md rounded-md">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-xl">Professional</h2>
              <div className="flex justify-start items-end gap-2">
                <h1 className="font-bold text-4xl">$20</h1>
                <p>per editor/month</p>
              </div>
              <h2 className="font-bold text-xl">For users who want more</h2>
            </div>
            <button className="rounded-lg text-white py-3 w-full bg-blue-600 text-sm my-5">
              Get started
            </button>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>For small teams – 15 users</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Individual support</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Individual data – 60GB</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-12 shadow-md rounded-md">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-xl">Organization</h2>
              <div className="flex justify-start items-end gap-2">
                <h1 className="font-bold text-4xl">$50</h1>
                <p>per editor/month</p>
              </div>
              <h2 className="font-bold text-xl">The best solution for Pro</h2>
            </div>
            <button className="rounded-lg text-white py-3 w-full bg-blue-600 text-sm my-5">
              Get started
            </button>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>For big teams – unlimited</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Individual support</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Individual data – 20GB</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Data history</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 pt-10">
        <div className="flex flex-col max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold max-w-2xl mb-4">Ensome blog</h1>
          <div className="w-32 h-1 bg-blue-500"></div>
        </div>
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
          <div className="rounded-md">
            <div className="flex flex-col h-full">
              <img src={peopleWorking1.src} />
              <p className="py-3 font-light">22 June 2022</p>
              <h2 className="text-2xl font-bold">
                Staffing software: key capabilities and top products
              </h2>
              <p className="flex py-3 gap-1 items-center text-[#185CFF]">
                Read more
                <img src={ArrowIcon.src} className="pt-1" />
              </p>
            </div>
          </div>
          <div className="rounded-md">
            <div className="flex flex-col h-full">
              <img src={peopleWorking2.src} />
              <p className="py-3 font-light">22 June 2022</p>
              <h2 className="text-2xl font-bold">
                2022 software development trends explained with benefits
              </h2>
              <p className="flex py-3 gap-1 items-center text-[#185CFF]">
                Read more
                <img src={ArrowIcon.src} className="pt-1" />
              </p>
            </div>
          </div>
          <div className="rounded-md">
            <div>
              <img src={peopleWorking3.src} />
              <p className="py-3 font-light">22 June 2022</p>
              <h2 className="text-2xl font-bold">
                Business analysis helps you in finance
              </h2>
              <p className="flex py-3 gap-1 items-center text-[#185CFF]">
                Read more
                <img src={ArrowIcon.src} className="pt-1" />
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-24">
          <img src={ClientLogo1.src} width={150} />
          <img src={ClientLogo2.src} width={150} />
          <img src={ClientLogo3.src} width={150} />
          <img src={ClientLogo4.src} width={150} />
          <img src={ClientLogo5.src} width={150} />
          <img src={ClientLogo6.src} width={150} />
        </div>
      </div>
      <div className="p-10 py-18 flex flex-col items-center justify-center bg-gray-100">
        <div className="flex w-full place-content-between items-center max-w-5xl">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4 max-w-lg">
              Contact information
            </h1>
            <div className="w-32 h-1 bg-blue-500"></div>
            <p className="text-gray-400 my-6 max-w-md">
              Fill up the form and our Team will get back to you with 25 hours.
            </p>
            <div className="flex gap-4 flex-col">
              <div className="flex gap-2 items-center">
                <img src={PhoneIcon.src} alt="Phone" />
                <h1>ensome@info.co.us</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src={EmailIcon.src} alt="Mail" />
                <h1>+1 601-201-5580</h1>
              </div>
              <div className="flex gap-2 items-center">
                <img src={PinIcon.src} alt="Pin" />
                <h1>1642 Washington Ave, Jackson, MS</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div>
                <p className="text-gray-400 mb-1">Name</p>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-52 border-b-2 border-gray-400 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <input
                  type="text"
                  placeholder="Your email"
                  className="w-52 border-b-2 border-gray-400 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Theme</p>
              <input
                type="text"
                placeholder="Your theme"
                className="w-full border-b-2 border-gray-400 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-gray-400 mb-1">Message</p>
              <input
                type="text"
                placeholder="Your message"
                className="w-full border-b-2 border-gray-400 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div className="flex justify-end mt-8">
              <button className="bg-blue-600 px-10 py-3 text-white rounded-md text-sm text-center">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default Solutions;

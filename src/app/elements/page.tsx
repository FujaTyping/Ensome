import React from "react";

import Navbar1 from "../components/Navbar1";
import Footer2 from "../components/Footer2";

import CheckICon from "@/app/assets/icons/Check.svg";

import peopleWorking1 from "../assets/peopleWorking2/img_1.svg";
import peopleWorking2 from "../assets/peopleWorking2/img_2.svg";
import peopleWorking3 from "../assets/peopleWorking2/img_3.svg";

import Person1 from "../assets/Avatar/001_img_person_1.svg";
import Person2 from "../assets/Avatar/002_img_person_2.svg";
import Person3 from "../assets/Avatar/003_img_person_3.svg";

import ArrowIcon from "../assets/icons/Arrow_Icon_Blue.svg";
import ArrowActive from "@/app/assets/icons/ArrowActive.svg";
import ArrowInactive from "@/app/assets/icons/ArrowInActive.svg";

import LearnMoreButton from "../assets/LearnMoreButton.svg";
import WCheck from "@/app/assets/icons/White/CheckW.svg";

import PeopleMeeting from "../assets/PeopleMeeting.svg";
import PeopleMeeting2 from "../assets/PeopleMeeting2.svg";

import icon_brain from "../assets/clientpageicon/01_icon_brain_circuit.svg";
import icon_arrow from "../assets/clientpageicon/02_icon_arrow_trending_lines.svg";
import icon_key from "../assets/clientpageicon/03_icon_key.svg";
import icon_graph from "../assets/clientpageicon/04_graph.svg";

import ClientLogo1 from "../assets/ClientLogo/logo_1.svg";
import ClientLogo2 from "../assets/ClientLogo/logo_2.svg";
import ClientLogo3 from "../assets/ClientLogo/logo_3.svg";
import ClientLogo4 from "../assets/ClientLogo/logo_4.svg";
import ClientLogo5 from "../assets/ClientLogo/logo_5.svg";
import ClientLogo6 from "../assets/ClientLogo/logo_6.svg";

function Elements() {
  return (
    <>
      <Navbar1 />
      <div>
        <div className="flex py-12 px-16 max-w-5xl mx-auto gap-6">
          <h1 className="text-4xl font-bold">
            Find true power in your data with
            <span className="text-[#185CFF]">Ensome</span>
          </h1>
          <div className="flex flex-col">
            <p className="font-light max-w-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex flex-col absolute gap-6 items-center mt-[150px]">
              <img src={LearnMoreButton.src} />
            </div>
          </div>
        </div>
      </div>
      <img className="mt-12" src={PeopleMeeting.src} />
      <div>
        <div className="flex py-20 px-16 max-w-5xl mx-auto gap-6">
          <h1 className="text-4xl font-bold">
            The <span className="text-[#185CFF]">newest</span> business
            analytics platform
          </h1>
          <div className="flex flex-col">
            <p className="font-light max-w-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </p>
            <div className="flex flex-col gap-6 items-center mt-12">
              <button className="gap-2 items-center bg-[#185CFF] cursor-pointer rounded-lg text-white py-2 px-3 self-start">
                Discover more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full bg-gray-100">
        <img src={PeopleMeeting2.src} alt="Banner" />
        <div className="pl-10 max-w-lg flex items-center justify-center">
          <div className="flex flex-col gap-4 mt-6">
            <div>
              <h2 className="text-4xl font-bold">
                Radically new solutions for data
              </h2>
              <p className="font-light max-w-lg text-gray-400 mt-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="flex flex-col gap-6 items-center mt-12">
                <button className="gap-2 items-center bg-[#185CFF] cursor-pointer rounded-lg text-white py-2 px-3 self-start">
                  Discover more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-5xl mx-auto items-center text-center p-10 py-14">
        <h1 className="text-2xl font-bold">
          We provide services that guarantee your success
        </h1>
        <div className="flex gap-14 justify-center items-center p-12">
          <div className="grid grid-cols-3 gap-16">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="text-4xl font-bold text-[#185CFF]">1830+</p>
              <p className="text-gray-400 text-sm w-[200px]">Projects executed</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="text-4xl font-bold text-[#185CFF]">834+</p>
              <p className="text-gray-400 text-sm w-[200px]">Satisfied customers</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="text-4xl font-bold text-[#185CFF]">390</p>
              <p className="text-gray-400 text-sm w-[200px]">Data management</p>
            </div>
          </div>
          <p className="max-w-md text-left text-gray-400">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam
            finibus nec.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-4">
          <img src={ClientLogo1.src} width={150} />
          <img src={ClientLogo2.src} width={150} />
          <img src={ClientLogo3.src} width={150} />
          <img src={ClientLogo4.src} width={150} />
          <img src={ClientLogo5.src} width={150} />
          <img src={ClientLogo6.src} width={150} />
        </div>
      </div>
      <div className="p-10 pb-14 pt-16 bg-gray-100">
        <div className="flex items-center justify-center gap-16 max-w-5xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold">The benefits of Ensome</h1>
            <p className="text-gray-400 max-w-md mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-4">
              <div className="bg-white p-6 shadow-md rounded-md flex flex-col gap-4">
                <img src={icon_brain.src} className="w-12" alt="Icon" />
                <h1 className="text-2xl font-bold">Machine learning</h1>
                <p className="text-gray-400 max-w-[220px]">
                  At vero eos et accusamus et iusto odio dignissimos duciu quili
                  blandit praesentium voluptatum ipsa quae ab illo.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-md flex flex-col gap-4">
                <img src={icon_key.src} className="w-12" alt="Icon" />
                <h1 className="text-2xl font-bold">Access control</h1>
                <p className="text-gray-400 max-w-[220px]">
                  At vero eos et accusamus et iusto odio dignissimos duciu quili
                  blandit praesentium voluptatum ipsa quae ab illo.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white p-6 shadow-md rounded-md flex flex-col gap-4">
                <img src={icon_arrow.src} className="w-12" alt="Icon" />
                <h1 className="text-2xl font-bold">Embed analytics</h1>
                <p className="text-gray-400 max-w-[220px]">
                At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-md flex flex-col gap-4">
                <img src={icon_graph.src} className="w-12" alt="Icon" />
                <h1 className="text-2xl font-bold">Data analytics</h1>
                <p className="text-gray-400 max-w-[220px]">
                At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 pb-14 pt-16">
        <div className="flex w-full place-content-between items-center max-w-5xl mx-auto">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4 max-w-lg">Testimonials</h1>
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
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
          <div className="p-8 shadow-md rounded-md flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img src={Person1.src} alt="Avatar" />
              <div>
                <h1>Alex Bern</h1>
                <p className="text-gray-400">CEO by PixelPerfect</p>
              </div>
            </div>
            <p className="text-gray-400">
              “Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corpor suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis utem vel eum iure reprehender qui in ea
              voluptate velit esse quam nihil molesti consequatur, vel illum.”
            </p>
          </div>
          <div className="p-8 shadow-md rounded-md flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img src={Person2.src} alt="Avatar" />
              <div>
                <h1>Ruben Chifundo</h1>
                <p className="text-gray-400">CEO by NOX</p>
              </div>
            </div>
            <p className="text-gray-400">
              “Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corpor suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis utem vel eum iure reprehender qui in ea
              voluptate velit esse quam nihil molesti consequatur, vel illum.”
            </p>
          </div>
          <div className="p-8 shadow-md rounded-md flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img src={Person3.src} alt="Avatar" />
              <div>
                <h1>Tigran Nazaret</h1>
                <p className="text-gray-400">Data analyst</p>
              </div>
            </div>
            <p className="text-gray-400">
              “Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corpor suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis utem vel eum iure reprehender qui in ea
              voluptate velit esse quam nihil molesti consequatur, vel illum.”
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 py-18 flex flex-col items-center justify-center">
        <div className="flex w-full place-content-between items-center max-w-6xl">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4 max-w-lg">Our pricing</h1>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full max-w-6xl mt-10 gap-6">
          <div className="px-8 py-12 shadow-md rounded-md">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-xl">Free trial</h2>
              <div className="flex w-full place-content-between">
                <h1 className="font-bold text-3xl">$00</h1>
                <div className="flex gap-3">
                  <button className="p-2 bg-blue-600 rounded-lg text-white">
                    Mo
                  </button>
                  <button className="p-2 px-3 border border-blue-600 text-blue-600 rounded-lg">
                    Yr
                  </button>
                </div>
              </div>
            </div>
            <button className="rounded-lg bg-blue-600 py-3 w-full text-white text-sm my-5">
              Choose plan
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
            </div>
          </div>
          <div className="px-8 py-12 shadow-md rounded-md">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-xl">Lite</h2>
              <div className="flex w-full place-content-between">
                <h1 className="font-bold text-3xl">$99</h1>
                <div className="flex gap-3">
                  <button className="p-2 bg-blue-600 rounded-lg text-white">
                    Mo
                  </button>
                  <button className="p-2 px-3 border border-blue-600 text-blue-600 rounded-lg">
                    Yr
                  </button>
                </div>
              </div>
            </div>
            <button className="rounded-lg bg-blue-600 py-3 w-full text-white text-sm my-5">
              Choose plan
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
          <div className="px-8 py-12 shadow-md rounded-md bg-blue-600 text-white">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-xl">Basic</h2>
              <div className="flex w-full place-content-between">
                <h1 className="font-bold text-3xl">$00</h1>
                <div className="flex gap-3">
                  <button className="p-2 bg-white rounded-lg text-blue-600">
                    Mo
                  </button>
                  <button className="p-2 px-3 border border-white text-white rounded-lg">
                    Yr
                  </button>
                </div>
              </div>
            </div>
            <button className="rounded-lg bg-white py-3 w-full text-blue-600 text-sm my-5">
              Choose plan
            </button>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <img src={WCheck.src} />
                <p>For big teams – 30 users</p>
              </div>
              <div className="flex gap-2">
                <img src={WCheck.src} />
                <p>Individual support</p>
              </div>
              <div className="flex gap-2">
                <img src={WCheck.src} />
                <p>Advanced permissions</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-12 shadow-md rounded-md">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-xl">For enterprises</h2>
              <div className="flex w-full place-content-between">
                <h1 className="font-bold text-3xl">Custom</h1>
                <div className="flex gap-3">
                  <button className="p-2 bg-blue-600 rounded-lg text-white">
                    Mo
                  </button>
                  <button className="p-2 px-3 border border-blue-600 text-blue-600 rounded-lg">
                    Yr
                  </button>
                </div>
              </div>
            </div>
            <button className="rounded-lg bg-blue-600 py-3 w-full text-white text-sm my-5">
              Choose plan
            </button>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Unlimited team members</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Individual support</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Unlimited Individual data</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Advanced permissions</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Data history</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>Audit log</p>
              </div>
              <div className="flex gap-2">
                <img src={CheckICon.src} />
                <p>All functions included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 pb-18">
        <div className="flex w-full place-content-between items-center max-w-5xl mx-auto">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4 max-w-lg">Our blog</h1>
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
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
          <div className="rounded-md">
            <div className="flex flex-col h-full">
              <img src={peopleWorking3.src} />
              <p className="py-3 font-light">22 June 2022</p>
              <h2 className="text-2xl font-bold">
                ISO 13485 compliance of medical devices
              </h2>
              <p className="py-3 font-light">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas. Quis autem vel eum iure...
              </p>
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
                Business analysis helps you in finance
              </h2>
              <p className="py-3 font-light">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas. Quis autem vel eum iure...
              </p>
              <p className="flex py-3 gap-1 items-center text-[#185CFF]">
                Read more
                <img src={ArrowIcon.src} className="pt-1" />
              </p>
            </div>
          </div>
          <div className="rounded-md">
            <div>
              <img src={peopleWorking1.src} />
              <p className="py-3 font-light">22 June 2022</p>
              <h2 className="text-2xl font-bold">
                5 web portal examples your business can learn from
              </h2>
              <p className="py-3 font-light">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas. Quis autem vel eum iure...
              </p>
              <p className="flex py-3 gap-1 items-center text-[#185CFF]">
                Read more
                <img src={ArrowIcon.src} className="pt-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center p-10 py-20 bg-gray-100">
        <h1 className="font-bold text-4xl">Do you need help?</h1>
        <p className="text-gray-400 max-w-md">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </p>
        <button className="rounded-lg bg-blue-600 py-4 px-12 text-white text-sm">
          Learn more
        </button>
      </div>
      <Footer2 />
    </>
  );
}

export default Elements;

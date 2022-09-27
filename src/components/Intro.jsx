import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Intro = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleBurderClicked = () => {
    setBurgerOpen((prevstate) => !prevstate);
  };

  return (
    <div className="relative h-screen bg-gradient-to-t from-indigo-200 flex flex-col justify-center items-center">
      <nav className="w-full fixed top-0 bg-white bg-opacity-80">
        <div className=" container mx-auto py-5 px-10 flex justify-between items-center ">
          <div>
            {/* <img /> */}
            <span className="text-2xl font-semibold">aimakov.dev</span>
          </div>
          <ul className="hidden md:flex space-x-10 uppercase text-md text-gray-600">
            <li className="flex items-center">
              <a href="#" className="hover:text-gray-500">
                Homepage
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-gray-500">
                About me
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-gray-500">
                Projects
              </a>
            </li>
          </ul>
          <FiMoon className="hidden md:block " />
          <div
            className=" space-y-1 md:hidden cursor-pointer transition-all duration-1000 z-10"
            onClick={handleBurderClicked}
          >
            <div
              className={`transition-all w-6 h-0.5 ${
                burgerOpen
                  ? "rotate-[45deg] translate-y-[3px] bg-white"
                  : "bg-black"
              }`}
            />
            <div
              className={`transition-all w-6 h-0.5 ${
                burgerOpen ? "hidden" : "bg-black"
              }`}
            />
            <div
              className={`transition-all w-6 h-0.5 ${
                burgerOpen
                  ? "rotate-[-45deg] -translate-y-[3px] bg-white"
                  : "bg-black"
              }`}
            />
          </div>
          <ul
            className={`${
              burgerOpen ? "" : "-translate-y-full"
            } absolute transition-all top-0 left-0 w-full p-10 rounded-b-xl bg-indigo-400 text-white text-center flex flex-col items-center space-y-10 uppercase`}
          >
            <li className="flex items-center">
              <a href="#" className="hover:text-gray-200">
                Homepage
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-gray-200">
                About me
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-gray-200">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-full flex flex-col justify-evenly items-start gap-12">
        <div className="bg-[url('/public/assets/images/almaty.jpeg')] w-11/12 h-[300px] bg-cover bg-center rounded-3xl mx-auto"></div>
        <div className="w-11/12 mx-auto flex flex-col justify-evenly items-start gap-6">
          <h2 className="text-[2.3rem] font-bold flex flex-col">
            <span>Hi,</span>
            <span>
              I'm <span className="text-indigo-500">Nurbolat</span>,
            </span>
          </h2>
          <p className=" flex justify-between text-[1.5rem]">
            React Front-End Developer{" "}
          </p>

          <button className=" bg-white hover:bg-gray-100 hover:text-indigo-600 cursor-pointer text-indigo-500 text-lg h-full py-2 px-4 mt-4 rounded-xl shadow-lg">
            See my work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;

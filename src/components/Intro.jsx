import React, { useState } from "react";
import { useEffect } from "react";

import { Parallax } from "react-parallax";
import { Link } from "react-scroll";

const Intro = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [navOpacity, setNavOpacity] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) setNavOpacity(true);
    else setNavOpacity(false);
    // console.log("lol");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeBurgerOnClick = () => {
    setBurgerOpen(false);
  };

  const handleBurderClicked = () => {
    setBurgerOpen((prevstate) => !prevstate);
  };
  // bg-gradient-to-t from-indigo-200
  // bg-[url('/public/assets/images/bg.jpeg')]
  return (
    <Parallax
      bgImage="/assets/images/bg.jpeg"
      strength={400}
      bgImageStyle={{ maxWidth: "none" }}
    >
      <div className="relative flex flex-col justify-center items-center ">
        <nav
          className={`transition duration-200 w-full fixed top-0 bg-white ${
            navOpacity ? "bg-opacity-60" : "bg-opacity-0"
          }  rounded-b-lg  ${navOpacity ? "backdrop-blur-md" : ""} z-20`}
        >
          <div className=" container h-20 mx-auto py-5 px-10 flex justify-between items-center ">
            <div className="cursor-pointer">
              {/* <img /> */}
              <Link
                to="Homepage"
                smooth={true}
                // offset={-200}
                duration={1000}
                ignoreCancelEvents
                className={`text-2xl font-hind  ${
                  navOpacity ? "text-black" : "text-white"
                }`}
              >
                aimakov.dev
              </Link>
            </div>
            <ul
              className={`hidden md:flex space-x-10 uppercase text-md  ${
                navOpacity ? "text-black" : "text-white"
              }`}
            >
              <li
                className={`flex items-center ${
                  navOpacity ? "text-black" : "text-gray-100"
                }`}
              >
                <Link
                  to="Homepage"
                  smooth={true}
                  // offset={-200}
                  duration={1000}
                  ignoreCancelEvents
                  className={`${
                    navOpacity
                      ? "after:bg-black"
                      : "hover:text-white after:bg-white"
                  } cursor-pointer after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:hover:w-full  after:transition-all
                                    
                                    `}
                >
                  {/* hover:text-gray-100 after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:hover:w-full after:bg-red-500 */}
                  Homepage
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="AboutMe"
                  smooth={true}
                  offset={-200}
                  duration={1000}
                  ignoreCancelEvents
                  className={`${
                    navOpacity
                      ? "after:bg-black"
                      : "hover:text-white after:bg-white"
                  } cursor-pointer after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:hover:w-full  after:transition-all
                                    
                                    `}
                >
                  About me
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="Projects"
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  ignoreCancelEvents
                  className={`${
                    navOpacity
                      ? "after:bg-black"
                      : "hover:text-white after:bg-white"
                  } cursor-pointer after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:hover:w-full  after:transition-all
                                    
                                    `}
                >
                  Projects
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="ContactMe"
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  ignoreCancelEvents
                  className={`${
                    navOpacity
                      ? "after:bg-black"
                      : "hover:text-white after:bg-white"
                  } cursor-pointer after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:hover:w-full  after:transition-all
                                    
                                    `}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
            {/* <FiMoon className={`hidden md:block ${navOpacity ? "text-gray-600" : "text-gray-200"}`} /> */}
            {/* <button type="submit" form="contact" className=" bg-white/30 border-2 border-white text-white rounded-xl px-4 py-2">
                            HIRE ME
                        </button> */}
            <div
              className=" space-y-1 md:hidden cursor-pointer transition-all duration-1000 z-[100]"
              onClick={handleBurderClicked}
            >
              <div
                className={`transition-all w-6 h-0.5 ${
                  burgerOpen
                    ? "rotate-[45deg] translate-y-[3px] bg-white"
                    : navOpacity
                    ? "bg-black"
                    : "bg-white"
                }`}
              />
              <div
                className={`transition-all w-6 h-0.5 ${
                  burgerOpen ? "hidden" : navOpacity ? "bg-black" : "bg-white"
                }`}
              />
              <div
                className={`transition-all w-6 h-0.5 ${
                  burgerOpen
                    ? "rotate-[-45deg] -translate-y-[3px] bg-white"
                    : navOpacity
                    ? "bg-black"
                    : "bg-white"
                }`}
              />
            </div>
            <ul
              className={`${
                burgerOpen ? "" : "-translate-y-full"
              } absolute transition-all top-0 left-0 w-full p-10 rounded-b-xl bg-lime-700 shadow-lg text-white text-center flex flex-col items-center space-y-10 uppercase z-20`}
            >
              <li className="flex items-center">
                <Link
                  to="Homepage"
                  smooth={true}
                  // offset={-200}
                  duration={1000}
                  className="hover:text-gray-200"
                  ignoreCancelEvents
                  onClick={closeBurgerOnClick}
                >
                  Homepage
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="AboutMe"
                  smooth={true}
                  // offset={-200}
                  offset={0}
                  duration={1000}
                  className="hover:text-gray-200"
                  ignoreCancelEvents
                  onClick={closeBurgerOnClick}
                >
                  About me
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="Projects"
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  className="hover:text-gray-200"
                  ignoreCancelEvents
                  onClick={closeBurgerOnClick}
                >
                  Projects
                </Link>
              </li>
              <li className="flex items-center" onClick={closeBurgerOnClick}>
                <Link
                  to="ContactMe"
                  smooth={true}
                  offset={0}
                  duration={1000}
                  ignoreCancelEvents
                  className="hover:text-gray-200"
                  onClick={closeBurgerOnClick}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div
          id="Homepage"
          className="w-full min-h-screen flex flex-col justify-center gap-20 items-start"
        >
          {/* <div className="bg-[url('/public/assets/images/hall.jpeg')] h-[400px] w-[400px] object-cover bg-center rounded-3xl mx-auto"></div> */}

          {/* <img class="w-full" src="/assets/images/Dreamate.png" alt="Sunset in the mountains" /> */}

          <div className="w-11/12 lg:w-2/4 shrink mx-auto flex flex-col justify-evenly items-start lg:items-center gap-6">
            <div className="w-48 relative h-48 overflow-hidden rounded-full border-4 mx-auto z-10">
              <img
                src="/assets/images/pink.jpeg"
                className="relative scale-[200%] translate-x-[40px] translate-y-[30px] z-10"
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-center md:items-center items-start">
              <h2 className="text-[2.5rem] md:text-[3rem] text-white font-hind font-bold flex flex-col lg:flex-row">
                <span>Hi,&nbsp;</span>
                <span>I'm Nurbolat,</span>
              </h2>
              <p className=" flex justify-between text-white text-[1.5rem]">
                React Front-End Developer{" "}
              </p>
            </div>

            <Link
              to="Projects"
              smooth={true}
              offset={-60}
              duration={1000}
              ignoreCancelEvents
              className=" bg-white hover:bg-gray-100 hover:text-lime-600 cursor-pointer text-lime-700 text-lg h-full py-2 px-4 mt-4 rounded-xl shadow-lg"
            >
              See my work
            </Link>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Intro;

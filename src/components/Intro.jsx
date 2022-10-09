import React, { useState } from "react";
import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Parallax } from "react-parallax";

const Intro = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [navOpacity, setNavOpacity] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > 200) setNavOpacity(50);
        else setNavOpacity(0);
        // console.log("lol");
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // return window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBurderClicked = () => {
        setBurgerOpen((prevstate) => !prevstate);
    };
    // bg-gradient-to-t from-indigo-200
    // bg-[url('/public/assets/images/bg.jpeg')]
    return (
        <Parallax bgImage="/assets/images/bg.jpeg" strength={400}>
            <div className="relative flex flex-col justify-center items-center ">
                <nav
                    className={`transition duration-200 w-full fixed top-0 bg-white ${navOpacity == 0 ? "bg-opacity-0" : "bg-opacity-60"}  rounded-b-lg  ${
                        navOpacity !== 0 ? "backdrop-blur-md" : ""
                    } z-20`}
                >
                    <div className=" container mx-auto py-5 px-10 flex justify-between items-center ">
                        <div>
                            {/* <img /> */}
                            <span className={`text-2xl font-semibold `}>aimakov.dev</span>
                        </div>
                        <ul className={`hidden md:flex space-x-10 uppercase text-md  ${navOpacity !== 0 ? "text-gray-600" : "text-gray-200"}`}>
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
                        <FiMoon className={`hidden md:block ${navOpacity !== 0 ? "text-gray-600" : "text-gray-200"}`} />
                        <div className=" space-y-1 md:hidden cursor-pointer transition-all duration-1000 z-[100]" onClick={handleBurderClicked}>
                            <div className={`transition-all w-6 h-0.5 ${burgerOpen ? "rotate-[45deg] translate-y-[3px] bg-white" : "bg-black"}`} />
                            <div className={`transition-all w-6 h-0.5 ${burgerOpen ? "hidden" : "bg-black"}`} />
                            <div className={`transition-all w-6 h-0.5 ${burgerOpen ? "rotate-[-45deg] -translate-y-[3px] bg-white" : "bg-black"}`} />
                        </div>
                        <ul
                            className={`${
                                burgerOpen ? "" : "-translate-y-full"
                            } absolute transition-all top-0 left-0 w-full p-10 rounded-b-xl bg-lime-700 shadow-lg text-white text-center flex flex-col items-center space-y-10 uppercase z-20`}
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
                <div className="w-full min-h-screen flex flex-col justify-center gap-20 items-start">
                    {/* <div className="bg-[url('/public/assets/images/hall.jpeg')] h-[400px] w-[400px] object-cover bg-center rounded-3xl mx-auto"></div> */}

                    {/* <img class="w-full" src="/assets/images/Dreamate.png" alt="Sunset in the mountains" /> */}

                    <div className="w-11/12 lg:w-2/4 shrink mx-auto flex flex-col justify-evenly items-start lg:items-center gap-6">
                        <div className="w-48 relative h-48 overflow-hidden rounded-full border-4 mx-auto z-10">
                            <img src="/assets/images/pink.jpeg" className="relative scale-[200%] translate-x-[40px] translate-y-[30px] z-10" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-[3rem] text-white font-hind font-bold flex flex-col lg:flex-row">
                                <span>Hi,&nbsp;</span>
                                <span>I'm Nurbolat,</span>
                            </h2>
                            <p className=" flex justify-between text-white text-[1.5rem]">Front-End Developer </p>
                        </div>

                        <button className=" bg-white hover:bg-gray-100 hover:text-lime-600 cursor-pointer text-lime-700 text-lg h-full py-2 px-4 mt-4 rounded-xl shadow-lg">
                            See my work
                        </button>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Intro;

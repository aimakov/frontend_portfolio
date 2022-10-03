import React from "react";
import Dreamate from "./Projects/Dreamate";
// import Dreamate from "../../public/assets/images/Dreamate.png";

const Projects = () => {
    return (
        <div className=" w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-indigo-200">
            <h2 className="text-3xl font-bold mb-8">My Projects </h2>
            <ul className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-evenly lg:gap-10 lg:flex-wrap justify-evenly items-center">
                <li class="max-w-sm rounded-xl lg:min-h-[550px] lg:flex lg:flex-col lg:justify-between overflow-hidden shadow-lg bg-white">
                    <div>
                        <img class="w-full" src="/assets/images/Dreamate.png" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Dreamate - </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Socket.io</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MERN</span>
                    </div>
                </li>
                <li class="max-w-sm rounded-xl lg:min-h-[550px] lg:flex lg:flex-col lg:justify-between overflow-hidden shadow-lg bg-white">
                    <div>
                        <img class="w-full" src="/assets/images/Cakesie.png" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Cakesie</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#styled-components</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Illustrator</span>
                    </div>
                </li>
                <li class="max-w-sm rounded-xl lg:min-h-[550px] lg:flex lg:flex-col lg:justify-between overflow-hidden shadow-lg bg-white">
                    <div>
                        <img class="w-full" src="/assets/images/Nextico.png" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Nextico</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwindcss</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#drag-n-drop</span>
                    </div>
                </li>
            </ul>
            <Dreamate />
        </div>
    );
};

export default Projects;

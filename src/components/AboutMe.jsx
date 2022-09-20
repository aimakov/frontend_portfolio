import React from "react";

const AboutMe = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-b from-indigo-200">
            <div className="flex flex-col justify-evenly items-center gap-10">
                {/* <img className="bg-[url('/public/assets/images/passport.jpg')] w-40 h-48 rounded-[80px] bg-cover bg-center" /> */}

                <h2 className="text-3xl font-bold">My skills</h2>
                <div className="w-3/4 ml-12 grid grid-rows-4 grid-cols-2 gap-y-6">
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-lg font-semibold">Coding:</h3>
                        <ul>
                            <div className="bg-[url('/public/assets/skill_logos/react.png')] w-10 h-10 bg-center bg-cover rounded-md" />
                            <div className="bg-[url('/public/assets/skill_logos/typescript.png')] w-10 h-10 bg-center bg-cover rounded-md" />
                            <div className="bg-[url('/public/assets/skill_logos/javascript.png')] w-10 h-10 bg-center bg-cover rounded-md" />
                            <div className="bg-[url('/public/assets/skill_logos/python.png')] w-10 h-10 bg-center bg-cover rounded-md" />
                        </ul>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-lg font-semibold">Markup & Styling:</h3>
                        <ul>
                            <div className="bg-[url('/public/assets/skill_logos/tailwindcss.png')] w-10 h-6 my-2 bg-center bg-cover rounded-md" />
                            <div className="bg-[url('/public/assets/skill_logos/styled_components.png')] w-10 h-10 bg-center bg-cover rounded-md" />
                        </ul>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-lg font-semibold">Graphic Design:</h3>
                        <ul>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-lg font-semibold">Engineering:</h3>
                        <ul>
                            <li>Solidworks</li>
                            <li>KiCAD</li>
                            <li>RPi</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

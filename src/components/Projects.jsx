import React from "react";
import ProjectCard from "./elements/ProjectCard";

const Projects = () => {
    return (
        <div className=" w-full p-20 flex flex-col justify-center items-center bg-gray-200">
            <h2 className="text-3xl font-bold mb-16">My Projects </h2>
            <ul className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-evenly lg:gap-[70px] lg:flex-wrap justify-evenly items-center">
                <ProjectCard
                    src={"/assets/images/Dreamate.png"}
                    title={"Dreamate"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitatione praesentium nihil."
                    }
                    link={"https://dreamate.io"}
                    hashtags={["React.js", "Socket.io", "Express.js"]}
                    buttonStyle="bg-gradient-to-r from-green-200 to-blue-200"
                />
                <ProjectCard
                    src={"/assets/images/Cakesie.png"}
                    title={"Cakesie"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitatione praesentium nihil."
                    }
                    link={"https://cakesie.netlify.app"}
                    hashtags={["React.js", "styled-components", "Illustrator"]}
                    buttonStyle="bg-gradient-to-r from-orange-300 to-orange-200"
                />
                <ProjectCard
                    src={"/assets/images/Nextico.png"}
                    title={"Nextico"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitatione praesentium nihil."
                    }
                    link={"https://nextico.netlify.app"}
                    hashtags={["React.js", "tailwindcss", "drag-n-drop"]}
                    buttonStyle="bg-[#e0e0e0] shadow-gray-100"
                />
                <ProjectCard
                    src={"/assets/images/hyewonsaidyes.png"}
                    title={"Mobile Wedding Invitation"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitatione praesentium nihil."
                    }
                    link={"https://hyewonsaidyes.love"}
                    hashtags={["React.js", "tailwindcss", "KakaoMap API"]}
                    buttonStyle="bg-[url('/public/assets/images/roses.png')] bg-contain"
                />
            </ul>
            {/* <Dreamate /> */}
        </div>
    );
};

export default Projects;

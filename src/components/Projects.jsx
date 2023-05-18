import React from "react";
import ProjectCard from "./elements/ProjectCard";

const Projects = () => {
  return (
    <div
      id="Projects"
      className=" w-full p-10 lg:p-20 flex flex-col justify-center items-center bg-gray-200"
    >
      <h2 className="text-3xl font-bold mb-16">My Projects </h2>
      <ul className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-evenly gap-14 lg:gap-[70px] lg:flex-wrap justify-evenly items-center">
        <ProjectCard
          src={"/assets/images/Dreamate_vercel.png"}
          title={"Dreamate"}
          description={
            "Full-stack web application (MERN stack) that combines decentralized music playlist and randomized & balanced teams generator."
          }
          link={"https://dreamate.vercel.app"}
          hashtags={["Next.js", "Supabase"]}
          buttonStyle="bg-gradient-to-r from-green-200 to-blue-200"
        />
        <ProjectCard
          src={"/assets/images/Cakesie.png"}
          title={"Cakesie"}
          description={
            "Web application for creating cakes with custom combination of flavors for the layers, cream and icing or selecting from menu list."
          }
          link={"https://cakesie.netlify.app"}
          hashtags={["React.js", "styled-components", "Illustrator"]}
          buttonStyle="bg-gradient-to-r from-orange-300 to-orange-200"
        />
        <ProjectCard
          src={"/assets/images/Nextico.png"}
          title={"Nextico"}
          description={
            "Created an advanced variation of the original Tic-Tac-Toe with an additional feature and drag-n-drop functionality. "
          }
          link={"https://nextico.netlify.app"}
          hashtags={["React.js", "tailwindcss", "drag-n-drop"]}
          buttonStyle="bg-[#e0e0e0] shadow-gray-100"
        />
        <ProjectCard
          src={"/assets/images/hyewonsaidyes.png"}
          title={"Mobile Wedding Invitation"}
          description={"A mobile-oriented invitation for my wedding ceremony."}
          link={"https://hyewonsaidyes.love"}
          hashtags={["React.js", "tailwindcss", "KakaoMap API"]}
          buttonStyle="bg-[url('/public/assets/images/roses.png')] bg-contain"
          insideButtonStyle=" absolute top-0 left-0 w-full h-full bg-white bg-opacity-70 z-10 rounded-xl"
        />
      </ul>
      {/* <Dreamate /> */}
    </div>
  );
};

export default Projects;

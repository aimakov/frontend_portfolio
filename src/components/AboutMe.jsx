import React, { useState } from "react";
import { ReactComponent as Github } from "../svg/icons/github.svg";
import { ReactComponent as Instagram } from "../svg/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../svg/icons/linkedin.svg";
import Skills from "./Skills";
import { FiDownload } from "react-icons/fi";

const AboutMe = () => {
  const [instagramColor, setInstagramColor] = useState("black");
  const [linkedInColor, setLinkedInColor] = useState("black");
  const [githubColor, setGithubColor] = useState("black");

  const changeColorOnEnter = (method) => {
    method("green");
  };

  const changeColorOnLeave = (method) => {
    method("black");
  };

  return (
    <div
      id="AboutMe"
      className=" font-hind py-[100px] flex flex-col gap-20 lg:flex-row items-start justify-between lg:justify-evenly w-full lg:w-10/12 mx-auto"
    >
      <div className="flex-col max-w-[600px] w-10/12 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-hind">
          Hello, I'm Nurbolat Aimakov
        </h2>

        <h3 className="flex text-md lg:text-xl items-center gap-2">
          Web developer from
          <img
            alt="kazakhstan-flag"
            className="w-8 h-8"
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-kazakhstan_1f1f0-1f1ff.png"
          />
          , currently in
          <img
            alt="korea-flag"
            className="w-8 h-8"
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-south-korea_1f1f0-1f1f7.png"
          />
        </h3>

        <p className="pt-4">
          Currently, I'm a PhD candidate in biomedical engineering at Ulsan
          National Institute of Science and Technology (UNIST, South Korea).
        </p>
        <p className="pt-4">
          Throughout my studies, even though I find biomedical engineering
          extremely broad and exciting field, I finally decided to bind my life
          & career with coding in one of it's form and after trying myself in
          several directions I chose Front-End development as my main focus.
        </p>
        <p className="pt-4">
          Currenly, I enjoy building highly interactable web applications that
          solve people . Apart from Front-End, I'm proficient Back-End
          technologies like Django & MERN stack to build complete webapps.
        </p>
        <div className="flex gap-10 pt-4 justify-start items-center">
          <a href="https://instagram.com/aimakov.dev">
            <Instagram
              className="cursor-pointer"
              fill={instagramColor}
              onMouseEnter={() => changeColorOnEnter(setInstagramColor)}
              onMouseLeave={() => changeColorOnLeave(setInstagramColor)}
            />
          </a>

          <a href="https://github.com/aimakov">
            <Github
              className="cursor-pointer"
              fill={githubColor}
              onMouseEnter={() => changeColorOnEnter(setGithubColor)}
              onMouseLeave={() => changeColorOnLeave(setGithubColor)}
            />
          </a>
          <a href="https://www.linkedin.com/in/aimakov/">
            <Linkedin
              className="cursor-pointer"
              fill={linkedInColor}
              onMouseEnter={() => changeColorOnEnter(setLinkedInColor)}
              onMouseLeave={() => changeColorOnLeave(setLinkedInColor)}
            />
          </a>

          <a
            href="/assets/files/Resume_Nurbolat_Aimakov.pdf"
            download
            className="flex justify-center items-center gap-2 border border-black pt-1 px-2 rounded-xl cursor-pointer hover:bg-[#007D13] hover:bg-opacity-90 hover:text-white hover:border-white transition "
          >
            <FiDownload className="text-xl -translate-y-[2px]" />
            My resume
          </a>
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default AboutMe;

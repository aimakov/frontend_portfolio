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

        <div className="flex flex-col md:flex-row items-start text-md lg:text-xl md:items-center gap-2 pt-4">
          <p className="flex gap-2">
            Web developer from
            <a
              href="https://www.flaticon.com/free-icons/kazakhstan"
              title="kazakstan icons"
            >
              <img
                alt="kazakhstan-flag"
                className="w-8 h-8 mx-1 -translate-y-[10px]"
                src="/assets/icons/kazakhstan.png"
              />
            </a>
          </p>
          <p className="flex gap-2">
            , currently in
            <a
              href="https://www.flaticon.com/free-icons/korea"
              title="korea icons"
            >
              <img
                alt="korea-flag"
                className="w-8 h-8 mx-1 -translate-y-[10px]"
                src="assets/icons/korea.png"
              />
            </a>
          </p>
        </div>

        <p className="pt-4">
          Currently, I'm a Ph.D. candidate in biomedical engineering at Ulsan
          National Institute of Science and Technology (UNIST, Ulsan, South
          Korea).
        </p>
        <p className="pt-4">
          Throughout my studies, even though I find biomedical engineering an
          extremely broad and exciting field, I finally decided to bind my life
          & career with coding in one of its forms. After trying myself in
          several directions, I chose Front-End development as my main focus.
        </p>
        <p className="pt-4">
          I enjoy building interactable web applications that solve/optimize
          day-to-day things. Apart from Front-End, I'm proficient in Back-End
          technologies like Django & MERN stack for building complete products.
        </p>
        <div className="flex flex-col md:flex-row gap-10 mt-6 pt-4 justify-start items-center">
          <div className="flex  gap-10 items-center">
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
          </div>

          <a
            href="https://www.upwork.com/freelancers/~01e07e43f9d95233ac"
            className="flex text-[1.3rem] font-hind font-bold gap-2 items-center hover:text-[#6FDB42]  transition-all border border-black rounded-xl px-2 "
          >
            Hire me on
            <img className="w-[80px]" src="/assets/upwork.png  " />
          </a>

          {/* <a
            href="/assets/files/Resume_Nurbolat_Aimakov.pdf"
            download
            className="flex justify-center items-center gap-2 border border-black pt-1 px-2 rounded-xl cursor-pointer hover:bg-[#007D13] hover:bg-opacity-90 hover:text-white hover:border-white transition "
          >
            <FiDownload className="text-xl -translate-y-[2px]" />
            My resume
          </a> */}
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default AboutMe;

import React from "react";
import { ReactComponent as YourSvg } from "../svg/icons/github.svg";

const AboutMe = () => {
  return (
    <div className=" font-hind py-[50px] flex items-center w-8/12 mx-auto">
      <div className="flex-col w-2/4">
        <h2 className="text-3xl font-bold font-hind">
          Hello, I'm Nurbolat Aimakov
        </h2>

        <h3 className="flex text-xl items-center gap-2">
          Web developer from
          <img
            className="w-8 h-8"
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-kazakhstan_1f1f0-1f1ff.png"
          />
          , currently in
          <img
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
          I enjoy building webapps that solve people Despite focuing on
          Front-End, I also taught myself Back-End technologies like Django &
          MERN stack to build complete webapps.
        </p>
        <div>
          <YourSvg fill="red" onMouseEnter />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import ReactTooltip from "react-tooltip";

const Skills = () => {
  return (
    <div className="w-full  lg:w-2/4 flex flex-col justify-start items-center gap-10 ">
      {/* <div className="flex flex-col justify-evenly items-center gap-10"> */}
      {/* <img className="bg-[url('/public/assets/images/passport.jpg')] w-40 h-48 rounded-[80px] bg-cover bg-center" /> */}

      <h2 className="text-3xl px-4 font-bold relative after:absolute after:w-full after:text-[12px] after:left-2/4 after:-translate-x-1/2 text-center after:mx-auto after:-bottom-6 after:content-['Hover/click_for_more_info.']">
        My skills
      </h2>
      <div className="w-full grid grid-cols-[150px_1fr] lg:w-auto lg:grid-cols-[150px_350px] mx-auto gap-y-6 items-center">
        <h3 className="text-lg font-semibold text-right pr-2">Frontend:</h3>
        <ul className="flex justify-start gap-2 lg:gap-4 pl-2 flex-wrap">
          <div
            data-tip="React.js"
            className="bg-[url('/public/assets/skill_logos/react.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />

          <div
            data-tip="Next.js"
            className="bg-[url('/public/assets/skill_logos/nextjs.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />

          <div
            data-tip="Typescript"
            className="bg-[url('/public/assets/skill_logos/typescript.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Redux"
            className="bg-[url('/public/assets/skill_logos/redux.png')] w-8 h-[30px] lg:w-10 lg:h-[38px] bg-center bg-cover rounded-md hover:cursor-pointer"
          />

          <div
            data-tip="Tailwind CSS"
            className="bg-[url('/public/assets/skill_logos/tailwindcss.png')] w-8 h-5 lg:w-10 lg:h-6 my-2 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Styled-components"
            className="bg-[url('/public/assets/skill_logos/styled_components.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          {/* <div className="bg-[url('/public/assets/skill_logos/javascript.png')] w-10 h-10 bg-center bg-cover rounded-md" /> */}
        </ul>

        <h3 className="text-lg font-semibold text-right pr-2">Backend:</h3>
        <ul className="flex justify-start gap-2 lg:gap-4 pl-2 flex-wrap ">
          <div
            data-tip="Firebase"
            className="bg-[url('/public/assets/skill_logos/firebase.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Supabase"
            className="bg-[url('/public/assets/skill_logos/supabase.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Node.js"
            className="bg-[url('/public/assets/skill_logos/node.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Express.js"
            className="bg-[url('/public/assets/skill_logos/express.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Django"
            className="bg-[url('/public/assets/skill_logos/django.png')] w-8 h-8 lg:w-9 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Socket.io"
            className="bg-[url('/public/assets/skill_logos/socketio.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />

          <div
            data-tip="MongoDB"
            className="bg-[url('/public/assets/skill_logos/mongodb.png')] w-7 h-8 lg:w-9 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="SQLite"
            className="bg-[url('/public/assets/skill_logos/sqlite.png')] w-7 h-8 lg:w-9 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
        </ul>

        {/* <h3 className="text-lg font-semibold text-right pr-2">
            Markup & Styling:
          </h3>
          <ul className="flex justify-start gap-2 pl-2">
            <div className="bg-[url('/public/assets/skill_logos/tailwindcss.png')] w-10 h-6 my-2 bg-center bg-cover rounded-md" />
            <div className="bg-[url('/public/assets/skill_logos/styled_components.png')] w-10 h-10 bg-center bg-cover rounded-md" />
          </ul> */}

        <h3 className="text-lg font-semibold text-right pr-2">
          Graphic Design:
        </h3>
        <ul className="flex justify-start gap-2 lg:gap-4 pl-2 flex-wrap">
          <div
            data-tip="Adobe Illustrator"
            className="bg-[url('/public/assets/skill_logos/illustrator.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Adobe Photoshop"
            className="bg-[url('/public/assets/skill_logos/photoshop.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Adobe After Effects"
            className="bg-[url('/public/assets/skill_logos/after_effects.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Adobe Premiere Pro"
            className="bg-[url('/public/assets/skill_logos/premiere_pro.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
        </ul>

        <h3 className="text-lg font-semibold text-right pr-2">Engineering:</h3>
        <ul className="flex justify-start gap-2 lg:gap-4 pl-2 items-center flex-wrap">
          <div
            data-tip="Solidworks"
            className="bg-[url('/public/assets/skill_logos/solidworks.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="KiCAD"
            className="bg-[url('/public/assets/skill_logos/kicad.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Raspberry Pi"
            className="bg-[url('/public/assets/skill_logos/raspberry_pi.png')] w-6 h-8 lg:w-8 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
          <div
            data-tip="Arduino"
            className="bg-[url('/public/assets/skill_logos/arduino.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md hover:cursor-pointer"
          />
        </ul>
      </div>
      {/* </div> */}
      <ReactTooltip place="top" effect="solid" />
    </div>
  );
};

export default Skills;

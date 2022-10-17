import React from "react";

const Skills = () => {
  return (
    <div className="w-full  lg:w-2/4 flex flex-col justify-start items-center gap-10 ">
      {/* <div className="flex flex-col justify-evenly items-center gap-10"> */}
      {/* <img className="bg-[url('/public/assets/images/passport.jpg')] w-40 h-48 rounded-[80px] bg-cover bg-center" /> */}

      <h2 className="text-3xl font-bold">My skills</h2>
      <div className="w-full grid grid-cols-[150px_1fr] lg:w-auto lg:grid-cols-[150px_350px] mx-auto gap-y-6 items-center">
        <h3 className="text-lg font-semibold text-right pr-2">Frontend:</h3>
        <ul className="flex justify-start gap-2 lg:gap-4 pl-2 flex-wrap">
          <div className="bg-[url('/public/assets/skill_logos/react.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/typescript.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/redux.png')] w-8 h-[30px] lg:w-10 lg:h-[38px] bg-center bg-cover rounded-md" />

          <div className="bg-[url('/public/assets/skill_logos/tailwindcss.png')] w-8 h-5 lg:w-10 lg:h-6 my-2 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/styled_components.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          {/* <div className="bg-[url('/public/assets/skill_logos/javascript.png')] w-10 h-10 bg-center bg-cover rounded-md" /> */}
        </ul>

        <h3 className="text-lg font-semibold text-right pr-2">Backend:</h3>
        <ul className="flex justify-start gap-2 lg:gap-4 pl-2 flex-wrap ">
          <div className="bg-[url('/public/assets/skill_logos/firebase.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/socketio.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/node.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/express.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/mongodb.png')] w-7 h-8 lg:w-9 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/django.png')] w-8 h-8 lg:w-9 lg:h-10 bg-center bg-cover rounded-md" />
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
          <div className="bg-[url('/public/assets/skill_logos/illustrator.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/photoshop.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/after_effects.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/premiere_pro.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
        </ul>

        <h3 className="text-lg font-semibold text-right pr-2">Engineering:</h3>
        <ul className="flex justify-start gap-2 lg:gap-4 pl-2 items-center flex-wrap">
          <div className="bg-[url('/public/assets/skill_logos/solidworks.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/kicad.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/raspberry_pi.png')] w-6 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
          <div className="bg-[url('/public/assets/skill_logos/arduino.png')] w-8 h-8 lg:w-10 lg:h-10 bg-center bg-cover rounded-md" />
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Skills;

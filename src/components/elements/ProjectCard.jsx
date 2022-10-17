import React from "react";

const ProjectCard = (props) => {
  // const navigate = useNavigate();

  return (
    <li className="max-w-sm rounded-xl lg:h-[500px] lg:flex lg:flex-col lg:justify-between overflow-hidden shadow-lg bg-white">
      <div>
        <div className="w-full overflow-hidden cursor-pointer">
          <img
            src={props.src}
            alt={props.alt}
            className="w-full transition hover:scale-105"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="px-6">
          <div className="hover:-translate-y-[4px] transition w-fit mx-auto">
            <a
              href={props.link}
              className={`p-2 ${props.buttonStyle} rounded-xl shadow-md flex relative`}
            >
              <div className={props.insideButtonStyle}></div>
              <p className="z-20">View Project</p>
            </a>
          </div>
        </div>
        <div className="w-full pl-6 pb-2 flex justify-start gap-2">
          {props.hashtags.map((hashtag) => (
            <span
              key={hashtag}
              className="inline-block rounded-full text-[12px] font-semibold text-gray-700  "
            >
              #{hashtag}
            </span>
          ))}
        </div>

        {/* <Marquee gradient={false} speed={25} pauseOnHover={true}>
                    <div className="w-full py-2 flex justify-around">
                        {props.hashtags.map((hashtag) => (
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">#{hashtag}</span>
                        ))}
                    </div>
                </Marquee> */}
      </div>

      {/* <Marquee speed={300}>I can be a React component, multiple React components, or just some text.</Marquee> */}
    </li>
  );
};

export default ProjectCard;

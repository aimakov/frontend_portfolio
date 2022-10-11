import React from "react";

const ProjectCard = (props) => {
    // const navigate = useNavigate();

    return (
        <li class="max-w-sm rounded-xl lg:h-[570px] lg:flex lg:flex-col lg:justify-between overflow-hidden shadow-lg bg-white">
            <div>
                <div className="w-full overflow-hidden">
                    <img src={props.src} alt={props.alt} className="w-full transition hover:scale-105" />
                </div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.title}</div>
                    <p class="text-gray-700 text-base">{props.description}</p>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="px-6">
                    <div className="hover:-translate-y-[4px] transition w-fit">
                        <a href={props.link} className={`p-2 ${props.buttonStyle} rounded-xl shadow-md flex relative`}>
                            <div className={props.insideButtonStyle}></div>
                            <p className="z-20">View Project</p>
                        </a>
                    </div>
                </div>
                <div className="w-full pl-6 py-2 flex justify-start gap-1">
                    {props.hashtags.map((hashtag) => (
                        <span class="inline-block rounded-full py-2 text-[12px] font-semibold text-gray-700 mr-2 mb-2 ">#{hashtag}</span>
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

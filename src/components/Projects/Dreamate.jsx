import React from "react";
import ReactPlayer from "react-player";

const Dreamate = () => {
    return (
        <div>
            <ReactPlayer
                className="react-player fixed-bottom"
                url="/assets/projects/dreamate/Dreamate_Insta_Story.mp4"
                width="240px"
                height="100%"
                controls={true}
                loop={true}
                playing={true}
            />
        </div>
    );
};

export default Dreamate;

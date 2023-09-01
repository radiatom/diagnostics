import React from "react";
import "./Instruction.scss";
import InstructionImg from "./InstructionImg";
import InstructionVideo from "./InstructionVideo";

const Instruction = ({ img, video, instruction }) => {
    return (
        <div className="instruction">
            {Boolean(img !== null) && (
                <InstructionImg instruction={instruction} img={img} />
            )}
            {Boolean(video !== null) && (
                <InstructionVideo instruction={instruction} video={video} />
            )}
        </div>
    );
};

export default Instruction;

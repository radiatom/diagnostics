import React from "react";
import "./Instruction.scss";
import InstructionImg from "./InstructionImg";
import InstructionVideo from "./InstructionVideo";

const Instruction = ({ img, video, instruction }) => {
    return (
        <div className="instruction">
            {img !== null ? (
                <InstructionImg instruction={instruction} img={img} />
            ) : (
                ""
            )}
            {video !== null ? (
                <InstructionVideo instruction={instruction} video={video} />
            ) : (
                ""
            )}
        </div>
    );
};

export default Instruction;

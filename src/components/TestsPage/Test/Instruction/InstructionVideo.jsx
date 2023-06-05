import React, { useEffect, useRef,useState } from "react";
import "./Instruction.scss";
import icon from "./../../../../img/icons/down.png";

const InstructionVideo = ({ video, instruction }) => {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [video]);
    const [drop, setDrop] = useState(false);
    return (
        <div className="instruction">
            <div className="instruction__btn" onClick={() => setDrop(!drop)}>
                <button>Відео інструкція</button>
                <img src={icon} alt="down" />
            </div>
            {drop ? (
                <div className="instruction__body">
                    <p className={instruction === "" ? "none" : ""}>
                        {instruction}
                    </p>
                    <video ref={videoRef} controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default InstructionVideo;

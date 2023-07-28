import React, { useEffect, useRef,useState } from "react";
import "./Instruction.scss";

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
            <div className="instruction__spoiler" onClick={() => setDrop(!drop)}>
                <button>Відео інструкція</button>
                <span className={drop?'instruction__spoiler_downIcon active':"instruction__spoiler_downIcon"}></span>
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

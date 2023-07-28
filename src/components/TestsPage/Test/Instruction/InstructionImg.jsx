import React, { useState } from "react";
import "./Instruction.scss";

const InstructionImg = ({ img, instruction }) => {
    const [drop, setDrop] = useState(false);
    return (
        <div className="instruction">
            <div className="instruction__spoiler" onClick={() => setDrop(!drop)}>
                <button>Фото інструкція</button>
                <span className={drop?'instruction__spoiler_downIcon active':"instruction__spoiler_downIcon"}></span>
            </div>
            {drop ? (
                <div className="instruction__body">
                    <p className={instruction===''?'none':''}>{instruction}</p>
                    <a href={img} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt="img" />
                    </a>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default InstructionImg;

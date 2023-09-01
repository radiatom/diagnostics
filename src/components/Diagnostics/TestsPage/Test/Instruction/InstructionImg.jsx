import React, { useState } from "react";
import "./Instruction.scss";

const InstructionImg = ({ img, instruction }) => {
    const [drop, setDrop] = useState(false);
    return (
        <div className="instruction">
            <div className={drop?'instruction__spoiler open':"instruction__spoiler"} onClick={() => setDrop(!drop)}>
                <button>Фото інструкція</button>
                <span className="instruction__spoiler_downIcon"></span>
            </div>
            <div  className={drop?'instruction__body open':"instruction__body"}>
                <p className={ instruction===''?'none':''}>{instruction}</p>
                <a href={img} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt="img" />
                </a>
            </div>
        </div>
    );
};

export default InstructionImg;

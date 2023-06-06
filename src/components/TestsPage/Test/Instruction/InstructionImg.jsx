import React, { useState } from "react";
import "./Instruction.scss";
import icon from "./../../../../img/icons/down.webp";

const InstructionImg = ({ img, instruction }) => {
    const [drop, setDrop] = useState(false);
    return (
        <div className="instruction">
            <div className="instruction__btn" onClick={() => setDrop(!drop)}>
                <button>Фото інструкція</button>
                <img src={icon} alt="down" />
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

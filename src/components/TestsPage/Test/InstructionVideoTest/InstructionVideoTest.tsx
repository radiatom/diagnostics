import React from 'react';
import s from "./InstructionVideoTest.module.css"

type propsType = {
    video: string
    instruction: null | string
}
const InstructionVideoTest: React.FC<propsType> = ({ video, instruction }) => {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Відео інструкція
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p className="card-text">{instruction}</p>
                        <video className={`w-100 ${s.img}`} controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstructionVideoTest;

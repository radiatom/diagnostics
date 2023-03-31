import React from 'react';
import s from "./InstructionImgTest.module.css"

type propsType = {
      instruction: null | string
      img: string
}
const InstructionImgTest: React.FC<propsType> = ({ img, instruction }) => {
      return (
            <div>
                  <div className="accordion accordion-flush " id="accordionFlushExample">
                        <div className="accordion-item ">
                              <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                          Фото інструкція
                                    </button>
                              </h2>
                              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                          <p className="card-text">{instruction}</p>
                                          <img className={`w-100 ${s.img}`} src={img} alt="img" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default InstructionImgTest;

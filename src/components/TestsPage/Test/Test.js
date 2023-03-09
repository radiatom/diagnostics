import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Test.module.css"



const Test = (props) => {
const onClickYes=()=>{
      props.putSolutionTestTrue(props.testData.solutionYes)
      props.putSolutionTestFalse(props.testData.solutionNo)
}
const onClickNo=()=>{
      props.putSolutionTestTrue(props.testData.solutionNo)
      props.putSolutionTestFalse(props.testData.solutionYes)
}
      return (
            <div className={s.testContainer}>
                  <div className={s.test}>
                        <div className="card bg-secondary">
                              <div className="card-header">
                                    {props.testData.linkNumber}
                              </div>
                              <div className="card-body">
                                    <h5 className="card-title">{props.testData.problem}</h5>
                                    <p className="card-text">{props.testData.testText}</p>

                                    {props.testData.img !== null ?
                                          <div className="accordion accordion-flush " id="accordionFlushExample">
                                                <div className="accordion-item ">
                                                      <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                  Інструкція
                                                            </button>
                                                      </h2>
                                                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                  <p className="card-text">{props.testData.instruction}</p>
                                                                  <img className={s.img} src={props.testData.img} alt="img" />
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          : ''
                                    }
                                    {props.testData.video !== null ?
                                          <div className="accordion accordion-flush" id="accordionFlushExample">
                                                <div className="accordion-item">
                                                      <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                  Інструкція
                                                            </button>
                                                      </h2>
                                                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                  <p className="card-text">{props.testData.instruction}</p>
                                                                  <video className={s.video} controls>
                                                                        <source src={props.testData.video} type="video/mp4" />
                                                                        Your browser does not support the video tag.
                                                                  </video>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          : ''
                                    }
                                    {props.testData.linkNumberYes === props.testData.linkNumberNo && props.testData.solutionYes === props.testData.solutionNo ?
                                          props.testData.linkNumberYes === props.testData.solutionYes ?
                                                <div>
                                                      <NavLink to="/Diagnostics">
                                                            <button className={`btn btn-warning ${s.button}`}>Почати спочатку</button>
                                                      </NavLink>
                                                      <NavLink to="/Home">
                                                            <button className={`btn btn-warning ${s.button}`}>На головну</button>
                                                      </NavLink>
                                                </div>
                                                :
                                                <NavLink to={`/Diagnostics/Test/${props.testData.linkNumberYes}`}>
                                                      <button className={`btn btn-warning ${s.button}`}>Ok</button>
                                                </NavLink>

                                          :
                                          <div>
                                                <NavLink to={`/Diagnostics/Test/${props.testData.linkNumberYes}`}>
                                                      <button onClick={onClickYes} className={`btn btn-warning ${s.button}`}>Так</button>
                                                </NavLink>
                                                <NavLink to={`/Diagnostics/Test/${props.testData.linkNumberNo}`}>
                                                      <button onClick={onClickNo} className={`btn btn-warning ${s.button}`}>Ні</button>
                                                </NavLink>
                                          </div>
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Test;

import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Test.module.css"



const Test = (props) => {

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
                                          <div>
                                                <img className={s.img} src={props.testData.img} alt="img" />
                                                <p className="card-text">{props.testData.testText}</p>
                                          </div>
                                          : ''
                                    }
                                    {props.testData.video !== null ?
                                          <div>
                                                <video className={s.video} controls>
                                                      <source src={props.testData.video} type="video/mp4"/>
                                                            Your browser does not support the video tag.
                                                </video>
                                          </div>
                                          : ''
                                    }
                                    {props.testData.linkNumberYes === props.testData.linkNumberNo && props.testData.solutionYes === props.testData.solutionNo ?
                                          props.testData.linkNumberYes === props.testData.solutionYes ?
                                                <div>
                                                      <NavLink to="/Diagnostics/Starter/Bobbery/1.1">
                                                            <button className="btn btn-warning">Почати спочатку</button>
                                                      </NavLink>
                                                      <NavLink to="/Home">
                                                            <button className="btn btn-warning">На головну</button>
                                                      </NavLink>
                                                </div>
                                                :
                                                <NavLink to={`/Diagnostics/Starter/Bobbery/${props.testData.linkNumberYes}`}>
                                                      <button className="btn btn-warning">Ok</button>
                                                </NavLink>

                                          :
                                          <div>
                                                <NavLink to={`/Diagnostics/Starter/Bobbery/${props.testData.linkNumberYes}`}>
                                                      <button onClick={() => props.putSolutionTest(props.testData.solutionYes)} className="btn btn-warning">Так</button>
                                                </NavLink>
                                                <NavLink to={`/Diagnostics/Starter/Bobbery/${props.testData.linkNumberNo}`}>
                                                      <button onClick={() => props.putSolutionTest(props.testData.solutionNo)} className="btn btn-warning">Ні</button>
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

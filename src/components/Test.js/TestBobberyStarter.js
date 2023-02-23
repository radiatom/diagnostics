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
                                    {props.testData.linkNumberYes === props.testData.linkNumberNo && props.testData.solutionYes === props.testData.solutionNo ?
                                          <div>
                                                <NavLink to={`/Diagnostics/Starter/Bobbery/${props.testData.linkNumberYes}`}>
                                                      <button onClick={() => props.putSolutionTest(props.testData.solutionYes)} className="btn btn-warning">Ok</button>
                                                </NavLink>
                                          </div>
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

import React from 'react';
import { NavLink } from 'react-router-dom';
import InstructionImgTest from './InstructionImgTest/InstructionImgTest';
import InstructionVideoTest from './InstructionVideoTest/InstructionVideoTest';
import s from "./Test.module.css"



const Test = (props) => {
      const onClickYes = () => {
            props.putSolutionTestTrue(props.testData.solutionYes)
            props.putSolutionTestFalse(props.testData.solutionNo)
      }
      const onClickNo = () => {
            props.putSolutionTestTrue(props.testData.solutionNo)
            props.putSolutionTestFalse(props.testData.solutionYes)
      }
      return (
            <div className={s.testContainer}>
                  <div className={s.test}>
                        <div className="card bg-secondary">
                              <div className="card-header">{props.testData.linkNumber}</div>
                              <div className="card-body">
                                    <h5 className="card-title">{props.testData.problem}</h5>
                                    <p className="card-text">{props.testData.testText}</p>
                                    {props.testData.img !== null ?
                                          <InstructionImgTest instruction={props.testData.instruction} img={props.testData.img} />
                                          : ''
                                    }
                                    {props.testData.video !== null ?
                                          <InstructionVideoTest instruction={props.testData.instruction} video={props.testData.video} />
                                          : ''
                                    }
                                    {props.testData.linkNumberYes === props.testData.linkNumberNo && props.testData.solutionYes === props.testData.solutionNo ?
                                          props.testData.linkNumberYes === props.testData.solutionYes ?
                                                <div>
                                                      <NavLink to="/??ontact">
                                                            <button className={`btn btn-warning ${s.button}`}>???????? ????????????????</button>
                                                      </NavLink>
                                                      <NavLink to="/Diagnostics">
                                                            <button className={`btn btn-warning ${s.button}`}>???????? ??????????????????????</button>
                                                      </NavLink>
                                                </div>
                                                :
                                                <NavLink to={`/Diagnostics/Test/${props.testData.linkNumberYes}`}>
                                                      <button className={`btn btn-warning ${s.button}`}>Ok</button>
                                                </NavLink>

                                          :
                                          <div>
                                                <NavLink to={`/Diagnostics/Test/${props.testData.linkNumberYes}`}>
                                                      <button onClick={onClickYes} className={`btn btn-warning ${s.button}`}>??????</button>
                                                </NavLink>
                                                <NavLink to={`/Diagnostics/Test/${props.testData.linkNumberNo}`}>
                                                      <button onClick={onClickNo} className={`btn btn-warning ${s.button}`}>????</button>
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

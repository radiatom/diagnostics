import React from 'react';
import { Dispatch } from "react"
import { NavLink } from 'react-router-dom';
import InstructionImgTest from './InstructionImgTest/InstructionImgTest';
import InstructionVideoTest from './InstructionVideoTest/InstructionVideoTest';
import s from "./Test.module.css"
import { cardType } from "./../../../server/server"
import { useDispatch, useSelector } from 'react-redux';
import { putSolutionTestTrue, putSolutionTestFalse, actionsTypes } from './../../../reactRedux/testReducer';
import { appStateType } from '../../../reactRedux/redux';
// import logo from "./../../../img/Viniko1.png"
const logo = `${process.env.PUBLIC_URL}/img/Viniko1.png`


type propsType = {
}
const testDataSelector = (state: appStateType) => {
      return state.testPage.testData
}

const Test: React.FC<propsType> = () => {
      const testData: cardType  = useSelector(testDataSelector)
      const dispatch: Dispatch<actionsTypes> = useDispatch()


      const onClickYes = () => {
            dispatch(putSolutionTestTrue(testData.solutionYes))
            dispatch(putSolutionTestFalse(testData.solutionNo))
      }
      const onClickNo = () => {
            dispatch(putSolutionTestTrue(testData.solutionNo))
            dispatch(putSolutionTestFalse(testData.solutionYes))
      }
      return (
            <div className={s.testContainer}>
                  <div className={s.test}>
                        <div className="card bg-secondary">
                              <div className="card-header">{testData.linkNumber}</div>
                              <div className="card-body">
                                    <h5 className="card-title">{testData.problem}</h5>
                                    <p className="card-text">{testData.testText}</p>
                                    {testData.img !== null ?
                                          <InstructionImgTest instruction={testData.instruction} img={testData.img} />
                                          : ''
                                    }
                                    {testData.video !== null ?
                                          <InstructionVideoTest instruction={testData.instruction} video={testData.video} />
                                          : ''
                                    }
                                    {testData.linkNumberYes === testData.linkNumberNo && testData.solutionYes === testData.solutionNo ?
                                          testData.linkNumberYes === testData.solutionYes ?
                                                <div>
                                                      <div>
                                                            <NavLink to="/Home"><img src={logo} alt="logo" width="200" /></NavLink>
                                                      </div>
                                                      <NavLink to="/Сontact">
                                                            <button className={`btn btn-warning ${s.button}`}>Наші контакти</button>
                                                      </NavLink>
                                                      <NavLink to="/Diagnostics">
                                                            <button className={`btn btn-warning ${s.button}`}>Інші діагностики</button>
                                                      </NavLink>
                                                </div>
                                                :
                                                <NavLink to={`/Diagnostics/Test/${testData.linkNumberYes}`}>
                                                      <button onClick={() => dispatch(putSolutionTestTrue(2))} className={`btn btn-warning ${s.button}`}>Ok</button>
                                                </NavLink>

                                          :
                                          <div>
                                                <NavLink to={`/Diagnostics/Test/${testData.linkNumberYes}`}>
                                                      <button onClick={onClickYes} className={`btn btn-warning ${s.button}`}>Так</button>
                                                </NavLink>
                                                <NavLink to={`/Diagnostics/Test/${testData.linkNumberNo}`}>
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

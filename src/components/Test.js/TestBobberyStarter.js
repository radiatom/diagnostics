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
                                    <NavLink to={`/Diagnostics/Starter/Bobbery/${props.testData.linkNumberYes}`}>
                                          <button  className="btn btn-warning">Так</button>
                                    </NavLink>
                                    <NavLink to={`/Diagnostics/Starter/Bobbery/${props.testData.linkNumberNo}`}>
                                          <button  className="btn btn-warning">Ні</button>
                                    </NavLink>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Test;

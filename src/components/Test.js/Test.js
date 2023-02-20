import React from 'react';
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
                                    <button onClick={() => props.getTestData(props.testData.linkNumberYes)} className="btn btn-warning">Так</button>
                                    <button onClick={() => props.getTestData(props.testData.linkNumberNo)} className="btn btn-warning">Ні</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Test;

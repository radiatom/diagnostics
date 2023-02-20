import React from 'react';

const Test = (props) => {
      return (
            <div>
                  <div className="card">
                        <div className="card-header">
                              {props.testData.linkNumber}
                        </div>
                        <div className="card-body">
                              <h5 className="card-title">{props.testData.problem}</h5>
                              <p className="card-text">{props.testData.testText}</p>
                              <button onClick={()=>props.getTestData(1.1)} className="btn btn-primary">Так</button>
                              <button onClick={()=>props.getTestData(props.linkNumberNo)} className="btn btn-primary">Ні</button>
                        </div>
                  </div>
            </div>
      );
}

export default Test;

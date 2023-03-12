import React from 'react';
import TestContainer from './Test/TestContainer';
import FinishTestsContainer from './FinishTests/FinishTestsContainer';


const TestPage = (props) => {
      return (
            <div>
                  {props.linkNumber === "7" ? <FinishTestsContainer /> : <TestContainer />}
            </div>
      );
}

export default TestPage

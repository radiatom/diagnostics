import React from 'react';
import TestContainer from './Test/TestContainer';
import FinishTests from './FinishTests/FinishTests';


const TestPage = (props) => {
      return (
            <div>
                  {props.linkNumber === "7" ? <FinishTests /> : <TestContainer />}
            </div>
      );
}

export default TestPage

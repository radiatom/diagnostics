import React, { useEffect } from 'react';
import TestContainer from './Test/TestContainer';
import FinishTestsContainer from './FinishTests/FinishTestsContainer';


const TestPage = (props) => {
      useEffect(() => {
            props.getTestData(props.linkNumber)
            props.setSaveResault()

      }, [props]);
      return (
            <div>
                  {props.linkNumber === 7 ? <FinishTestsContainer /> : <TestContainer />}
            </div>
      );
}

export default TestPage

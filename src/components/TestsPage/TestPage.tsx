import React, { useEffect } from 'react';
import TestContainer from './Test/TestContainer';
import FinishTestsContainer from './FinishTests/FinishTestsContainer';

type propsType = {
      getTestData: (linkNumber: number) => void
      setSaveResault: () => void
      linkNumber: number
}
const TestPage: React.FC<propsType> = (props) => {
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

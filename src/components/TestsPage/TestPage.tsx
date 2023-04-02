import React, { useEffect } from 'react';
import FinishTestsContainer from './FinishTests/FinishTestsContainer';
import Test from './Test/Test';

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
                  {props.linkNumber === 7 ? <FinishTestsContainer /> : <Test />}
            </div>
      );
}

export default TestPage

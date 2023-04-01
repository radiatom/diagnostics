import React from 'react';
import { getTestData, putSolutionTestTrue, putSolutionTestFalse } from './../../../reactRedux/testReducer';
import Test from './Test';
import { connect } from 'react-redux';
import { cardType } from "./../../../server/server"
import {appStateType} from './../../../reactRedux/redux'


type propsType = {
      getTestData: any
      putSolutionTestFalse: any
      putSolutionTestTrue: any
      testData: cardType
}
type mapStateToPropsType = {
      testData: cardType
}

const TestContainer: React.FC<propsType> = (props) => {
      return (
            <div>
                  <Test {...props} />
            </div>
      );
}

const mapStateToProps = (state: appStateType): mapStateToPropsType => {
      return {
            testData: state.testPage.testData,
      }
}
export default connect(mapStateToProps, { getTestData, putSolutionTestTrue, putSolutionTestFalse })(TestContainer);


import React from 'react';
import { getTestData, putSolutionTestTrue, putSolutionTestFalse } from './../../../reactRedux/testReducer';
import Test from './Test';
import { connect } from 'react-redux';


const TestContainer = (props) => {
      return (
            <div>
                  <Test {...props} />
            </div>
      );
}
const mapStateToProps = (state) => {
      return {
            testData: state.testPage.testData,
      }
}
export default connect(mapStateToProps, { getTestData, putSolutionTestTrue, putSolutionTestFalse })(TestContainer);


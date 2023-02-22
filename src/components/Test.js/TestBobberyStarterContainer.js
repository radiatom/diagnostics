import React from 'react';
import { connect } from 'react-redux';
import TestBobberyStarter from './TestBobberyStarter';
import { getTestData, putSolutionTest, getResaultDiagnosticData } from '../../reactRedux/testReducer';
import { useParams } from 'react-router-dom';
import ResaultDiagnosticContainer from './../ResaultDiagnostic/ResaultDiagnosticContainer';




const TestBobberyStarterContainer = (props) => {
      
      const { linkNumber } = useParams()
      props.getTestData(linkNumber)
      return (
            <div>
                  <div>
                        <TestBobberyStarter {...props} />
                  </div>
                  <div>
                        <ResaultDiagnosticContainer {...props} />
                  </div>
            </div>
      );
}
const mapStateToProps = (state) => {
      return {
            testData: state.testPage.testData,
      }
}

export default connect(mapStateToProps, { getTestData, putSolutionTest, getResaultDiagnosticData })(TestBobberyStarterContainer);

import React from 'react';
import { connect } from 'react-redux';
import TestPage from './TestPage';
import { useParams } from 'react-router-dom';
import { getTestData, setSaveResault } from './../../reactRedux/testReducer';

const TestPageContainer = (props) => {
      const { linkNumber } = useParams()
      const num = Number(linkNumber)
      return (
            <div>
                  <TestPage linkNumber={num} getTestData={props.getTestData} setSaveResault={props.setSaveResault} />
            </div>
      );
}
const mapStateToProps = (state) => {
      return {
      }
}
export default connect(mapStateToProps, { getTestData, setSaveResault })(TestPageContainer);

import React from 'react';
import { connect } from 'react-redux';
import TestPage from './TestPage';
import { useParams } from 'react-router-dom';
import { getTestData, setSaveResault } from './../../reactRedux/testReducer';
import {appStateType}from './../../reactRedux/redux'

type propsType = {
      getTestData: any
      setSaveResault: any
}
const TestPageContainer: React.FC<propsType> = ({ getTestData, setSaveResault }) => {
      const { linkNumber } = useParams()
      const num: number = Number(linkNumber)
      return (
            <div>
                  <TestPage linkNumber={num} getTestData={getTestData} setSaveResault={setSaveResault} />
            </div>
      );
}
const mapStateToProps = (state: appStateType) => {
      return {
      }
}
export default connect(mapStateToProps, { getTestData, setSaveResault })(TestPageContainer);

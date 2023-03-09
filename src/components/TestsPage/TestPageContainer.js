import React from 'react';
import { connect } from 'react-redux';
import TestPage from './TestPage';
import { useParams } from 'react-router-dom';
import { getTestData } from './../../reactRedux/testReducer';

const TestPageContainer = (props) => {
      const { linkNumber } = useParams()
      props.getTestData(linkNumber)
      return (
            <div>
                  <TestPage linkNumber={linkNumber}/>
            </div>
      );
}
const mapStateToProps = (state) => {
      return {
      }
}
export default connect (mapStateToProps,{getTestData}) (TestPageContainer);

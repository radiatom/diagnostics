import React from 'react';
import { connect } from 'react-redux';
import TestBobberyStarter from './TestBobberyStarter';
import { getTestData, } from '../../reactRedux/testReducer';
import { useParams } from 'react-router-dom';



const TestBobberyStarterContainer = (props) => {
      const { linkNumber } = useParams()
      props.getTestData(linkNumber)
      return (
            <div>
                  <TestBobberyStarter {...props}/>
            </div>
      );
}
const mapStateToProps=(state)=>{
      return{
            testData:state.testPage.testData,
            
      }
}

export default connect (mapStateToProps,{getTestData})(TestBobberyStarterContainer);

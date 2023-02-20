import React from 'react';
import { connect } from 'react-redux';
import Test from './Test';
import { getTestData } from '../../reactRedux/testReducer';


const TestContainer = (props) => {
      return (
            <div>
                  <Test {...props}/>
            </div>
      );
}
const mapStateToProps=(state)=>{
      return{
            testData:state.testPage.testData,
      }
}

export default connect (mapStateToProps,{getTestData})(TestContainer);

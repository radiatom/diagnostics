import React from 'react';
import { connect } from 'react-redux';
import FinishTests from './FinishTests';
import {setSaveResault, updateRes} from "./../../../reactRedux/testReducer"

const FinishTestsContainer = (props) => {
    
    return (
        <div>
            <FinishTests {...props}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
          resault: state.testPage.resault
    }
}
export default connect(mapStateToProps, {setSaveResault, updateRes})(FinishTestsContainer);


import React from 'react';
import { connect } from 'react-redux';
import FinishTests from './FinishTests';
import { updateRes } from "./../../../reactRedux/testReducer.ts"

const FinishTestsContainer = (props) => {
    return (
        <div>
            <FinishTests {...props} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        resault: state.testPage.resault
    }
}
export default connect(mapStateToProps, { updateRes })(FinishTestsContainer);


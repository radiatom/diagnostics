import React from 'react';
import { connect } from 'react-redux';
import FinishTests from './FinishTests';
import { updateRes } from "../../../reactRedux/testReducer"
import { resaultDiagnosticType } from "./../../../server/server"
import {appStateType}from './../../../reactRedux/redux'


type propsType = {
    updateRes: () => void
    resault: resaultDiagnosticType
}
type mapStateToPropsType = {
    resault: resaultDiagnosticType
}


const FinishTestsContainer: React.FC<propsType> = (props) => {
    return (
        <div>
            <FinishTests {...props} />
        </div>
    );
}

const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        resault: state.testPage.resault
    }
}
export default connect(mapStateToProps, { updateRes })(FinishTestsContainer);


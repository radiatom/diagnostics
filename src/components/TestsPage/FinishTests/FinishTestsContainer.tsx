import React from 'react';
import { connect } from 'react-redux';
import FinishTests from './FinishTests';
import { updateRes } from "../../../reactRedux/testReducer"
import { solutionType } from "../../../server/server"

type propsType = {
    updateRes: any
    resault: solutionType
}
type mapStateToPropsType = {
    resault: solutionType
}


const FinishTestsContainer: React.FC<propsType> = (props) => {
    return (
        <div>
            <FinishTests {...props} />
        </div>
    );
}

const mapStateToProps = (state: any): mapStateToPropsType => {
    return {
        resault: state.testPage.resault
    }
}
export default connect(mapStateToProps, { updateRes })(FinishTestsContainer);


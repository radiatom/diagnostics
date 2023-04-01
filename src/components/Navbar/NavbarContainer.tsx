import React from 'react';
import { connect } from 'react-redux';
import { updateRes } from './../../reactRedux/testReducer'
import Navbar from "./Navbar"
import { appStateType } from './../../reactRedux/redux'

type propsType = {
    updateRes: () => void
}
const NavbarContainer: React.FC<propsType> = ({ updateRes }) => {
    return (
        <div>
            <Navbar updateRes={updateRes} />
        </div>
    );
}
const mapStateToProps = (state: appStateType): {} => {
    return {
    }
}
export default connect(mapStateToProps, { updateRes })(NavbarContainer);

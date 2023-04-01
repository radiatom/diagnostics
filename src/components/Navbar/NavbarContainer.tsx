import React from 'react';
import { connect } from 'react-redux';
import { updateRes } from './../../reactRedux/testReducer'
import Navbar from "./Navbar"
import { appStateType } from './../../reactRedux/redux'


const NavbarContainer = ({ updateRes: any }) => {
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

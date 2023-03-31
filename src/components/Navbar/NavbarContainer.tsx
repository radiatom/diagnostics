import React from 'react';
import { connect } from 'react-redux';
import { updateRes } from './../../reactRedux/testReducer'
import Navbar from "./Navbar"

const NavbarContainer = ({ updateRes: any }) => {
    return (
        <div>
            <Navbar updateRes={updateRes} />
        </div>
    );
}
const mapStateToProps = (state: any) => {
    return {
    }
}
export default connect(mapStateToProps, { updateRes })(NavbarContainer);

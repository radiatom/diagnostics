import React from 'react';
import { connect } from 'react-redux';
import {updateRes} from './../../reactRedux/testReducer'
import Navbar from "./Navbar"

const NavbarContainer = (props) => {
    return (
        <div>
            <Navbar {...props}/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
    }
}
export default connect (mapStateToProps, { updateRes })(NavbarContainer);

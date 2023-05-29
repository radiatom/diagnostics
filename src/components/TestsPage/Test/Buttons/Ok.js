import React from "react";
import "./Buttons.scss";
import { useDispatch } from "react-redux";
import { putSolutionTestTrue } from "../../../../reactRedux/testReducer";
import { NavLink } from "react-router-dom";

const Ok = ({linkNumberYes}) => {
      const dispatch= useDispatch()
    return (
        <NavLink to={`/Diagnostics/Test/${linkNumberYes}`}>
            <button
                onClick={() => dispatch(putSolutionTestTrue(2))}
                className='btnY button'
            >
                Ok
            </button>
        </NavLink>
    );
};

export default Ok;

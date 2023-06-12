import React from "react";
import "./Buttons.scss";
import { useDispatch } from "react-redux";
import { putSolutionTestTrue } from "../../../../reactRedux/testReducer";
import { NavLink } from "react-router-dom";

const Ok = ({ linkNumberYes }) => {
    const dispatch = useDispatch();
    return (
        <div className="ok">
            <NavLink
                onClick={() => dispatch(putSolutionTestTrue(2))}
                className="btnY"
                to={`/Diagnostics/Test/${linkNumberYes}`}
            >
                OK
            </NavLink>
        </div>
    );
};

export default Ok;

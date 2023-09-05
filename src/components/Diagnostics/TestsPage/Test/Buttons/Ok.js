import React from "react";
import "./Buttons.scss";
import { useDispatch } from "react-redux";
import { putSolutionTestTrue } from "../../testReducer";
import { NavLink } from "react-router-dom";

const Ok = ({ linkNumberYes, setActive }) => {
    const dispatch = useDispatch();
    const click = () => {
        dispatch(putSolutionTestTrue(2));
        setActive(false)//зробити opticaly:0
    };
    return (
        <div className="ok">
            <NavLink
                onClick={click}
                className="btnY"
                to={`/Diagnostics/Test/${linkNumberYes}`}
            >
                OK
            </NavLink>
        </div>
    );
};

export default Ok;

import React from "react";
import "./Buttons.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { putSolutionTestFalse, putSolutionTestTrue } from "../testReducer";
import { testDataSelector } from "../../../../../selectors/selectors";

const YesOrNo = ({ setActive }) => {
    const dispatch = useDispatch();
    const testData = useSelector(testDataSelector);
    const onClickYes = () => {
        dispatch(putSolutionTestTrue(testData.solutionYes));
        dispatch(putSolutionTestFalse(testData.solutionNo));
        setActive(false)
    };
    const onClickNo = () => {
        dispatch(putSolutionTestTrue(testData.solutionNo));
        dispatch(putSolutionTestFalse(testData.solutionYes));
        setActive(false)
    };
    return (
        <div className="YesOrNo">
            <NavLink
                onClick={onClickYes}
                className="btnY"
                to={`/Diagnostics/Test/${testData.linkNumberYes}`}
            >
                Так
            </NavLink>
            <NavLink
                onClick={onClickNo}
                className="btnY"
                to={`/Diagnostics/Test/${testData.linkNumberNo}`}
            >
                Ні
            </NavLink>
        </div>
    );
};

export default YesOrNo;

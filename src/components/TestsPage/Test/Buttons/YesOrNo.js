import React from "react";
import "./Buttons.scss";
import { NavLink } from "react-router-dom";

const YesOrNo = ({ linkNumberYes, onClickYes, linkNumberNo, onClickNo }) => {
    return (
        <div className="YesOrNo">
            <NavLink
                onClick={onClickYes}
                className="btnY"
                to={`/Diagnostics/Test/${linkNumberYes}`}
            >
                Так
            </NavLink>
            <NavLink
                onClick={onClickNo}
                className="btnY"
                to={`/Diagnostics/Test/${linkNumberNo}`}
            >
                Ні
            </NavLink>
        </div>
    );
};

export default YesOrNo;

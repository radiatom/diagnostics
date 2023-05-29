import React from "react";
import "./Buttons.scss";
import { NavLink } from "react-router-dom";

const YesOrNo = ({linkNumberYes,onClickYes,linkNumberNo ,onClickNo}) => {
    return (
        <div>
            <NavLink to={`/Diagnostics/Test/${linkNumberYes}`}>
                <button
                    onClick={onClickYes}
                    className='btnY button'
                >
                    Так
                </button>
            </NavLink>
            <NavLink to={`/Diagnostics/Test/${linkNumberNo}`}>
                <button
                    onClick={onClickNo}
                    className='btnY button w93'
                >
                    Ні
                </button>
            </NavLink>
        </div>
    );
};

export default YesOrNo;

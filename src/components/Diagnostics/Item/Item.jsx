import React from "react";
import "./Item.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRes } from "../../../reactRedux/testReducer";

const Item = ({ title, problem, text, link }) => {
    const dispatch=useDispatch()
    return (
        <div className="Item">
            <h5>{title}</h5>
            <h6>{problem}</h6>
            <p>{text}</p>
            <nav>
                <NavLink onClick={()=>dispatch(updateRes())} to={`/Diagnostics/Test/${link}`}>
                    <button className="btnY">Почати діагностику</button>
                </NavLink>
            </nav>
        </div>
    );
};

export default Item;

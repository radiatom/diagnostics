import React from "react";
import "./Item.scss";
import { NavLink } from "react-router-dom";

const Item = ({ title, problem, text, link }) => {
    return (
        <div className="Item">
            <h5>{title}</h5>
            <h6>{problem}</h6>
            <p>{text}</p>
            <nav>
                <NavLink to={`/Diagnostics/Test/${link}`}>
                    <button className="btnY">Почати діагностику</button>
                </NavLink>
            </nav>
        </div>
    );
};

export default Item;

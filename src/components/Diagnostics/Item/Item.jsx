import React, { useEffect, useState } from "react";
import "./Item.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRes } from "./../TestsPage/Test/testReducer";

const Item = ({ index, title, problem, text, link }) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    useEffect(() => {
        setTimeout(() => setActive(true), index * 500);
    }, []);
    return (
        <div className={active ? "Item active" : "Item"}>
            <h5>{title}</h5>
            <h6>{problem}</h6>
            <p>{text}</p>
            <NavLink
                className="btnY "
                onClick={() => dispatch(updateRes())}
                to={`/Diagnostics/Test/${link}`}
            >
                Почати діагностику
            </NavLink>
        </div>
    );
};

export default Item;

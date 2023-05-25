import React from "react";
import "./Service.scss";
import { NavLink } from "react-router-dom";

const Service = ({ title, text, img }) => {
    return (
        <div className="service">
            <img
                src={img}
                alt="viniko вініко автосервіс електрика стартера генератора"
            />
            <div className="service__body">
                <h5>{title}</h5>
                <p>{text}</p>
                <NavLink className="btn btn-warning rounded-pill" to="/Сontact">
                    Наше розташування
                </NavLink>
            </div>
        </div>
    );
};

export default Service;

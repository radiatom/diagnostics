import React, { useEffect, useState } from "react";
import "./Service.scss";
import { NavLink } from "react-router-dom";

const Service = ({ title, text, img,id }) => {
    const [active,setActive]=useState(false)
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []); //слідкувати за скролом
    const scrollHandler = (e) => {
        const size = 1800 - window.innerHeight;
        if (size < e.target.documentElement.scrollTop) {
            setActive(true);
        }else{setActive(false)}
    }; //реакція на скрол

    //e.target.documentElement.scrollHeight Висота всього блоку в якому відслідковуємо скрол
    //e.target.documentElement.scrollTop значення на якій висоті знаходиться скролл 0=в самому верху
    //window.innerHeight висота екрану на пристрої який відкрив цю сторніку
    return (
        <div className={active?`service _active service_${id}  `:`service service_${id}`}>
            <img
                src={img}
                alt="viniko вініко автосервіс електрика стартера генератора"
            />
            <div className="service__body">
                <h5>{title}</h5>
                <p>{text}</p>
                <NavLink className="btnY service__btn" to="/Home/contact">
                    Наше розташування
                </NavLink>
            </div>
        </div>
    );
};

export default Service;

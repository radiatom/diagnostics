import React, { useEffect, useState } from "react";
import "./Item.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRes } from "./../TestsPage/Test/testReducer";

const Item = ({ index, title, problem, text, link }) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const scrollHandler = (e) => {
        const size =document.getElementById('item'+index).getBoundingClientRect().top-window.innerHeight
        if (size <= 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    }; //реакція на скрол
    useEffect(() => {
        const size =document.getElementById('item'+index).getBoundingClientRect().top-window.innerHeight
        if (size <= 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, []);
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []); //слідкувати за скролом
    //getBoundingClientRect().top відстань від елемента до верхньої частини екрана 
    //e.target.documentElement.scrollHeight Висота всього блоку в якому відслідковуємо скрол
    //e.target.documentElement.scrollTop значення на якій висоті знаходиться скролл 0=в самому верху
    //window.innerHeight висота екрану на пристрої який відкрив цю сторніку
    return (
        <div className={active ? "Item active" : "Item"} id={"item"+index}>
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

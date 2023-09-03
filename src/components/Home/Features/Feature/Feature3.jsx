import React, { useEffect, useRef, useState } from "react";
import "./Feature.scss";
import img from "./../../../../img/icons/fea1.webp";

const Feature3 = () => {
    const feature3Ref = useRef(null);
    const [active, setActive] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []); //слідкувати за скролом
    const scrollHandler = (e) => {
        const size = feature3Ref.current.getBoundingClientRect().top - window.innerHeight;
        if (size <= 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    }; //реакція на скрол
    //getBoundingClientRect().top відстань від елемента до верхньої частини екрана
    //e.target.documentElement.scrollHeight Висота всього блоку в якому відслідковуємо скрол
    //e.target.documentElement.scrollTop значення на якій висоті знаходиться скролл 0=в самому верху
    //window.innerHeight висота екрану на пристрої який відкрив цю сторніку
    return (
        <div className={active ? "feature feature_active" : "feature"} ref={feature3Ref}>
            <img className="img3" src={img} alt="" />
            <h3 tabIndex="0">Гарантія</h3>
            <p>
                Даємо гарантію <span>на роботу та комплектуючі</span> 6 місяців.
            </p>
        </div>
    );
};

export default Feature3;

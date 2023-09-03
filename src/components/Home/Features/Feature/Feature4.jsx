import React, { useEffect, useRef, useState } from "react";
import "./Feature.scss";
import img from "./../../../../img/icons/handshake.png";

const Feature4 = () => {
    const feature4Ref = useRef(null);
    const [active, setActive] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []); //слідкувати за скролом
    const scrollHandler = (e) => {
        const size = feature4Ref.current.getBoundingClientRect().top - window.innerHeight;
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
        <div className={active ? "feature feature_active" : "feature"} ref={feature4Ref}>
            <img className="img4" src={img} alt="handshake" />
            <h3 tabIndex="0">Ми чесні та відкриті</h3>
            <p>
                Ми чесні і відкриті з кожним клієнтом та націлені на довірчі, тривалі відносини, тому ремонтуємо і міняємо тільки
                те, що дійсно потрібно Вам.
            </p>
        </div>
    );
};

export default Feature4;

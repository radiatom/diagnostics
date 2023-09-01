import React, { useEffect, useState } from "react";
import "./Features.scss";
import img1 from "./../../../img/icons/fea1.webp";
import img2 from "./../../../img/icons/fea2.webp";
import img3 from "./../../../img/icons/fea3.webp";

const Features = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []); //слідкувати за скролом
    const scrollHandler = (e) => {
        const size = 1200 - window.innerHeight;
        if (size < e.target.documentElement.scrollTop) {
            setActive(true);
        } else {
            setActive(false);
        }
    }; //реакція на скрол

    //e.target.documentElement.scrollHeight Висота всього блоку в якому відслідковуємо скрол
    //e.target.documentElement.scrollTop значення на якій висоті знаходиться скролл 0=в самому верху
    //window.innerHeight висота екрану на пристрої який відкрив цю сторніку
    return (
        <div className="features">
            <h2 className="features__title title" tabIndex="0">
                Чому обирають нас?
            </h2>
            <div className="features__row">
                <div className={active ? "Card _active" : "Card"}>
                    <img className="img1" src={img3} alt="" />
                    <h3 tabIndex="0">Великий досвід</h3>
                    <p>
                        Фірма <span>ВІНІКО працює</span> з 2009 року.
                    </p>
                </div>
                <div className={active ? "Card _active" : "Card"}>
                    <img className="img2" src={img2} alt="" />
                    <h3 tabIndex="0">Якість та ефективність</h3>
                    <p>
                        Ми використовуєм тільки <span>якісні компоненти</span>{" "}
                        брендів KOYO, ZM, ZEN, IKA, MOBILETRON, оригінальні
                        бренди BOSCH, DELCO, DENSO, INA, VALEO.
                    </p>
                </div>
                <div className={active ? "Card _active" : "Card"}>
                    <img className="img3" src={img1} alt="" />
                    <h3 tabIndex="0">Гарантія</h3>
                    <p>
                        Даємо гарантію <span>на роботу та комплектуючі</span> 6
                        місяців.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;

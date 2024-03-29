import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import Slider from "./Slider/Slider";

const Contact = () => {
    const contactRef = useRef(null);
    const [active, setActive] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []); //слідкувати за скролом
    const scrollHandler = (e) => {
        const size = contactRef.current.getBoundingClientRect().top - window.innerHeight;
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
        <div className="contact" >
            <h2 className="contact__title title" tabIndex="0">
                Контактна інформація
            </h2>
            <div className="contact__body">
                <iframe
                    title="0"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1500.6939039065142!2d25.39168702867508!3d50.74375348805554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47259b394f792cd9%3A0x636c590930856bef!2z0JLRltC90ZbQutC-ICwg0KHQotCeICwg0YDQtdC80L7QvdGCINGB0YLQsNGA0YLQtdGA0LAg0ZYg0LPQtdC90LXRgNCw0YLQvtGA0LAgLCDQv9C10YDQtdCy0ZbRgNC60LAg0LDQutGD0LzRg9C70Y_RgtC-0YDQsCwg0LXQu9C10LrRgtGA0LjQutCwINC_0YDQuNGH0LXQv9CwINGWINCw0LLRgtC-!5e1!3m2!1suk!2sua!4v1686318682955!5m2!1suk!2sua"
                    className="contact__map"
                    loading="lazy"
                ></iframe>
                <div className="contact__info" ref={contactRef}>
                    <ul className={active ? "textInfo textInfo_active textInfo_1" : "textInfo"}>
                        <b>Графік роботи:</b>
                        <li>пн-пт: 09:30-18:00</li>
                        <li>сб-нд: вихідний</li>
                        <li>обідня перерва: 13:00-14:00</li>
                    </ul>
                    <p className={active ? "textInfo textInfo_active textInfo_2" : "textInfo"}>
                        <a href="tel:0979343392">+38 (097) 93 43 392</a>
                    </p>
                    <p className={active ? "textInfo textInfo_active textInfo_3" : "textInfo"}>
                        Територіально м.Луцьк,<b> біля заводу ModernExpo</b>, точна адреса: <b>с. Струмівка вул. Рівненська 8.</b>
                    </p>
                    <p className={active ? "textInfo textInfo_active textInfo_4" : "textInfo"}>
                        Email: <a href="mailto:viniko@meta.ua">viniko@meta.ua</a>
                    </p>
                    <p className={active ? "textInfo textInfo_active textInfo_5" : "textInfo"}>
                        Support: <a href="mailto:viniko@meta.ua">viniko@meta.ua</a>
                    </p>
                    <p className={active ? "textInfo textInfo_active textInfo_6" : "textInfo"}>
                        Support telegram: <a href="https://t.me/Radiatom">@Radiatom</a>
                    </p>
                </div>
            </div>
            <Slider />
        </div>
    );
};
export default Contact;

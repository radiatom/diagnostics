import React, { useEffect, useState } from "react";
import "./Contact.scss";
import Slider from "./Slider/Slider";
import { useSelector } from "react-redux";
import { isMobile } from "../../../selectors/selectors";

const Contact = () => {
    const isMobileDevice = useSelector(isMobile); //сторінка відкрита на мобільному пристрої?
    const [active, setActive] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, [isMobileDevice]); //слідкувати за скролом глобального вікна
    const scrollHandler = (e) => {
        const size = () => {
            return isMobileDevice
                ? 4500 - window.innerHeight //якщо це мобільний пристрій 4500
                : 2800 - window.innerHeight; //якщо це пк
        };
        if (size() < e.target.documentElement.scrollTop) {
            setActive(true);
        } else {
            setActive(false);
        }
    }; //реакція на скрол


    //e.target.documentElement.scrollHeight Висота всього блоку в якому відслідковуємо скрол
    //e.target.documentElement.scrollTop значення на якій висоті знаходиться скролл 0=в самому верху
    //window.innerHeight висота екрану на пристрої який відкрив цю сторніку
    return (
        <div className="contact">
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
                <div className="contact__info">
                    <p
                        className={
                            active ? "text _active text_1" : "text text_1"
                        }
                    >
                        <a href="tel:0979343392">+38 (097) 93 43 392</a>
                    </p>
                    <p
                        className={
                            active ? "text _active text_2" : "text text_1"
                        }
                    >
                        Територіально м.Луцьк,<b> біля заводу ModernExpo</b>,
                        точна адреса: <b>с. Струмівка вул. Рівненська 8.</b>
                    </p>
                    <p
                        className={
                            active ? "text _active text_3" : "text text_1"
                        }
                    >
                        Email:{" "}
                        <a href="mailto:viniko@meta.ua">viniko@meta.ua</a>
                    </p>
                    <p
                        className={
                            active ? "text _active text_4" : "text text_1"
                        }
                    >
                        Support:{" "}
                        <a href="mailto:viniko@meta.ua">viniko@meta.ua</a>
                    </p>
                    <p
                        className={
                            active ? "text _active text_5" : "text text_1"
                        }
                    >
                        Support telegram:{" "}
                        <a href="https://t.me/Radiatom">@Radiatom</a>
                    </p>
                </div>
            </div>
            <Slider />
        </div>
    );
};
export default Contact;

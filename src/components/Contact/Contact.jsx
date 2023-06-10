import React, { useEffect } from "react";
import "./Contact.scss";
import RoadFoto from "./RoadFoto/RoadFoto";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="container">
            <div className="contact">
                <h2 className="contact__title title">Контактна інформація</h2>
                <div className="contact__body">
                    <iframe
                        title="0"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1500.6939039065142!2d25.39168702867508!3d50.74375348805554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47259b394f792cd9%3A0x636c590930856bef!2z0JLRltC90ZbQutC-ICwg0KHQotCeICwg0YDQtdC80L7QvdGCINGB0YLQsNGA0YLQtdGA0LAg0ZYg0LPQtdC90LXRgNCw0YLQvtGA0LAgLCDQv9C10YDQtdCy0ZbRgNC60LAg0LDQutGD0LzRg9C70Y_RgtC-0YDQsCwg0LXQu9C10LrRgtGA0LjQutCwINC_0YDQuNGH0LXQv9CwINGWINCw0LLRgtC-!5e1!3m2!1suk!2sua!4v1686318682955!5m2!1suk!2sua"
                        className="contact__map"
                        loading="lazy"
                    ></iframe>
                    <div className="contact__info">
                        <p className="text">
                            <a href="tel:0979343392">+38 (097) 93 43 392</a>
                        </p>
                        <p className="text">
                            Територіально м.Луцьк,<b> біля заводу ModernExpo</b>
                            , точна адреса:{" "}
                            <b>с. Струмівка вул. Рівненська 8.</b>
                        </p>
                        <p className="text">
                            Email:{" "}
                            <a href="mailto:viniko@meta.ua">viniko@meta.ua</a>
                        </p>
                        <p className="text">
                            Support:{" "}
                            <a href="mailto:viniko@meta.ua">viniko@meta.ua</a>
                        </p>
                        <p className="text">
                            Support telegram:{" "}
                            <a href="https://t.me/Radiatom">@Radiatom</a>
                        </p>
                    </div>
                </div>
            </div>
            <RoadFoto />
        </div>
    );
};

export default Contact;

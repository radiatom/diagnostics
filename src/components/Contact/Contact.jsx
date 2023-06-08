import React from "react";
import "./Contact.scss";
import RoadFoto from "./RoadFoto/RoadFoto";

const Contact = () => {
    return (
        <div className="container">
            <div className="contact">
                <h2 className="contact__title title">Контактна інформація</h2>
                <div className="contact__body">
                    <iframe
                        title="0"
                        className="contact__map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6003.000204132295!2d25.390563008148185!3d50.7420016240818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47259b394f792cd9%3A0x636c590930856bef!2sViniko%2C%20Sto%2C%20Remont%20Startera%20I%20Heneratora%2C%20Perevirka%20Akumulyatora%2C%20Elektryka%20Prychepa%20I%20Avto!5e1!3m2!1sen!2sua!4v1680589393424!5m2!1sen!2sua"
                        loading="lazy"
                    ></iframe>
                    <div className="contact__info">
                        <p className="text"><a href="tel:0979343392">+38 (097) 93 43 392</a></p>
                        <p className="text">
                            Територіально м.Луцьк,<b> біля заводу ModernExpo</b>, точна
                            адреса: <b>с. Струмівка вул. Рівненська 8.</b>
                        </p>
                        <p className="text">Email: <a href="mailto:viniko@meta.ua">viniko@meta.ua</a></p>
                        <p className="text">Support: <a href="mailto:viniko@meta.ua">viniko@meta.ua</a></p>
                        <p className="text">Support telegram: <a href="https://t.me/Radiatom">@Radiatom</a></p>
                    </div>
                </div>
            </div>
            <RoadFoto />
        </div>
    );
};

export default Contact;

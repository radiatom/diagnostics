import React from "react";
import "./Features.scss";

const Features = () => {
    return (
        <div className="container">
            <div className="features">
                <h2 className="features__title title">Чому обирають нас?</h2>
                <div className="features__row">
                    <div className="Card">
                        <h3>Великий досвід</h3>
                        <p>Фірма <span>ВІНІКО працює</span> з 2009 року.</p>
                    </div>
                    <div className="Card">
                        <h3>Якість та ефективність</h3>
                        <p>
                            Ми використовуєм тільки <span>якісні компоненти</span> брендів KOYO,
                            ZM, ZEN, IKA, MOBILETRON, оригінальні бренди BOSCH,
                            DELCO, DENSO, INA, VALEO.
                        </p>
                    </div>
                    <div className="Card">
                        <h3>Гарантія</h3>
                        <p>Даємо гарантію <span>на роботу та комплектуючі</span> 6 місяців.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;

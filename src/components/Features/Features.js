import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="about-area about-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-title text-center">
              <h2 className="title fw-bold">Чому обирають нас?</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-content">
                <h4 className="items-title">Великий досвід</h4>
                <p className="text">
                  Фірма ВІНІКО працює з 2009 року.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-content">
                <h4 className="items-title">Якість та ефективність</h4>
                <p className="text">
                  Ми використовуєм тільки якісні компоненти брендів Koyo, ZM, ZEN, IKA, Mobiletron, оригінальні бренди BOSCH, DELCO, DENSO, INA, VALEO.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-content">
                <h4 className="items-title">Гарантія</h4>
                <p className="text">
                  Даємо гарантію на роботу та комплектуючі 6 місяців.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

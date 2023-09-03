import React, { useEffect, useRef, useState } from "react";
import "./Feature.scss";
import img from "./../../../../img/icons/bearing.png";

const Feature5 = () => {
    const feature5Ref = useRef(null);
    const [active, setActive] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []); //слідкувати за скролом
    const scrollHandler = (e) => {
        const size = feature5Ref.current.getBoundingClientRect().top - window.innerHeight;
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
        <div className={active ? "feature feature_active" : "feature"} ref={feature5Ref}>
            <img className="img5" src={img} alt="bearing" />
            <h3 tabIndex="0">Запчастини в наявності</h3>
            <p>
                90% запчастин є в наявності на нашому складі, тому ви не повинні довго очікувати, якщо виникне потреба замінити
                деякі додаткові деталі під час ремонту. Інші 10% становлять рідкісні запчастини або ті, що рідко виходять з ладу,
                і ми можемо їх отриамати протягом 1-2 робочих днів.
            </p>
        </div>
    );
};

export default Feature5;

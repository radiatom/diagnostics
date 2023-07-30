import React, { useState } from "react";
import "./Description.scss";

const Description = () => {
    const [openP1, setParametrP1] = useState(false);
    const [openP2, setParametrP2] = useState(false);
    const clickTitle1=()=>{
        setParametrP1(!openP1)
        setParametrP2(false)
    }
    const clickTitle2=()=>{
        setParametrP2(!openP2)
        setParametrP1(false)
    }
    
    return (
        <div className="description">
            <h3 >
                Завдяки нашій діагностиці ви будете впевнені які у вас причини
                поломки, адже ми вас проведемо по всіх етапах діагностики та
                разом виясним причину неполадок.
            </h3 >
            <div onClick={clickTitle1} className="description__question">
                <h4 > Для кого діагностика розроблена?</h4>
                <span className={openP1?"description__question_downIcon open":"description__question_downIcon"}></span>
            </div>
            <p className={openP1?"description__respon open":"description__respon"}>
                Наша розробка для людей котрі не знають технічні аспекти та
                терміни, але мають бажання розібратись з проблемою самотужки.
                Також вона підійде для спеціалістів які хочуть пересвідчетись в
                своїх здогадках, але ви мусите розуміти, що терміни спрощенні
                для розуміння задачі людям котрі не знають технічних термінів.
                Наприклад: обертання двигуна замість обертання колінчастотго
                валу і т.д. Якщо у Вас є помічник, скористайтесь його допомогою,
                так буде набагато легше та веселіше.
            </p>
            <div onClick={clickTitle2} className="description__question">
                <h4 >Як це виглядатиме?</h4>
                <span className={openP2?"description__question_downIcon open":"description__question_downIcon"}></span>
            </div>
            <p className={openP2?"description__respon open":"description__respon"}>
                Діагностика має вигляд тестів. Для розуміня яку відповідь
                потрібно дати, ми пробували максимально пояснити суть питання в
                інструкціях під ними (рекомендуємо до них заглядати). По
                закінченню діагностики Ви отримаєте результат, де буде описано,
                що варто замінити для усунення проблеми. Власні догадки, що
                вийшло з ладу відкладіть до результатів діагностики, щоб
                підтвердити чи спростуавти їх.
            </p>
        </div>
    );
};

export default Description;

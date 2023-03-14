import React from 'react';
import s from "./DiagnosticStarter.module.css"

const DiagnosticStarterHeader = () => {
      return (
            <div>
                  <div className={s.header} >
                        Завдяки нашій діагностиці ви будете впевнені які у вас причини поломки, адже ми вас проведемо по всіх етапах діагностики та разом виясним причину неполадок.
                  </div>
                  <div className={s.explanation}>
                        <h5>Для кого діагностика розроблемна?</h5>
                        <p>Наша розробка для людей котрі не знають технічні аспекти та терміни, але мають бажання розібратись з проблемою  самотужки. Також вона підійде для спеціалістів які хочуть пересвідчетись в своїх здогадках, але ви мусите розуміти, що терміни спрощенні для розуміння  задачі людям котрі не знають технічних термінів. Наприклад: обертання двигуна замість обертання колінчастотго валу.</p>
                        <h5>Як це виглядатиме?</h5>
                        <p>Діагностика має вигляд тестів та інструкцій в яких описано як правильно дати відповідь. По закінченню діагностики ви отримаєте реультат, де буде описано, що варто замінити для усунення проблеми. Для розуміня яку відповідь потрібно дати, ми пробували максимально пояснити суть питання в інструкціях під ними (рекомендуємо до них заглядати). Власні догадки, що вийшло з ладу відкладіть до результатів діагностики, щоб підтвердити чи спростуавти їх.</p>
                        <h5>Діагностика проводиться коли агрегат встановлений на автомобілі, і проблема постійна, або зробити все щоб вона виявила себе та лише тоді починати діагностику.</h5>
                        <p>Діагностику можна починати навіть якщо агрегат вже демонтований, але результат буде не обєктивним.  </p>
                        <p>Виберіть діагностику відштовхуючись від того <span className='text-muted2'>як проблема себе проявляє</span>.</p>
                  </div>
            </div>
      );
}

export default DiagnosticStarterHeader;
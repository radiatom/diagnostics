import React from 'react';
import s from "./Diagnostics.module.css"
import DiagnosticStarter1 from './DiagnosticStarter/AllDiagnosticStarter/DiagnosticStarter1';
import DiagnosticStarter2 from './DiagnosticStarter/AllDiagnosticStarter/DiagnosticStarter2';
import DiagnosticStarter3 from './DiagnosticStarter/AllDiagnosticStarter/DiagnosticStarter3';
import DiagnosticStarter4 from './DiagnosticStarter/AllDiagnosticStarter/DiagnosticStarter4';
import DiagnosticStarter5 from './DiagnosticStarter/AllDiagnosticStarter/DiagnosticStarter5';
import DiagnosticAltenator1 from './DiagnosticAltenator/AllDiagnosticAltenator/DiagnosticAltenator1';
import DiagnosticAltenator2 from './DiagnosticAltenator/AllDiagnosticAltenator/DiagnosticAltenator2';
import DiagnosticAltenator3 from './DiagnosticAltenator/AllDiagnosticAltenator/DiagnosticAltenator3';
import DiagnosticAltenator4 from './DiagnosticAltenator/AllDiagnosticAltenator/DiagnosticAltenator4';
import AllDiagnosticBattery from "./DiagnosticBattery/AllDiagnosticBattery/AllDiagnosticBattery"

const Diagnostics = () => {
      return (
            <div className={s.Diagnostics}>
                  <div className={s.header} >
                        Завдяки нашій діагностиці ви будете впевнені які у вас причини поломки, адже ми вас проведемо по всіх етапах діагностики та разом виясним причину неполадок.
                  </div>
                  <div className={s.explanation}>
                        <h5>Для кого діагностика розроблемна?</h5>
                        <p>Наша розробка для людей котрі не знають технічні аспекти та терміни, але мають бажання розібратись з проблемою  самотужки (з помічником буде набагато легше та веселіше). Також вона підійде для спеціалістів які хочуть пересвідчетись в своїх здогадках, але ви мусите розуміти, що терміни спрощенні для розуміння  задачі людям котрі не знають технічних термінів. Наприклад: обертання двигуна замість обертання колінчастотго валу і т.д.</p>
                        <h5>Як це виглядатиме?</h5>
                        <p>Діагностика має вигляд тестів. Для розуміня яку відповідь потрібно дати, ми пробували максимально пояснити суть питання в інструкціях під ними (рекомендуємо до них заглядати). По закінченню діагностики Ви отримаєте реультат, де буде описано, що варто замінити для усунення проблеми. Власні догадки, що вийшло з ладу відкладіть до результатів діагностики, щоб підтвердити чи спростуавти їх.</p>
                        <h5>Діагностика проводиться коли агрегат встановлений на автомобілі, і проблема постійна, або зробіть все щоб вона виявила себе і лише тоді починати тест.</h5>
                        <p>Діагностику можна починати навіть якщо агрегат вже демонтований, але результат буде не обєктивним.  </p>
                        <p>Виберіть діагностику відштовхуючись від того <span className='text-muted2'>як проблема себе проявляє</span>.</p>
                  </div>

                  <div >
                        <div className="container my-5">
                              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 text-center">
                                    <DiagnosticStarter1 />
                                    <DiagnosticStarter2 />
                                    <DiagnosticStarter3 />
                                    <DiagnosticStarter4 />
                                    <DiagnosticStarter5 />
                                    <DiagnosticAltenator1 />
                                    <DiagnosticAltenator2 />
                                    <DiagnosticAltenator3 />
                                    <DiagnosticAltenator4 />
                                    <AllDiagnosticBattery />
                              </div>
                        </div>
                  </div>
            </div>



      );
}

export default Diagnostics;

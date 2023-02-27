import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Diagnostics.module.css"

const Diagnostics = (props) => {
      return (
            <div>
                  <div className={s.header} >
                        Завдяки нашій діагностиці ви будете впевнені які у вас причини поломки, адже ми вас проведемо по всіх етапах діагностики та разом виясним причину неполадок.
                  </div>
                  <p>Діагностика має вигляд тестів, даючи відповіді на них, ви отримаєте реультат діагностики, де буде написано що варто замінити для усунення проблеми. Для розуміня яку відповідь потрібно дати, ми пробували максимально пояснити суть питання в інструкціях під ними (рекомендуємо до них заглядати). Власні догадки, що вийшло з ладу відкладіть до результатів діагностики, щоб підтвердити чи спростуавти їх.</p>
                  <p>Виберіть діагностику відштовхуючись від того <span className='text-muted2'>як проблема себе проявляє</span>.</p>
                  <div className="container my-5">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                              <div className={`card  ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика статера</h5>
                                          <h6 className="card-subtitle mb-2 text-muted2">Шум, жужання, скрегіт, буксування бендикса стартера</h6>
                                          <p className="card-text">Щоб вияснити через яку деталь можуть виникати такі звуки, пропонуємо вам самотужки зробити діагностику. Вона починається коли стартер ще встановлений на двигуні. Діагностику можна починати навіть якщо він вже демонтований, але результат буде не обєктивним.  </p>
                                          <p>Ви виясните: як буксує бендикс, і чи є підозра, що він не справний; чи пошкоджений  вінець; в якому стані  втулки, підшипники, редуктор, якір, статор стартера. </p>

                                          <nav>
                                                <NavLink to="/Diagnostics/Starter/Bobbery/1"><button onClick={() => props.getTestData(1)} className="btn btn-warning">Почати діагностику</button></NavLink>
                                          </nav>
                                    </div>
                              </div>
                              <div className={`card ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика статера</h5>
                                          <h6 className="card-subtitle mb-2 text-muted2">Стартер не працює</h6>
                                          <p className="card-text">Діагностика в розробці</p>
                                          <p className="card-text"></p>
                                          <p className="card-text"></p>
                                          <nav>
                                                <button onClick={() => props.getTestData(1.1)} className="btn btn-secondary">Почати діагностику</button>
                                                {/* <NavLink to="/Diagnostics/Starter/Bobbery/"><button onClick={() => props.getTestData(1.1)} className="btn btn-warning">Почати діагностику</button></NavLink> */}
                                          </nav>
                                    </div>
                              </div>
                              <div className={`card ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика статера</h5>
                                          <h6 className="card-subtitle mb-2 text-muted2">Стартер клацає</h6>
                                          <p className="card-text">Діагностика в розробці</p>
                                          <p className="card-text"></p>
                                          <p className="card-text"></p>
                                          <nav>
                                                <button onClick={() => props.getTestData(1.1)} className="btn btn-secondary">Почати діагностику</button>
                                                {/* <NavLink to="/Diagnostics/Starter/Bobbery/"><button onClick={() => props.getTestData(1.1)} className="btn btn-warning">Почати діагностику</button></NavLink> */}
                                          </nav>
                                    </div>
                              </div>
                              <div className={`card ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика статера</h5>
                                          <h6 className="card-subtitle mb-2 text-muted2">Стартер повільно обертає двигун</h6>
                                          <p className="card-text">Діагностика в розробці</p>
                                          <p className="card-text"></p>
                                          <p className="card-text"></p>
                                          <nav>
                                                <button onClick={() => props.getTestData(1.1)} className="btn btn-secondary">Почати діагностику</button>
                                                {/* <NavLink to="/Diagnostics/Starter/Bobbery/"><button onClick={() => props.getTestData(1.1)} className="btn btn-warning">Почати діагностику</button></NavLink> */}
                                          </nav>
                                    </div>
                              </div>
                              <div className={`card ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика статера</h5>
                                          <h6 className="card-subtitle mb-2 text-muted2">Час від часу стартер заклинює</h6>
                                          <p className="card-text">Діагностика в розробці</p>
                                          <p className="card-text"></p>
                                          <p className="card-text"></p>
                                          <nav>
                                                <button onClick={() => props.getTestData(1.1)} className="btn btn-secondary">Почати діагностику</button>
                                                {/* <NavLink to="/Diagnostics/Starter/Bobbery/"><button onClick={() => props.getTestData(1.1)} className="btn btn-warning">Почати діагностику</button></NavLink> */}
                                          </nav>
                                    </div>
                              </div>
                              <div className={`card ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика генератора</h5>
                                          <h6 className="card-subtitle mb-2 text-muted2">Світиться помилка (значок акумулятора)</h6>
                                          <p className="card-text">Діагностика в розробці</p>
                                          <p className="card-text"></p>
                                          <p className="card-text"></p>
                                          <nav>
                                                <button onClick={() => props.getTestData(1.1)} className="btn btn-secondary">Почати діагностику</button>
                                                {/* <NavLink to="/Diagnostics/Starter/Bobbery/"><button onClick={() => props.getTestData(1.1)} className="btn btn-warning">Почати діагностику</button></NavLink> */}
                                          </nav>
                                    </div>
                              </div>
                              <div className={`card ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика генератора</h5>
                                          <h6 className="card-subtitle mb-2 text-muted2">Шум генератора</h6>
                                          <p className="card-text">Діагностика в розробці</p>
                                          <p className="card-text"></p>
                                          <p className="card-text"></p>
                                          <nav>
                                                <button onClick={() => props.getTestData(1.1)} className="btn btn-secondary">Почати діагностику</button>
                                                {/* <NavLink to="/Diagnostics/Starter/Bobbery/"><button onClick={() => props.getTestData(1.1)} className="btn btn-warning">Почати діагностику</button></NavLink> */}
                                          </nav>
                                    </div>
                              </div>
                              <div className={`card ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика генератора</h5>
                                          <h6 className="card-subtitle mb-2 text-muted2">Малий заряд на акумуляторі (якщо він більший 15в причини дві - несправний регулятор генератора, або нема всіх сигналів на штеке рі генератора)</h6>
                                          <p className="card-text">Діагностика в розробці</p>
                                          <p className="card-text"></p>
                                          <p className="card-text"></p>
                                          <nav>
                                                <button onClick={() => props.getTestData(1.1)} className="btn btn-secondary">Почати діагностику</button>
                                                {/* <NavLink to="/Diagnostics/Starter/Bobbery/"><button onClick={() => props.getTestData(1.1)} className="btn btn-warning">Почати діагностику</button></NavLink> */}
                                          </nav>
                                    </div>
                              </div>
                              <div className={`card ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика акумулятора</h5>
                                          <h6 className="card-subtitle mb-2 text-muted2">текст</h6>
                                          <p className="card-text">Діагностика в розробці</p>
                                          <p className="card-text"></p>
                                          <p className="card-text"></p>
                                          <nav>
                                                <button onClick={() => props.getTestData(1.1)} className="btn btn-secondary">Почати діагностику</button>
                                                {/* <NavLink to="/Diagnostics/Starter/Bobbery/"><button onClick={() => props.getTestData(1.1)} className="btn btn-warning">Почати діагностику</button></NavLink> */}
                                          </nav>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>



      );
}

export default Diagnostics;

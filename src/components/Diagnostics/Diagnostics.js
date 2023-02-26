import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Diagnostics.module.css"

const Diagnostics = (props) => {
      return (
            <div>
                  <div className={s.header} >
                        Завдяки нашій діагностиці ви будете впевнені які у вас причини поломки, адже ми вас проведемо по всіх етапах діагностики та разом виясним причину неполадок.
                  </div>
                  <div className="container my-5">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                              <div className={`card  ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика статера</h5>
                                          <h6 className="card-subtitle mb-2 text-muted">Шум, жужання, скрегіт, буксування стартера</h6>
                                          <p className="card-text">Щоб вияснити через яку деталь можуть виникати такі звуки, пропонуємо вам самотужки зробити діагностику. </p>
                                          <p>Ви виясните: як буксує бендикс, і чи є підозра, що він не справний; чи пошкоджений  вінець; в якому стані  втулки, підшипники, редуктор, якір стартера. </p>

                                          <nav>
                                                <NavLink to="/Diagnostics/Starter/Bobbery/1"><button onClick={() => props.getTestData(1)} className="btn btn-warning">Почати діагностику</button></NavLink>
                                          </nav>
                                    </div>
                              </div>
                              <div className={`card ${s.card}`} >
                                    <div className="card-body">
                                          <h5 className="card-title">Діагностика статера</h5>
                                          <h6 className="card-subtitle mb-2 text-muted">Стартер не працює</h6>
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
                                          <h6 className="card-subtitle mb-2 text-muted">Стартер клацає</h6>
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
                                          <h6 className="card-subtitle mb-2 text-muted">Стартер повільно обертає двигун</h6>
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
                                          <h6 className="card-subtitle mb-2 text-muted">Час від часу стартер заклинює</h6>
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
                                          <h6 className="card-subtitle mb-2 text-muted">Світиться помилка (значок акумулятора)</h6>
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
                                          <h6 className="card-subtitle mb-2 text-muted">Шум генератора</h6>
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
                                          <h6 className="card-subtitle mb-2 text-muted">Малий заряд на акумуляторі (якщо він більший 15в причина одна - несправний регулятор генератора)</h6>
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
                                          <h6 className="card-subtitle mb-2 text-muted">текст</h6>
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

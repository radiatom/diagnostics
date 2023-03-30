import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./DiagnosticAltenator.module.css"

const DiagnosticAltenator3 = (props) => {
      return (
            <div className={`card m-1 ${s.card}`} >
                  <div className="card-body">
                        <h5 className="card-title">Діагностика генератора</h5>
                        <h6 className="card-subtitle mb-2 text-muted2">Мала напруга на акумуляторі, меньше 13.9 вольт (якщо він більший 15в причини дві - несправний регулятор генератора, або нема всіх сигналів на штекері генератора)</h6>
                        <p className="card-text">Перевірка проводки та генератора.</p>
                        <p className="card-text"></p>
                        <p className="card-text"></p>
                        <nav>
                              <NavLink to="/Diagnostics/Test/98"><button className={`btn btn-warning ${s.button}`}>Почати діагностику</button></NavLink>
                        </nav>
                  </div>
            </div>
      );
}

export default DiagnosticAltenator3;
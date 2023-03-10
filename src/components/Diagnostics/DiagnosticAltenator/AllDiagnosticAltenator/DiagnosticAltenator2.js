import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./DiagnosticAltenator.module.css"

const DiagnosticAltenator2 = (props) => {
      return (
            <div className={`card m-1 ${s.card}`} >
                  <div className="card-body">
                        <h5 className="card-title">Діагностика генератора</h5>
                        <h6 className="card-subtitle mb-2 text-muted2">Шум генератора</h6>
                        <p className="card-text">Перевірка підшипників та шківа генератора.</p>
                        <p className="card-text"></p>
                        <p className="card-text"></p>
                        <nav>
                              <NavLink to="/Diagnostics/Test/108"><button className={`btn btn-warning ${s.button}`}>Почати діагностику</button></NavLink>
                        </nav>
                  </div>
            </div>
      );
}

export default DiagnosticAltenator2;
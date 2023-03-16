import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./DiagnosticAltenator.module.css"

const DiagnosticAltenator4 = () => {
    return (
        <div className={`card m-1 ${s.card}`} >
                  <div className="card-body">
                        <h5 className="card-title">Діагностика генератора</h5>
                        <h6 className="card-subtitle mb-2 text-muted2">Розбирання та дефекутвання</h6>
                        <p className="card-text">Щоб зробити повноцінне дефектування потрібне спеціальне обладнання. Без нього можливо перевірити лише: підшипники, шків, колектор, щітки, обрив катушки якоря, явні сліди згорівшого діодного моста та пошкодження статора.</p>
                        <nav>
                              <NavLink to="/Diagnostics/Test/128"><button className={`btn btn-warning ${s.button}`}>Почати діагностику</button></NavLink>
                        </nav>
                  </div>
            </div>
    );
}

export default DiagnosticAltenator4;

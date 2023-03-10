import React from 'react';
// import { NavLink } from 'react-router-dom';
import s from "./DiagnosticAltenator.module.css"

const DiagnosticAltenator1 = (props) => {
      return (
            <div className={`card m-1 ${s.card}`} >
                  <div className="card-body">
                        <h5 className="card-title">Діагностика генератора</h5>
                        <h6 className="card-subtitle mb-2 text-muted2">Світиться помилка (значок акумулятора), напруга на акумуляторі меньше 12.6 вольт.</h6>
                        <p className="card-text">Перевірка проводки та генератора.</p>
                        <p className="card-text"></p>
                        <p className="card-text"></p>
                        <nav>
                              <button onClick={() => props.getTestData(1.1)} className="btn btn-secondary">Почати діагностику</button>
                              {/* <NavLink to="/Diagnostics/Starter/Bobbery/"><button onClick={() => props.getTestData(1.1)} className="btn btn-warning">Почати діагностику</button></NavLink> */}
                        </nav>
                  </div>
            </div>
      );
}

export default DiagnosticAltenator1;
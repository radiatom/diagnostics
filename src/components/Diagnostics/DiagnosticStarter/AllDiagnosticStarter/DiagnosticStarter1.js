import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./DiagnosticStarter.module.css"

const DiagnosticStarter1 = () => {
      return (
            <div className={`card m-1 ${s.card}`}  >
                  <div className="card-body ">
                        <h5 className="card-title">Діагностика статера</h5>
                        <h6 className="card-subtitle mb-2 text-muted2">Шум, жужання, скрегіт, буксування бендикса стартера</h6>
                        <p>Первірка бендикса, чи є підозра, що він не справний; чи пошкоджений  вінець; в якому стані  втулки, підшипники, редуктор, якір, статор стартера. </p>
                        <nav>
                              <NavLink to="/Diagnostics/Test/1"><button className={`btn btn-warning ${s.button}`} >Почати діагностику</button></NavLink>
                        </nav>
                  </div>
            </div>
      );
}

export default DiagnosticStarter1;


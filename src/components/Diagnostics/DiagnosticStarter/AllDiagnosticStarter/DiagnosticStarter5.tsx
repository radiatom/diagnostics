import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./DiagnosticStarter.module.css"

const DiagnosticStarter5 = (props) => {
      return (
            <div className={`card m-1 ${s.card}`} >
                  <div className="card-body">
                        <h5 className="card-title">Діагностика статера</h5>
                        <h6 className="card-subtitle mb-2 text-muted2">Розбирання та дефектування стартера.</h6>
                        <p className="card-text">Перевірка стану щіток, якоря, втулок, підшипників, бендикса, статора, втягуючого.</p>
                        <p className="card-text"></p>
                        <p className="card-text"></p>
                        <nav>
                              <NavLink to="/Diagnostics/Test/166"><button className={`btn btn-warning ${s.button}`}>Почати діагностику</button></NavLink>
                        </nav>
                  </div>
            </div>
      );
}

export default DiagnosticStarter5;


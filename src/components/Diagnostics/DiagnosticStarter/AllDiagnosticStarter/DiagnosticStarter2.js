import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./DiagnosticStarter.module.css"

const DiagnosticStarter2 = (props) => {
      return (
            <div className={`card m-1 ${s.card}`} >
                  <div className="card-body">
                        <h5 className="card-title">Діагностика статера</h5>
                        <h6 className="card-subtitle mb-2 text-muted2">Стартер не працює, мовчить.</h6>
                        <p className="card-text">Первірка проводки та справності стартера.</p>
                        <p className="card-text"></p>
                        <p className="card-text"></p>
                        <nav>
                              <NavLink to="/Diagnostics/Test/157"><button  className={`btn btn-warning ${s.button}`}>Почати діагностику</button></NavLink>
                        </nav>
                  </div>
            </div>
      );
}

export default DiagnosticStarter2;


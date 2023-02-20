import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Diagnostics.module.css"

const Diagnostics = (props) => {
      return (
            <div>
                  <div className={`card ${s.card}`} >
                        <div className="card-body">
                              <h5 className="card-title">Діагностика статера</h5>
                              <h6 className="card-subtitle mb-2 text-muted">Шум, жужання, скрегіт, буксування стартера</h6>
                              <p className="card-text">Щоб вияснити через яку деталь можуть виникати такі звуки, пропонуємо вам зробити власну діагностику стартера, з допомогою цього тесту.</p>
                              <nav>
                              <NavLink to="/Diagnostics/Test"><button onClick={()=>props.getTestData(1.1)} className="btn btn-warning">Почати діагностику</button></NavLink>
                              </nav>
                        </div>
                  </div>
            </div>
      );
}

export default Diagnostics;

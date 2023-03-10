import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./AllDiagnosticBattery.module.css"

const AllDiagnosticBattery = (props) => {
      return (
            <div className='container'>
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 text-center  ">
                        <div className={`card  m-1 ${s.card}`} >
                              <div className="card-body">
                                    <h5 className="card-title">Діагностика акумулятора</h5>
                                    <h6 className="card-subtitle mb-2 text-muted2">Акумулятор швидко розряджається, повільно провертає двигун.</h6>
                                    <p className="card-text">Перевірка стану АКБ проводиться на автомобілі</p>
                                    <p className="card-text"></p>
                                    <p className="card-text"></p>
                                    <nav>
                                          <NavLink to="/Diagnostics/Test/8.3"><button className={`btn btn-warning ${s.button}`}>Почати діагностику</button></NavLink>
                                    </nav>
                              </div>
                        </div>
                  </div>
            </div>

      );
}

export default AllDiagnosticBattery;
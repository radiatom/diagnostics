// import img1 from "./../../../../img/stDiaServ.jpg"
import React from 'react';
import { NavLink } from 'react-router-dom';
const img1 = `${process.env.PUBLIC_URL}/img/stDiaServ.jpg`

const Service2 = () => {
      return (
            <div className="g-5 gx-5 col-sm-12 col-md-6 col-lg-4 text-center">
                  <div className="card mx-auto" >
                        <img src={img1} className="card-img-top w-100" alt="viniko вініко автосервіс діагностика стартера генератора" />
                        <div className="card-body">
                              <h5 className="card-title">Діагностика стартера</h5>
                              <p className="card-text">
                                    Виконуєм діагностику агрегата на стенді а також комплексну діагностику з дефектовкою кожної деталі.
                              </p>
                              <NavLink className="btn btn-warning rounded-pill" to="/Сontact">Наше розташування</NavLink>
                        </div>
                  </div>
            </div>
      );
}

export default Service2;

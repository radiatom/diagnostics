// import img1 from "./../../../../img/eltctr.jpg"
import { NavLink } from 'react-router-dom';
import React from 'react';
const img1 = `${process.env.PUBLIC_URL}/img/eltctr.jpg`

const Service1 = () => {
      return (
            <div className="g-5 gx-5 col-sm-12 col-md-6 col-lg-4 text-center">
                  <div className="card mx-auto" >
                        <img src={img1} className="card-img-top w-100" alt="viniko вініко автосервіс електрика стартера генератора" />
                        <div className="card-body">
                              <h5 className="card-title">Автоелектрика</h5>
                              <p className="card-text">
                                    У випадку коли проблеми з стартером чи генераторм пов`язані з електрикою, виконуєм ремонт електропроводки.
                              </p>
                              <NavLink className="btn btn-warning rounded-pill" to="/Сontact">Наше розташування</NavLink>
                        </div>
                  </div>
            </div>
      );
}

export default Service1;

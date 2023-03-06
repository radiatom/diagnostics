import img1 from "./../../../img/batChan.jpg"
import { NavLink } from 'react-router-dom';
import React from 'react';

const Service4 = () => {
      return (
            <div className="g-5 gx-5 col-sm-12 col-md-6 col-lg-4 text-center">
                  <div className="card mx-auto" >
                        <img src={img1} className="card-img-top w-100" alt="..." />
                        <div className="card-body">
                              <h5 className="card-title">Діагностика акумулятора</h5>
                              <p className="card-text">
                                    Виконуєм зарядку акумуляторної батареї автомобіля, а також перевірку стану (у випадку коли агрегат має можливість обслуговування).
                              </p>
                              <NavLink className="btn btn-warning rounded-pill" to="/Сontact">Наше розташування</NavLink>
                        </div>
                  </div>
            </div>
      );
}

export default Service4;

import img1 from "./../../../img/montage.jpg"
import React from 'react';
import { NavLink } from 'react-router-dom';


const Service1 = () => {
      return (
            <div className="g-5 gx-5 col-sm-12 col-md-6 col-lg-4 text-center">
                  <div className="card mx-auto" >
                        <img src={img1} className="card-img-top w-100" alt="..." />
                        <div className="card-body">
                              <h5 className="card-title">Демонтаж та монтаж</h5>
                              <p className="card-text">
                                    Виконуємо демонтаж та монтаж стартера чи генератора з умовою що агрегат буде діагностуватись у нас.
                              </p>
                              <NavLink className="btn btn-warning rounded-pill" to="/Сontact">Наше розташування</NavLink>
                        </div>
                  </div>
            </div>
      );
}

export default Service1;

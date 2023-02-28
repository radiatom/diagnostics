import React from 'react';
import s from './Navbar.module.css'
import logo from "./../../img/vv.png"
import { NavLink } from 'react-router-dom';


const HederBootstrap = (props) => {
      return (
            <div>
                  <nav className=" container-fluid navbar bg-dark bg-body-tertiary">
                        <div className=" container">
                              <div className=" container-xxl navbar-brand p-0 ">
                                    <span><NavLink to="/Home"><img src={logo} alt="logo" width="40" /></NavLink></span>
                                    <span className={` row row-cols-1 row-cols-md-3 row-cols-lg-3 ${s.navContact}`}>
                                          <div className="col">Автосервіс</div>
                                          <div className="col">м.Луцьк вул.Найкраща#</div>
                                          <div className="col">тел. +38 055 55 55 555</div>
                                    </span>
                              </div>
                        </div>
                  </nav>
                  <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                        <div className="container">
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                          <li className="nav-item">
                                                <NavLink className="nav-link disabled" to="/Home">Про нас</NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link disabled" to="/Services">Наші послуги</NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link" to="/Diagnostics"><h6>Діагностика <span className="badge bg-secondary">New</span></h6></NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link disabled" to="/Articles">Корисні статті</NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link disabled" to="/Gallery">Галерея</NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link" to="/Сontacts">Контакти</NavLink>
                                          </li>
                                    </ul>
                              </div>
                        </div>

                  </nav>
            </div>
      );
}

export default HederBootstrap;
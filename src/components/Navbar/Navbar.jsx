import React from 'react';
import s from './Navbar.module.css'
import logo from "./../../img/Viniko1.png"
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
      return (
            <div>
                  <nav className=" container-fluid navbar bg-dark bg-body-tertiary">
                        <div className=" container">
                              <div className=" container-xxl navbar-brand p-0 ">
                                    <span><NavLink to="/Home"><img src={logo} alt="logo viniko вініко" width="200"  /></NavLink></span>
                                    <span className={` row row-cols-1 row-cols-md-3 row-cols-lg-3 ${s.navContact}`}>
                                          <div className="col">Автосервіс</div>
                                          <div className="col">Луцьк</div>
                                          <div className="col">тел. +38 (097) 93 43 392</div>
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
                                                <NavLink className="nav-link" to="/Home">Про нас</NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link" to="/Services">Наші послуги</NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link" to="/Gallery">Галерея сервера</NavLink>
                                          </li>
                                          <li  className="nav-item dropdown">
                                                <div  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Діагностика <span className="badge bg-secondary">New</span></div>
                                                <ul onClick={()=>props.updateRes()} className="dropdown-menu">
                                                      <NavLink  className="dropdown-item" to="/DiagnosticStarter" > Стартер</NavLink>
                                                      <NavLink className="dropdown-item" to="/DiagnosticAltetnator">Генератор</NavLink>
                                                      <NavLink className="dropdown-item" to="/DiagnosticABattery">Акумулятор</NavLink>
                                                      <li><hr className="dropdown-divider" /></li>
                                                      <NavLink className="dropdown-item" to="/Diagnostics" >Всі види діагностики </NavLink>
                                                </ul>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link" to="/Blogs">Корисні статті</NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link" to="/Сontact">Контакти</NavLink>
                                          </li>
                                    </ul>
                              </div>
                        </div>

                  </nav>
            </div>
      );
}

export default Navbar;

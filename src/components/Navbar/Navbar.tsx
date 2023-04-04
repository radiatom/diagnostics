import React from 'react';
import s from './Navbar.module.css'
// import logo from "./../../img/Viniko1.png"
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateRes } from '../../reactRedux/testReducer';
import { useState } from 'react';
const logo = `${process.env.PUBLIC_URL}/img/Viniko1.png`


const Navbar = () => {
      const dispatch= useDispatch()
      let [count, setCount] = useState(false);
      return (
            <div>
                  <nav className=" container-fluid navbar bg-dark bg-body-tertiary">
                        <div className=" container">
                              <div className=" container-xxl navbar-brand p-0 ">
                                    <span><NavLink to="/Home"><img src={logo} alt="logo viniko вініко" width="200" /></NavLink></span>
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
                              <button onClick={()=>setCount(count=!count)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                    aria-controls="navbarNav"  aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className={count?"collapse navbar-collapse show":"collapse navbar-collapse"} id="navbarNav" >
                                    <ul className="navbar-nav" >
                                          <li onClick={()=>setCount(count=!count)} className="nav-item">
                                                <NavLink  className="nav-link" to="/Home">Про нас</NavLink>
                                          </li>
                                          <li onClick={()=>setCount(count=!count)} className="nav-item">
                                                <NavLink className="nav-link" to="/Services">Наші послуги</NavLink>
                                          </li>
                                          <li onClick={()=>setCount(count=!count)} className="nav-item">
                                                <NavLink className="nav-link" to="/Gallery">Галерея сервера</NavLink>
                                          </li>
                                          <li className="nav-item dropdown">
                                                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Діагностика <span className="badge bg-secondary">New</span></div>
                                                <ul onClick={() => dispatch(updateRes())} className="dropdown-menu">
                                                      <NavLink className="dropdown-item" to="/DiagnosticStarter" > Стартер</NavLink>
                                                      <NavLink className="dropdown-item" to="/DiagnosticAltetnator">Генератор</NavLink>
                                                      <NavLink className="dropdown-item" to="/DiagnosticABattery">Акумулятор</NavLink>
                                                      <li><hr className="dropdown-divider" /></li>
                                                      <NavLink className="dropdown-item" to="/Diagnostics" >Всі види діагностики </NavLink>
                                                </ul>
                                          </li>
                                          <li onClick={()=>setCount(count=!count)} className="nav-item">
                                                <NavLink className="nav-link" to="/Blogs">Корисні статті</NavLink>
                                          </li>
                                          <li onClick={()=>setCount(count=!count)} className="nav-item">
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

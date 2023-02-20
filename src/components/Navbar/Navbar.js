import React from 'react';
import s from './Navbar.module.css'
import logo from "./../../img/vv.png"
import { NavLink } from 'react-router-dom';



const HederBootstrap = (props) => {
      return (<div>

            <nav class="navbar bg-dark bg-body-tertiary">
                  <div class="container">
                        <a class="navbar-brand " href="#">
                              <NavLink className="navbar-brand p-0 " to="/Home"><img src={logo} alt="logo" width="40" /></NavLink>
                              <span className={`text-danger ${s.navbarSpan}`} >м.Найкраще </span>
                              <span className={`text-danger ${s.navbarSpan}`} > вул.Найкраща </span>
                              <span className={`text-danger ${s.navbarSpan}`} > тел. +38 055 55 55 555</span>
                        </a>
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
                                          <NavLink className="nav-link" to="/Diagnostics"><h6>Діагностика <span class="badge bg-secondary">New</span></h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                          <NavLink className="nav-link" to="/Articles">Корисні статті</NavLink>
                                    </li>
                                    <li className="nav-item">
                                          <NavLink className="nav-link" to="/Gallery">Галерея</NavLink>
                                    </li>
                                    <li className="nav-item">
                                          <NavLink className="nav-link" to="/Сontacts">Контакти</NavLink>
                                    </li>
                              </ul>
                        </div>
                  </div>
                  <nav class="navbar fixed-bottom bg-body-tertiary">
                        <div class="container-fluid">
                              <span>Автосервіс ###### надає послуги діагностики, професійного ремонту стартера, генератора у Луцьку. Заміна бендиксів, втягуючих реле, статорів, роторів, втулок, щіток, підшипників, регуляторів, діодних мостів, шківів. Продаж стартерів, генераторів. Великий вибір компонентів:статор стартера, статор генератора, бендикс стартера, підшипники до стартерів, втулки стартера, підшипники до генераторів, втягуючі реле, щітки стартера, щітки генератора, якір стартера, якір генератора, регулятор генератора, шків генератора, діодний міст генератора. У нашому асортименті стартера, генератори, компоненти брендів  Koyo, ZM, ZEN, IKA, Mobiletron, оригінальні бренди BOSCH, DELCO, DENSO, INA, VALEO.</span>
                        </div>
                  </nav>
            </nav>
      </div>
      );
}

export default HederBootstrap;

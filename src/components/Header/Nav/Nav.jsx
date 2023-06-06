import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import downIcon from "./../../../img/icons/down.webp";

const Nav = ({ active, setActive }) => {
    const [drop, setDrop] = useState(false);
    return (
        <nav className={active ? " navbar active" : "navbar"}>
            <ul>
                <li onClick={()=>setActive(!active)}>
                    <NavLink to="/Home">Про нас</NavLink>
                </li>
                <li onClick={()=>setActive(!active)}>
                    <NavLink to="/Services">Наші послуги</NavLink>
                </li>
                {/* <li onClick={()=>setActive(!active)}>
                    <NavLink to="/Gallery">Галерея сервера</NavLink>
                </li> */}
                <li>
                    <button onClick={()=>setDrop(!drop)}>
                        Діагностика <span>new</span>
                        <img src={downIcon} alt="downIcon" />
                    </button>
                    <ul
                        className={drop ? "nav-list-open" : "nav-list-closed"}
                        onMouseLeave={()=>setDrop(!drop)}
                    >
                        <li
                            onClick={() => {
                                setDrop(!drop);
                                setActive(!active)
                            }}
                        >
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics/Starter"
                            >
                                Стартер
                            </NavLink>
                        </li>
                        <li
                            onClick={() => {
                                setDrop(!drop);
                                setActive(!active)
                            }}
                        >
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics/Altenator"
                            >
                                Генератор
                            </NavLink>
                        </li>
                        <li
                            onClick={() => {
                                setDrop(!drop);
                                setActive(!active)
                            }}
                        >
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics/Battery"
                            >
                                Акумулятор
                            </NavLink>
                        </li>
                        <li
                            onClick={() => {
                                setDrop(!drop);
                                setActive(!active)
                            }}
                        >
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics/All"
                            >
                                Всі види діагностики
                            </NavLink>
                        </li>
                        <li
                            onClick={() => {
                                setDrop(!drop);
                                setActive(!active)
                            }}
                        >
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics/Test/7"
                            >
                                Результат діагностики
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li onClick={()=>setActive(!active)}>
                    <NavLink to="/Blogs">Корисні статті</NavLink>
                </li>
                <li onClick={()=>setActive(!active)}>
                    <NavLink to="/Сontact">Контакти</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

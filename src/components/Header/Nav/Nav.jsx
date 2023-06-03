import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import downIcon from './../../../img/icons/down.png'

const Nav = ({ active, clossed }) => {
    const [drop, setDrop] = useState(false);
    const dropNavList = () => {
        setDrop(!drop);
    };
    const click = () => {
        clossed();
        dropNavList();
    };
    return (
        <nav className={active ? " navbar active" : "navbar"}>
            <ul>
                <li onClick={clossed}>
                    <NavLink to="/Home">Про нас</NavLink>
                </li>
                <li onClick={clossed}>
                    <NavLink to="/Services">Наші послуги</NavLink>
                </li>
                <li onClick={clossed}>
                    <NavLink to="/Gallery">Галерея сервера</NavLink>
                </li>
                <li>
                    <button onClick={dropNavList}>
                        Діагностика <span>new</span><img src={downIcon} alt="downIcon" />
                    </button>
                    <ul
                        className={drop ? "nav-list-open" : "nav-list-closed"}
                        onMouseLeave={dropNavList}
                    >
                        <li onClick={click}>
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics/Starter"
                            >
                                Стартер
                            </NavLink>
                        </li>
                        <li onClick={click}>
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics/Altenator"
                            >
                                Генератор
                            </NavLink>
                        </li>
                        <li onClick={click}>
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics/Battery"
                            >
                                Акумулятор
                            </NavLink>
                        </li>
                        <li onClick={click}>
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics/All"
                            >
                                Всі види діагностики
                            </NavLink>
                        </li>
                        <li onClick={click}>
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics/Test/7"
                            >
                                Результат діагностики
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li onClick={clossed}>
                    <NavLink to="/Blogs">Корисні статті</NavLink>
                </li>
                <li onClick={clossed}>
                    <NavLink to="/Сontact">Контакти</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

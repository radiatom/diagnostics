import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRes } from "./../../../reactRedux/testReducer";

const Nav = () => {
    const dispatch = useDispatch();
    const [drop, setDrop] = useState(false);
    const dropNavList = () => {
        setDrop(!drop);
        dispatch(updateRes())
    };
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/Home">Про нас</NavLink>
                </li>
                <li>
                    <NavLink to="/Services">Наші послуги</NavLink>
                </li>
                <li>
                    <NavLink to="/Gallery">Галерея сервера</NavLink>
                </li>
                <li>
                    <button onClick={dropNavList}>
                        Діагностика <span>new</span>
                    </button>
                    <ul
                        className={drop ? "nav-list-open" : "nav-list-closed"}
                        onMouseLeave={dropNavList}
                    >
                        <li>
                            <NavLink
                                className="dropdown-item"
                                to="/DiagnosticStarter"
                            >
                                Стартер
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="dropdown-item"
                                to="/DiagnosticAltetnator"
                            >
                                Генератор
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="dropdown-item"
                                to="/DiagnosticABattery"
                            >
                                Акумулятор
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics"
                            >
                                Всі види діагностики
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/Blogs">Корисні статті</NavLink>
                </li>
                <li>
                    <NavLink to="/Сontact">Контакти</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;



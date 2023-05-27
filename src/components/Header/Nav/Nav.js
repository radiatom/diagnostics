import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRes } from "./../../../reactRedux/testReducer";

const Nav = ({active,click}) => {
    const dispatch = useDispatch();
    const [drop, setDrop] = useState(false);
    const dropNavList = () => {
        setDrop(!drop);
        dispatch(updateRes())
    };
    return (
        <nav className={active?"navbar":" navbar active"}>
            <ul>
                <li onClick={click}>
                    <NavLink to="/Home">Про нас</NavLink>
                </li>
                <li onClick={click}>
                    <NavLink to="/Services">Наші послуги</NavLink>
                </li>
                <li onClick={click}>
                    <NavLink to="/Gallery">Галерея сервера</NavLink>
                </li>
                <li >
                    <button onClick={dropNavList}>
                        Діагностика <span>new</span>
                    </button>
                    <ul
                        className={drop ? "nav-list-open" : "nav-list-closed"}
                        onMouseLeave={dropNavList}
                    >
                        <li onClick={click}>
                            <NavLink
                                className="dropdown-item"
                                to="/DiagnosticStarter"
                            >
                                Стартер
                            </NavLink>
                        </li>
                        <li onClick={click}>
                            <NavLink
                                className="dropdown-item"
                                to="/DiagnosticAltetnator"
                            >
                                Генератор
                            </NavLink>
                        </li>
                        <li onClick={click}>
                            <NavLink
                                className="dropdown-item"
                                to="/DiagnosticABattery"
                            >
                                Акумулятор
                            </NavLink>
                        </li>
                        <li onClick={click}>
                            <NavLink
                                className="dropdown-item"
                                to="/Diagnostics"
                            >
                                Всі види діагностики
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li onClick={click}>
                    <NavLink to="/Blogs">Корисні статті</NavLink>
                </li>
                <li onClick={click}>
                    <NavLink to="/Сontact">Контакти</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;



import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = ({ active, setActive, drop, setDrop }) => {
    const [color, setColor] = useState("red");
    useEffect(() => {
        const interval = setInterval(() => {
            setColor((prevColor) => (prevColor === "red" ? "white" : "red"));
        }, 600);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <nav className={active ? "navbar navbar_active" : "navbar"}>
            <ul>
                <li onClick={() => setActive(false)}>
                    <NavLink to="/Home">Про нас</NavLink>
                </li>
                <li onClick={() => setActive(false)}>
                    <NavLink to="/Home/services">Наші послуги</NavLink>
                </li>
                {/* <li onClick={()=>setActive(!active)}>
                    <NavLink to="/Gallery">Галерея сервера</NavLink>
                </li> */}
                <li>
                    <button
                        className="navbar__dropButton"
                        onClick={() => setDrop(!drop)}
                    >
                        Діагностика{" "}
                        <span className={`border ${color}`}>new</span>
                        <span
                            className={
                                drop
                                    ? "navbar__dropButton_downIcon active"
                                    : "navbar__dropButton_downIcon"
                            }
                        ></span>
                    </button>
                    <ul
                        className={drop ? "navList  open" : "navList"}
                        onMouseLeave={() => setDrop(false)}
                    >
                        <li
                            onClick={() => {
                                setDrop(false);
                                setActive(false);
                            }}
                        >
                            <NavLink to="/Diagnostics/Starter">Стартер</NavLink>
                        </li>
                        <li
                            onClick={() => {
                                setDrop(false);
                                setActive(false);
                            }}
                        >
                            <NavLink to="/Diagnostics/Altenator">
                                Генератор
                            </NavLink>
                        </li>
                        <li
                            onClick={() => {
                                setDrop(false);
                                setActive(false);
                            }}
                        >
                            <NavLink to="/Diagnostics/Battery">
                                Акумулятор
                            </NavLink>
                        </li>
                        <li
                            onClick={() => {
                                setDrop(false);
                                setActive(false);
                            }}
                        >
                            <NavLink to="/Diagnostics/All">
                                Всі види діагностики
                            </NavLink>
                        </li>
                        <li
                            onClick={() => {
                                setDrop(false);
                                setActive(false);
                            }}
                        >
                            <NavLink to="/Diagnostics/Test/7">
                                Результат діагностики
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li onClick={() => setActive(false)}>
                    <NavLink to="/Home/contact">Контакти</NavLink>
                </li>
                <li onClick={() => setActive(false)}>
                    <NavLink to="/Home/blogs">Корисні статті</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

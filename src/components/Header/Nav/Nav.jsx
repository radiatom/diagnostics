import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import downIcon from "./../../../img/icons/down.webp";

const Nav = ({ active, setActive }) => {
    const [drop, setDrop] = useState(false);
    const ClickServices=()=>{
        setActive(!active)
        window.scrollTo(0, 1150);//скролл до секції Services
    }
    const clickOnContact =()=>{
        setActive(!active)
        window.scrollTo(0, 2200);//скролл до секції contact
    }
    const clickBlogs=()=>{
        setActive(!active)
        window.scrollTo(0, 4000);//скролл до секції Blogs
    }
    return (
        <nav className={active ? " navbar active" : "navbar"}>
            <ul>
                <li onClick={()=>setActive(!active)}>
                    <NavLink to="/Home">Про нас</NavLink>
                </li>
                <li onClick={()=>setActive(ClickServices)}>
                    <a to="/Services">Наші послуги</a>
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
                <li onClick={clickOnContact}>
                    <a to="/Сontact">Контакти</a>
                </li>
                <li onClick={clickBlogs}>
                    <a to="/Blogs">Корисні статті</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

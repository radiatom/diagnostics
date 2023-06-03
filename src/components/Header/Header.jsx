import React, { useEffect, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Nav from "./Nav/Nav";
import menu from "./../../img/icons/menu.png";
const logo = `${process.env.PUBLIC_URL}/img/Viniko1.png`;

const Navbar = () => {
    const [active, setActive] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <div className="header__head">
                    <nav className="header__nav">
                        <NavLink className="header__logo" to="/Home">
                            <img src={logo} alt="logo viniko вініко" />
                        </NavLink>
                        <img src={menu} alt="menu" onClick={()=>setActive(!active)} />
                    </nav>
                    <div className="header__location">
                        <span>Автосервіс</span>
                        <span>тел. +38 (097) 93 43 392</span>
                        <span>Луцьк</span>
                    </div>
                </div>
                <Nav active={active} setActive={setActive}/>
            </div>
        </header>
    );
};

export default Navbar;

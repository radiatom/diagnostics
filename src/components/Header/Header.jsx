import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Nav from "./Nav/Nav";
import menu from "./../../img/icons/menu.webp";
const logo = `${process.env.PUBLIC_URL}/img/Viniko1.webp`;

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [drop, setDrop] = useState(false);
    const click = () => {
        setActive(!active);
        setDrop(false);
    };
    return (
        <header className="header">
            <div className="container">
                <div className="header__head">
                    <nav className="header__head_nav">
                        <NavLink className="logo" to="/Home">
                            <img src={logo} alt="logo viniko вініко" />
                        </NavLink>
                        <div class={active?"header__icon active":"header__icon"} onClick={click}>
                            <span></span>
                        </div>
                        {/* <img src={menu} alt="menu" onClick={click} /> */}
                    </nav>
                    <div className="header__head_location">
                        <span>Автосервіс</span>
                        <span>
                            <a href="tel:0979343392">+38 (097) 93 43 392</a>
                        </span>
                        <span>Луцьк</span>
                    </div>
                </div>
                <Nav
                    active={active}
                    setActive={setActive}
                    drop={drop}
                    setDrop={setDrop}
                />
            </div>
        </header>
    );
};

export default Navbar;

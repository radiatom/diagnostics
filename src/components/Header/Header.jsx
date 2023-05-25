import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';
import Nav from './Nav/Nav'
const logo = `${process.env.PUBLIC_URL}/img/Viniko1.png`


const Navbar = () => {
      return (
            <header className="header">
            <div className="container">
                <div className="header__head">
                    <nav>
                        <NavLink className="header__logo" to="/Home">
                            <img src={logo} alt="logo viniko вініко" />
                        </NavLink>
                    </nav>
                    <div className="header__location">
                        <span>Автосервіс</span>
                        <span>тел. +38 (097) 93 43 392</span>
                        <span>Луцьк</span>
                    </div>
                </div>
                <Nav/>
            </div>
        </header>
      );
}

export default Navbar;

import React from "react";
import "./Buttons.scss";
import { NavLink } from "react-router-dom";
const logo = `${process.env.PUBLIC_URL}/img/Viniko1.webp`;

const NavToHome = () => {
    return (
        <div>
            <div>
                <NavLink to="/Home">
                    <img className="logo_home" src={logo} alt="logo" width="200" />
                </NavLink>
            </div>
            <NavLink to="/Сontact">
                <button className='btnY button'>
                    Наші контакти
                </button>
            </NavLink>
            <NavLink to="/Diagnostics">
                <button className='btnY button'>
                    Інші діагностики
                </button>
            </NavLink>
        </div>
    );
};

export default NavToHome;

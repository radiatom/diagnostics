import React from "react";
import "./Buttons.scss";
import { NavLink } from "react-router-dom";
const logo = `${process.env.PUBLIC_URL}/img/Viniko1.webp`;

const NavToHome = () => {
    return (
        <div className="NavToHome">
                <NavLink to="/Home">
                    <img className="NavToHome__logo" src={logo} alt="logo" width="200" />
                </NavLink>
            <div className="NavToHome__btns">
                <NavLink className='btnY' to="/Home/сontact">
                        Наші контакти
                </NavLink>
                <NavLink className='btnY' to="/Diagnostics/All">
                        Інші діагностики
                </NavLink>
            </div>
        </div>
    );
};

export default NavToHome;

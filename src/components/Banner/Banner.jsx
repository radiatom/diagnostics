import React from "react";
import { Slide } from "react-slideshow-image";
import "./Banner.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataBannerSelector } from "../../selectors/selectors";
import { useEffect } from "react";
import { setBanner } from "./reducerBanner";

const Banner1 = () => {
    const dataBanner = useSelector(dataBannerSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBanner());
    });
    return (
        <div className="banner">
            <Slide>
                {dataBanner.map((el) => {
                    return (
                        <div key={el.id}>
                            <div className="itemBanner"  style = { {   'backgroundImage' : `url( ${ el.foto } )` }}>
                                <div>
                                    <h3>{el.title}</h3>
                                    <p>{el.text}</p>
                                    <div className="itemBanner__nav">
                                        <NavLink className='itemBanner_btnY' to="/Diagnostics/All">
                                            Діагностувати
                                        </NavLink>
                                        <NavLink className='itemBanner_btnR' to="/Home/contact">
                                            Наше розташування
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
            </Slide>
        </div>
    );
};

export default Banner1;

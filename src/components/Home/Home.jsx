import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Services from "../Services/Services";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDevice } from "../../reactRedux/reducerAll";
import { useParams } from "react-router-dom";
import { isMobile } from "../../selectors/selectors";

const Home = () => {
    const scroll = () => {
        switch (section) {
            case "Services": {
                return isMobileDevice
                    ? window.scrollTo({ top: 1600, behavior: "smooth" })//скролл до секції Services для мобілок
                    : window.scrollTo({ top: 1150, behavior: "smooth" }); //скролл до секції Services для пк
            }
            case "Contact": {
                return isMobileDevice
                    ? window.scrollTo({ top: 3800, behavior: "smooth" })//скролл до секції contact для мобілок
                    : window.scrollTo({ top: 2200, behavior: "smooth" }); //скролл до секції contact для пк
            }
            case "Blogs": {
                return isMobileDevice
                    ? window.scrollTo({ top: 5100, behavior: "smooth" })//скролл до секції Blogs для мобілок
                    : window.scrollTo({ top: 4000, behavior: "smooth" }); //скролл до секції Blogs для пк
            }
            default:
                return window.scrollTo(0, 0);
        }
    };//навігація по лендінгу home

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDevice()); //визначаємо пристрій (пк чи мобіл)
    }, []);

    const { section } = useParams();//яку секцію показати?

    const isMobileDevice = useSelector(isMobile); //сторінка відкрита на мобільному пристрої?

    useEffect(() => {
        scroll(); 
    }, []);//робимо так щоб при переході з сторінки діагностика на сторінку наприклад контакти щоб скролл перемотувався бо без такої функції він лише відкривав home

    useEffect(() => {
        scroll();
    }, [section]); //реакція на зміну секції (зміни нанавігації 'navlink')

    return (
        <div className="home">
            <Banner />
            <div className="container">
                <Features />
                <Services />
                <Contact />
                <Blogs />
            </div>
        </div>
    );
};

export default Home;

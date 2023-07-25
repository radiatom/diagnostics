import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Services from "../Services/Services";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { setDevice } from "../../reactRedux/reducerAll";
import { useParams } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const { section } = useParams();
    useEffect(() => {
        switch (section) {
            case "Services": {
                return window.scrollTo({ top: 1150, behavior: "smooth" }); //скролл до секції Services
            }
            case "Contact": {
                return window.scrollTo({ top: 2200, behavior: "smooth" }); //скролл до секції contact
            }
            case "Blogs": {
                return window.scrollTo({ top: 4000, behavior: "smooth" }); //скролл до секції Blogs
            }
            default:
                return window.scrollTo(0, 0);
        }
    }, [section]); //навігація по лендінгу home

    useEffect(() => {
        dispatch(setDevice()); //визначаємо пристрій
        switch (section) {
            case "Services": {
                return window.scrollTo({ top: 1150, behavior: "smooth" }); //скролл до секції Services
            }
            case "Contact": {
                return window.scrollTo({ top: 2200, behavior: "smooth" }); //скролл до секції contact
            }
            case "Blogs": {
                return window.scrollTo({ top: 4000, behavior: "smooth" }); //скролл до секції Blogs
            }
            default:
                return window.scrollTo(0, 0);
        } //робимо так щоб при переході з сторінки діагностика на сторінку наприклад контакти щоб скролл перемотувався бо без такої функції він лише відкривав home
    }, []);

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

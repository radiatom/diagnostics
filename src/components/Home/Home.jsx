import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import Services from "./Services/Services";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { setDevice } from "../../reactRedux/reducerAll";
import { useParams } from "react-router-dom";

const Home = () => {
    const { section } = useParams(); //яку секцію показати?

    const scroll = () => {
        const gotoBlock = document.querySelector(`.${section}`); //шукаємо елемент по назві класу
        if (gotoBlock === null) {
            return window.scrollTo(0, 0);
        } else {
            let gotoBlockValue = gotoBlock.getBoundingClientRect().top-50; //визначаємо на якій висоті знаходиться елемент
            return window.scrollTo({ top: gotoBlockValue, behavior: "smooth" });
        }
    }; //навігація по лендінгу home


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDevice()); //визначаємо пристрій (пк чи мобіл)
        scroll();//робимо так щоб при переході з сторінки діагностика на сторінку наприклад контакти щоб скролл перемотувався бо без такої функції він лише відкривав home
    }, []);

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

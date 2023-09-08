import React, { useEffect, useRef } from "react";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import Services from "./Services/Services";
import "./Home.scss";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews/Reviews";

const Home = () => {
    const { section } = useParams(); //яку секцію показати?
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
    const blogsRef = useRef(null);

    const scrollToMyRef = (section) => {
        const scroll = (ref) => {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        };
        switch (section) {
            case "services": {
                servicesRef.current.style.scrollMargin = "50px";
                scroll(servicesRef);
                break;
            }
            case "contact": {
                contactRef.current.style.scrollMargin = "50px";
                scroll(contactRef);
                break;
            }
            case "blogs": {
                blogsRef.current.style.scrollMargin = "50px";
                scroll(blogsRef);
                break;
            }
            default: {
                homeRef.current.style.scrollMargin = "100px"; //зменьшення прокрутки
                scroll(homeRef);
            }
        }
    };

    useEffect(() => {
        scrollToMyRef(section);
    }, []);

    useEffect(() => {
        scrollToMyRef(section);
    }, [section]); //реакція на зміну секції (зміни нанавігації 'navlink')

    return (
        <div className="home" ref={homeRef}>
            <Banner />
            <div className="container">
                <div>
                    <Features />
                </div>
                <div ref={servicesRef}>
                    <Services />
                </div>
                <div ref={contactRef}>
                    <Contact />
                </div>
                <Reviews/>
                <div ref={blogsRef}>
                    <Blogs />
                </div>
            </div>
        </div>
    );
};

export default Home;

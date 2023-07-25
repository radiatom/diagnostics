import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Services from "../Services/Services";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { setDevice } from "../../reactRedux/reducerAll";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setDevice())
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

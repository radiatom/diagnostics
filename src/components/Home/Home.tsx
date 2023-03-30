import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact'
import Features from '../Features/Features';
import AllServices from '../Services/AllServices/AllServices';
import s from './Home.module.css'

const Home = () => {
      return (
            <div className={s.home} >
                  <Banner/>
                  <Features/>
                  <AllServices/>
                  <Contact/>
                  <Blogs/>
            </div >
      );
}

export default Home;

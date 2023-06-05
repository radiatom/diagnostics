import React from 'react';
import Banner from '../Banner/Banner.tsx';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact'
import Features from '../Features/Features';
import Services from '../Services/Services';
import s from './Home.module.css'

const Home = () => {
      return (
            <div className={s.home} >
                  {/* <Banner/> */}
                  <Features/>
                  <Services/>
                  <Contact/>
                  <Blogs/>
            </div >
      );
}

export default Home;


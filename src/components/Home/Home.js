import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact'
import Features from '../Features/Features';
import Services from '../Services/Services';
import s from './Home.module.css'

const Home = () => {
      return (
            <div className={s.home} >
                  <Banner/>
                  <Features/>
                  <Services/>
                  <Blogs/>
                  <Contact/>
                  
                  {/* <Banner></Banner> */}
                  {/* <Features></Features> */}
                  {/* <Services></Services> */}
                  {/* <Blogs></Blogs> */}
                  {/* <Contact></Contact> */}
            </div >
      );
}

export default Home;

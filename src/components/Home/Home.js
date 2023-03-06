import React from 'react';
import AllServices from '../AllServices/AllServices';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact'
import Features from '../Features/Features';
import s from './Home.module.css'

const Home = () => {
      return (
            <div className={s.home} >
                  <Banner/>
                  <Features/>
                  <AllServices/>
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

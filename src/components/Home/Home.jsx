import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact'
import Features from '../Features/Features';
import Services from '../Services/Services';
import './Home.scss'

const Home = () => {
      return (
            <div className='home' >
                  <Banner/>
                  <Features/>
                  <Services/>
                  <Contact/>
                  <Blogs/>
            </div >
      );
}

export default Home;


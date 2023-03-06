import React from 'react';
import s from "./Services.module.css"
import AllServices from './AllServices/AllServices';

const Services = () => {
      return (
            <div className={s.Services}>
                  <AllServices/>
            </div>
      );
}

export default Services;

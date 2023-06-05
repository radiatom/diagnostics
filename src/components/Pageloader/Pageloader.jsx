import React from 'react';
import './Pageloader.scss'
const loader = `${process.env.PUBLIC_URL}/img/loader.gif`;

const Pageloader = () => {
      return (
            <div className="Pageloader"> 
                  <img src={loader} alt="loader" />
            </div>
      );
}

export default Pageloader;

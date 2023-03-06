import React from 'react';

import Service1 from './Service/Service1';
import Service2 from './Service/Service2';
import Service3 from './Service/Service3';
import Service4 from './Service/Service4';
import Service5 from './Service/Service5';

const AllServices = () => {
      return (
            <div id='services' className='container mb-5'>
                  <h1 className=' text-center  mt-5'>Наші послуги</h1>
                  <div className='row'>
                        <Service1 />
                        <Service2 />
                        <Service3 />
                        <Service4 />
                        <Service5 />
                  </div>
            </div>
      );
}

export default AllServices;

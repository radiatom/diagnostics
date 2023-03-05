import React from 'react';
import DiagnosticAltenator1 from './DiagnosticAltenator1';
import DiagnosticAltenator2 from './DiagnosticAltenator2';
import DiagnosticAltenator3 from './DiagnosticAltenator3';


const DiagnosticStarter = () => {
      return (
            <div className="container my-5">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 ">
                        <DiagnosticAltenator1 />
                        <DiagnosticAltenator2 />
                        <DiagnosticAltenator3 />
                  </div>
            </div>
      );
}

export default DiagnosticStarter;
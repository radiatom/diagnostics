import React from 'react';
import DiagnosticStarter1 from './DiagnosticStarter1';
import DiagnosticStarter2 from './DiagnosticStarter2';
import DiagnosticStarter3 from './DiagnosticStarter3';
import DiagnosticStarter4 from './DiagnosticStarter4';
import DiagnosticStarter5 from './DiagnosticStarter5';

const DiagnosticStarter = () => {
      return (
            <div className="container my-5">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 ">
                        <DiagnosticStarter1 />
                        <DiagnosticStarter2 />
                        <DiagnosticStarter3 />
                        <DiagnosticStarter4 />
                        <DiagnosticStarter5 />
                  </div>
            </div>
      );
}

export default DiagnosticStarter;

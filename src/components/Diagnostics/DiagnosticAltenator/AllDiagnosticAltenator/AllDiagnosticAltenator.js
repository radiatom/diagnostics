import React from 'react';
import s from "./DiagnosticAltenator.module.css"
import DiagnosticAltenator1 from './DiagnosticAltenator1';
import DiagnosticAltenator2 from './DiagnosticAltenator2';
import DiagnosticAltenator3 from './DiagnosticAltenator3';
import DiagnosticAltenator4 from './DiagnosticAltenator4';


const DiagnosticStarter = () => {
      return (
            <div className={s.AllDiagnostic}>
                  <div className="container my-5">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 text-center">
                              <DiagnosticAltenator3 />
                              <DiagnosticAltenator1 />
                              <DiagnosticAltenator2 />
                              <DiagnosticAltenator4/>
                        </div>
                  </div>
            </div>
      );
}

export default DiagnosticStarter;
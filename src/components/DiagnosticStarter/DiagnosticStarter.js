import React from 'react';
import s from "./DiagnosticStarter.module.css"
import DiagnosticStarterHeader from './DiagnosticStarterHeader/DiagnosticStarterHeader';
import AllDiagnosticStarter from './AllDiagnosticStarter/AllDiagnosticStarter';

const DiagnosticStarter = () => {
      return (
            <div className={s.DiagnosticStarter}>
                  <DiagnosticStarterHeader/>
                  <AllDiagnosticStarter/>
            </div>
      );
}

export default DiagnosticStarter;

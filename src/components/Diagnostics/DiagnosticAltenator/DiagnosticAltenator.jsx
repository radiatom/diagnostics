import React from 'react';
import  s from "./DiagnosticAltenator.module.css"
import DiagnosticAltenatorHeader from "./DiagnosticAltenatorHeader/DiagnosticAltenatorHeader" 
import AllDiagnosticAltenator from "./AllDiagnosticAltenator/AllDiagnosticAltenator"

const DiagnosticAltenator = () => {
      return (
            <div className={s.DiagnosticAltenator}> 
                  <DiagnosticAltenatorHeader/>
                  <AllDiagnosticAltenator/>
            </div>
      );
}

export default DiagnosticAltenator;

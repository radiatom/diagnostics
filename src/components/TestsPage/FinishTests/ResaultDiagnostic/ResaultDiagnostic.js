import React from 'react';
import s from "./ResaultDiagnostics.module.css"

const ResaultDiagnostic = (props) => {
      return (
            <div className={s.resaultDiagnostic}>
                  <p>{props.el}</p>
            </div>
      );
}

export default ResaultDiagnostic;

import React,{useEffect} from 'react';
import s from "./ResaultDiagnostics.module.css"

const ResaultDiagnostic = ({el,getResaultDiagnosticData}) => {
      // useEffect(() => {
      //       getResaultDiagnosticData()
      //     }, []);
      return (
            <div className={s.resaultDiagnostic}>
                  <p>{el}</p>
            </div>
      );
}

export default ResaultDiagnostic;

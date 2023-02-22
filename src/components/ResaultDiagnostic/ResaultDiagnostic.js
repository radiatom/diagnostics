import React,{useEffect} from 'react';

const ResaultDiagnostic = (props) => {
      useEffect(() => {
            props.getResaultDiagnosticData()
          }, []);
      return (
            <div>
                  resault test
                  <p>{props.el}</p>
            </div>
      );
}

export default ResaultDiagnostic;

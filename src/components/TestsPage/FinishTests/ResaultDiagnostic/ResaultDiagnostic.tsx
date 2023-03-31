import React from 'react';
// import s from "./ResaultDiagnostics.module.css"

type propsType = {
      el: string
}
const ResaultDiagnostic: React.FC<propsType> = ({ el }) => {
      return (
            <div >
                  <p>{el}</p>
            </div>
      );
}

export default ResaultDiagnostic;

import React from 'react';
// import s from "./ResaultDiagnostics.module.css"

type propsType = {
      el: string
}
const ResaultDiagnostic: React.FC<propsType> = ({ el }) => {
      return (
            <li>
                  <p>{el}</p>
            </li>
      );
}

export default ResaultDiagnostic;

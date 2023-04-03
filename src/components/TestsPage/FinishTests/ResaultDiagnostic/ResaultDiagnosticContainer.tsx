import React from 'react';
import { useSelector } from 'react-redux';
import ResaultDiagnostic from './ResaultDiagnostic';
import { resaultDiagnosticType } from "./../../../../server/server"
import { resaultSelector } from './../../../../selectors/selectors'


const ResaultDiagnosticContainer: React.FC<object> = () => {
      const resault: resaultDiagnosticType = useSelector(resaultSelector)
      return (
            <div>
                  {resault.map(el => <ResaultDiagnostic key={el.id} el={el.text} />)}
            </div>
      );
}

export default ResaultDiagnosticContainer;

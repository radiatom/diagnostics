import React from 'react';
import ResaultDiagnosticContainer from './ResaultDiagnostic/ResaultDiagnosticContainer'
import s from "./FinishTests.module.css"
import { NavLink } from 'react-router-dom';
import { resaultDiagnosticType } from "../../../server/server"


type propsType = {
      updateRes: () => void
      resault: resaultDiagnosticType
}

const FinishTests: React.FC<propsType> = (props) => {
      return (
            <div>
                  <div>
                        {props.resault[1] === undefined || props.resault[1].text === '' ?
                              <h5 className='text-center m-4'>Під час діагностики ніяких проблем не було знайдено.</h5>
                              :
                              <div>
                                    <h3 className='text-center m-4'>Ось що вдалось вияснити:</h3>
                                    <div className='m-4'>
                                          <ResaultDiagnosticContainer />
                                          <p>Усувайте проблеми по одній або комплексно, щоб вияснити, що було причиною. Рекомендовано усунути всі проблеми відразу. <span className={s.warning}>Після оновлення сторінки результати діагностики зникнуть (збережіть цю інформацію)</span>.</p>
                                          <NavLink to="/Diagnostics"><button onClick={() => props.updateRes()} className="btn btn-warning">Почати нову діагностику</button></NavLink>
                                    </div>
                              </div>
                        }
                  </div>
            </div>
      );
}

export default FinishTests;

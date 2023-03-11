import React from 'react';
import ResaultDiagnosticContainer from './ResaultDiagnostic/ResaultDiagnosticContainer'
import s from "./FinishTests.module.css"
import { NavLink } from 'react-router-dom';

const FinishTests = () => {
      return (
            <div>
                  {/* <div>
                              {props.resault.length > 0 ?
                                    <div>
                                          Ось що вдалось вияснити:
                                          <ResaultDiagnosticContainer />
                                          <Recomendation />
                                          
                                    </div>
                                    :
                                    <div>
                                          Під час діагностики ніяких проблем не було знайдено, так не буває. Пройдіть діагностику ще раз та уважніше все передивіться.
                                    </div>
                              }
                        </div>
                        значення 1,0 треба змінити на ''
                        спосіб без збереження результатів, працює добре але після оновлення сторінки результати пропадають, можна вертатись та змінювати відповіді і результати будуть підлаштовуватись */}

                  <div >
                        <h3 className='text-center m-4'>Ось що вдалось вияснити:</h3>
                        <div className='m-4'>
                              <ResaultDiagnosticContainer />
                              <p>Усувайте проблеми по одній або комплексно, щоб вияснити, що було причиною. Рекомендовано усунути всі проблеми відразу. <span className={s.warning}>Після оновлення сторінки результати діагностики зникнуть (збережіть цю інформацію)</span>.</p>
                              <NavLink to="/Diagnostics"><button className="btn btn-warning">Почати нову діагностику</button></NavLink>
                        </div>
                  </div>
                  {/* спосіб з збереженням результатів після оновлення сторінки, але коли з результатів вертитьсь та переправляти відповіді кінцеві результати змінються повністю так що вони стають не повноцінні і не  паравильні */}



            </div>
      );
}

export default FinishTests;

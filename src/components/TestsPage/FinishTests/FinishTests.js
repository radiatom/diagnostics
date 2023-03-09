import React from 'react';
import ResaultDiagnosticContainer from './ResaultDiagnostic/ResaultDiagnosticContainer'
import Recomendation from './Recomendation/Recomendation'

const FinishTests = () => {
      return (
            <div>
                  {/* <div>
                              {props.resault.length > 0 ?
                                    <div>
                                          Ось що вдалось вияснити:
                                          <ResaultDiagnosticContainer />
                                          <Recomendation />
                                          <NavLink to="/Diagnostics"><button className="btn btn-warning">Почати нову діагностику</button></NavLink>
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
                        <ResaultDiagnosticContainer />
                        <Recomendation />
                  </div>
                  {/* спосіб з збереженням результатів після оновлення сторінки, але коли з результатів вертитьсь та переправляти відповіді кінцеві результати змінються повністю так що вони стають не повноцінні і не  паравильні */}



            </div>
      );
}

export default FinishTests;

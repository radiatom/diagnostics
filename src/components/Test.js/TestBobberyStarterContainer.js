import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TestBobberyStarter from './TestBobberyStarter';
import { getTestData, putSolutionTestTrue, putSolutionTestFalse, setSaveResault } from '../../reactRedux/testReducer';
import { useParams } from 'react-router-dom';
import ResaultDiagnosticContainer from './../ResaultDiagnostic/ResaultDiagnosticContainer';
import Recomendation from '../Recomendation/Recomendation';
import { NavLink } from 'react-router-dom';




const TestBobberyStarterContainer = (props) => {
      const { linkNumber } = useParams()
      props.getTestData(linkNumber)
      useEffect(() => {
            props.setSaveResault()
      }, []);

      return (
            <div>
                  <div >
                        {linkNumber === "7" ?

                              // <div>
                              //       {props.resault.length > 0 ?
                              //             <div>
                              //                   Ось що вдалось вияснити:
                              //                   <ResaultDiagnosticContainer />
                              //                   <Recomendation />
                              //                   <NavLink to="/Diagnostics"><button className="btn btn-warning">Почати нову діагностику</button></NavLink>
                              //             </div>
                              //             :
                              //             <div>
                              //                   Під час діагностики ніяких проблем не було знайдено, так не буває. Пройдіть діагностику ще раз та уважніше все передивіться.
                              //             </div>
                              //       }
                              // </div>
                              // значення 1,0 треба змінити на ''
                              // спосіб без збереження результатів, працює добре але після оновлення сторінки результати пропадають, можна вертатись та змінювати відповіді і результати будуть підлаштовуватись

                              <div >
                                    Ось що вдалось вияснити:
                                    <ResaultDiagnosticContainer />
                                    <Recomendation />
                                    <NavLink to="/Diagnostics"><button className="btn btn-warning">Почати нову діагностику</button></NavLink>
                              </div>
                              :
                              <div>
                                    <TestBobberyStarter {...props} />
                              </div>
                              // спосіб з збереженням результатів після оновлення сторінки, але коли з результатів вертитьсь та переправляти відповіді кінцеві результати змінються повністю так що вони стають не повноцінні і не  паравильні

                        }
                  </div>
            </div>
      );
}
const mapStateToProps = (state) => {
      return {
            testData: state.testPage.testData,
            resault: state.testPage.resault
      }
}

export default connect(mapStateToProps, { getTestData, putSolutionTestTrue, putSolutionTestFalse, setSaveResault })(TestBobberyStarterContainer);

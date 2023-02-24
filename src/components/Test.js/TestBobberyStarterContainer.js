import React from 'react';
import { connect } from 'react-redux';
import TestBobberyStarter from './TestBobberyStarter';
import { getTestData, putSolutionTest, getResaultDiagnosticData } from '../../reactRedux/testReducer';
import { useParams } from 'react-router-dom';
import ResaultDiagnosticContainer from './../ResaultDiagnostic/ResaultDiagnosticContainer';
import Recomendation from '../Recomendation/Recomendation';




const TestBobberyStarterContainer = (props) => {
      const { linkNumber } = useParams()
      props.getTestData(linkNumber)
      return (
            <div>

                  <div >
                        {linkNumber === "7" ?
                              <div>
                                    {props.resault.legth>0?
                                    <div>
                                          Ось що вдалось вияснити:
                                          <ResaultDiagnosticContainer {...props} />
                                          <Recomendation />
                                    </div>:
                                    <div>
                                          Під час діагностики ніяких проблем не було знайдено, так не буває. Пройдіть діагностику ще раз та уважніше все передивіться.
                                    </div>
                                    }
                              </div>
                              :
                              <div>
                                    <TestBobberyStarter {...props} />
                              </div>
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

export default connect(mapStateToProps, { getTestData, putSolutionTest, getResaultDiagnosticData })(TestBobberyStarterContainer);

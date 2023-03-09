import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ResaultDiagnostic from './ResaultDiagnostic';
import { setSaveResault } from '../../../../reactRedux/testReducer';



const ResaultDiagnosticContainer = (props) => {
      useEffect(() => {
            props.setSaveResault()
      }, []);
      return (
            <div>
                  Ось що вдалось вияснити:
                  <div>
                        {props.resault.map(el => <ResaultDiagnostic kеy={el} el={el} {...props} />)}
                  </div>
            </div>
      );
}

const mapStateToProps = (state) => {
      return {
            resault: state.testPage.resault
      }
}
export default connect(mapStateToProps, { setSaveResault })(ResaultDiagnosticContainer);

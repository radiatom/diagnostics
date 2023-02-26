import React from 'react';
import { connect } from 'react-redux';
import ResaultDiagnostic from './ResaultDiagnostic';
import { getResaultDiagnosticData } from '../../reactRedux/testReducer';


const ResaultDiagnosticContainer =  (props) => {
      
      return (
            <div>
                  {props.resault.map(el =><ResaultDiagnostic kay={el} el={el} {...props} />)}
            </div>
      );
}

const mapStateToProps = (state) => {
      return {
            resault: state.testPage.resault
      }
}
export default connect(mapStateToProps, { getResaultDiagnosticData })(ResaultDiagnosticContainer);

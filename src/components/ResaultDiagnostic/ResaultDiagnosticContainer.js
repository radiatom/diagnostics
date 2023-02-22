import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import ResaultDiagnostic from './ResaultDiagnostic';
import { getResaultDiagnosticData } from '../../reactRedux/testReducer';


const ResaultDiagnosticContainer =  (props) => {
      // useEffect(() => {
      //       props.getResaultDiagnosticData()
      //     }, []);
      return (
            <div>
                  {props.resault.map(el =><ResaultDiagnostic el={el} {...props} />)}
            </div>
      );
}

const mapStateToProps = (state) => {
      return {
            resault: state.testPage.resault
      }
}
export default connect(mapStateToProps, { getResaultDiagnosticData })(ResaultDiagnosticContainer);

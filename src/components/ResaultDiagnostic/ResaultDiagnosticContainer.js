import React from 'react';
import { connect } from 'react-redux';
import ResaultDiagnostic from './ResaultDiagnostic';


const ResaultDiagnosticContainer =  (props) => {
      
      return (
            <div>
                  {props.resault.map(el =><ResaultDiagnostic kеy={el} el={el} {...props} />)}
            </div>
      );
}

const mapStateToProps = (state) => {
      return {
            resault: state.testPage.resault
      }
}
export default connect(mapStateToProps, {})(ResaultDiagnosticContainer);

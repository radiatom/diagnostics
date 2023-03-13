import React from 'react';
import { connect } from 'react-redux';
import ResaultDiagnostic from './ResaultDiagnostic';



const ResaultDiagnosticContainer = (props) => {
      return (
            <div>
                  {props.resault.map(el =><ResaultDiagnostic key={el.id} el={el.text} {...props} />)}
            </div>
      );
}

const mapStateToProps = (state) => {
      return {
            resault: state.testPage.resault
      }
}
export default connect(mapStateToProps, {})(ResaultDiagnosticContainer);

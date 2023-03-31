import React from 'react';
import { connect } from 'react-redux';
import ResaultDiagnostic from './ResaultDiagnostic';
import { resaultDiagnosticType } from "./../../../../server/server"



type mapStateToPropsType = {
      resault: resaultDiagnosticType
}
const ResaultDiagnosticContainer: React.FC<mapStateToPropsType> = (props) => {
      return (
            <div>
                  {props.resault.map(el => <ResaultDiagnostic key={el.id} el={el.text} />)}
            </div>
      );
}

const mapStateToProps = (state: any): mapStateToPropsType => {
      return {
            resault: state.testPage.resault
      }
}
export default connect(mapStateToProps, {})(ResaultDiagnosticContainer);

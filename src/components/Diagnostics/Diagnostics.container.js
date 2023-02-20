import React from 'react';
import { connect } from 'react-redux';
import Diagnostics from './Diagnostics';
import { getTestData } from '../../reactRedux/testReducer';


const DiagnosticsContainer = (props) => {
      return (
            <div>
                  <Diagnostics {...props}/>
            </div>
      );
}

const mapStateToProps=(state)=>{
      return{
            
      }
}
export default connect (mapStateToProps,{getTestData}) (DiagnosticsContainer);

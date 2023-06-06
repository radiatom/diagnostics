import React, { useState } from 'react';
import  "./ResaultDiagnostic.scss"
import img from './../../../../img/icons/che.webp'


const ResaultDiagnostic = ({ el }) => {
      const [active,setActive]=useState(false)
      const click=()=>{
            setActive(!active)
      }
      return (
            <div onClick={click} className={active?'ResaultDiagnostic activeRes':'ResaultDiagnostic'}>
                  {active?<div><img src={img}  alt="ok" /></div>:<div></div>}
                  <p >{el}</p>
            </div>
      );
}

export default ResaultDiagnostic;

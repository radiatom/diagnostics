import React, { useEffect, useState } from 'react';
import  "./ResaultDiagnostic.scss"
import img from './../../../../img/icons/che.webp'


const ResaultDiagnostic = ({ el,index }) => {
      const [active,setActive]=useState(false)
      const [show,setShow]=useState(false)
      useEffect(() => {
            setTimeout(()=>{
                  setShow(true)
            },index*1000/2)
      }, []);//показати компонент через index*1000/2 мілісекунд
      return (
            <div className={show?'show':'noShow'}>
                  <div onClick={()=>setActive(!active)} className={active?'ResaultDiagnostic activeRes':'ResaultDiagnostic'}>
                        {active?<div><img src={img}  alt="ok" /></div>:<div></div>}
                        <p >{el}</p>
                  </div>
            </div>
      );
}

export default ResaultDiagnostic;

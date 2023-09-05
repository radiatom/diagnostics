import React from 'react';
import './AlertDelete.scss'
const AlertDelete = ({setYesOrNo,setAlert}) => {
    return (
        <div className='alertDelete'>
            <div className='alertDelete__buttons'>
                <button onClick={()=>setYesOrNo(true)}>Так</button>
                <button onClick={()=>setAlert(false)}>Ні</button>
            </div>
        </div>
    );
}

export default AlertDelete;

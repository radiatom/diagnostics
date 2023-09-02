import React, { useEffect, useState } from 'react';
import './Progress.scss'

const Progress = ({length,position}) => {
    const [width,setWidth]=useState({width:'0%'})
    useEffect(() => {
        setWidth({width:100/length*(position-1)+'%'})
    }, [position,length]);
    return (
        <div className='progress'>
            <div style={width}></div>
        </div>
    );
}

export default Progress;

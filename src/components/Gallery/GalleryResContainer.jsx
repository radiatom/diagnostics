import React from 'react';
import serverData from '../../server/server.ts';
import GalleryRes from './GalleryRes';

const GalleryResContainer = ({id}) => {
    return (
        <span>
            {serverData.resaultDiagnostic.map(el => {
                if (el.id === id) {
                    return <GalleryRes key={el.id} text={el.text} id={el.id}/>
                }
                return null
            })}
        </span>
    );
}

export default GalleryResContainer;

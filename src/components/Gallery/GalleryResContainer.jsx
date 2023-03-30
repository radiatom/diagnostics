import React from 'react';
import serverData from '../../server/server.ts';
import GalleryRes from './GalleryRes';

const GalleryResContainer = (props) => {
    return (
        <span>
            {serverData.resaultDiagnostic.map(el => {
                if (el.id === props.id) {
                    return <GalleryRes key={el.id} el={el} />
                }
                return null
            })}
        </span>
    );
}

export default GalleryResContainer;

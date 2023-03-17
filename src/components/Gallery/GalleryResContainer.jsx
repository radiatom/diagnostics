import React from 'react';
import serverData from '../../server/server';
import GalleryRes from './GalleryRes';

const GalleryResContainer = (props) => {
    return (
        <span>
            {serverData.resaultDiagnostic.map(el => {
                if (el.id === props.id) {
                    return <GalleryRes kay={el.id} el={el} />
                }
                return null
            })}
        </span>
    );
}

export default GalleryResContainer;

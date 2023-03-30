import React from 'react';
import serverData from '../../server/server';
import GalleryRes from './GalleryRes';

type propsType = {
    id: number | null
}
const GalleryResContainer: React.FC<propsType> = ({ id }) => {
    return (
        <span>
            {serverData.resaultDiagnostic.map(el => {
                if (el.id === id) {
                    return <GalleryRes key={el.id} text={el.text} id={el.id} />
                }
                return null
            })}
        </span>
    );
}

export default GalleryResContainer;

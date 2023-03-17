import React from 'react';
import serverData from '../../server/server';
import GalleryTest from './GalleryTest';

const GalleryContainer = (props) => {
    return (
            <div>
                {serverData.testCard.map(el => {
                    return <GalleryTest key={el.linkNumber} elTest={el}/>
                })}
            </div>
    );
}

export default GalleryContainer;

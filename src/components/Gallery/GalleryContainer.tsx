import React from 'react';
import serverData from '../../server/server';
import GalleryTest from './GalleryTest';

const GalleryContainer = () => {
    return (
        <div>
            {serverData.testCard.map(el => {
                return <GalleryTest
                    key={el.linkNumber}
                    id={el.linkNumber}
                    problem={el.problem}
                    testText={el.testText}
                    instruction={el.instruction}
                    img={el.img}
                    video={el.video}
                    solutionYes={el.solutionYes}
                    solutionNo={el.solutionNo}
                />
            })}
        </div>
    );
}

export default GalleryContainer;

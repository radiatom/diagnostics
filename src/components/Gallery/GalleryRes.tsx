import React from 'react';

type propsType = {
    text: string
    id: number
}

const GalleryRes: React.FC<propsType> = ({ text, id }) => {
    return (
        <span>
            № результату : {''+id}
            <p>Текст: {text} </p>
        </span>
    );
}

export default GalleryRes;

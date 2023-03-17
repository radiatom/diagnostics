import React from 'react';

const GalleryRes = (props) => {
    return (
        <span>
            № результату : {props.el.id}
            <p>Текст: {props.el.text} </p>
        </span>
    );
}

export default GalleryRes;

import React from "react";
import './RoadFoto'
const Item = ({link}) => {
    return (
        <div className="carousel-item">
            <img
                src={link}
                className="d-block w-100"
                alt="viniko вініко"
            />
        </div>
    );
};

export default Item;

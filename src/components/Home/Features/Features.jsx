import React, { useEffect, useRef, useState } from "react";
import "./Features.scss";
import img1 from "./../../../img/icons/fea1.webp";
import img2 from "./../../../img/icons/fea2.webp";
import img3 from "./../../../img/icons/fea3.webp";
import img4 from "./../../../img/icons/goldHeart.png";
import img5 from "./../../../img/icons/handshake.png";
import img6 from "./../../../img/icons/bearing.png";
import Feature1 from "./Feature/Feature1";
import Feature2 from "./Feature/Feature2";
import Feature3 from "./Feature/Feature3";
import Feature4 from "./Feature/Feature4";
import Feature5 from "./Feature/Feature5";
import Feature6 from "./Feature/Feature6";

const Features = () => {
    return (
        <div className="features">
            <h2 className="features__title title" tabIndex="0">
                Чому обирають нас?
            </h2>
            <div className="features__row">
                <Feature1 />
                <Feature2 />
                <Feature3 />
                <Feature4 />
                <Feature5 />
                <Feature6 />
            </div>
        </div>
    );
};

export default Features;

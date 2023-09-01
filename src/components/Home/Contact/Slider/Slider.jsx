import React, { useEffect } from "react";
import "./Slider.scss";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import { roadFotosSelector } from "../../../../selectors/selectors";
import { setRoadFotos } from "./reducerSlider";

const Slider = () => {
    const roadFootos = useSelector(roadFotosSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setRoadFotos());
    }, [roadFootos]);
    return (
        <div className="Slider">
            <h2 className="Slider__title title" tabIndex='0'>
                Як до нас доїхати? Слайди:
            </h2>
            <Slide>
                {roadFootos.map((el) => (
                    <div key={el.id}>
                        <div className="Slider__item">
                            <a href={el.link} target="_blank" rel="noopener noreferrer"><img src={el.link} alt="foto" /></a>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};
export default Slider;

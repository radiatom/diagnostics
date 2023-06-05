import React, { useEffect } from "react";
import "./RoadFoto.scss";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { roadFotosSelector } from "../../../selectors/selectors";
import { setRoadFotos } from "../../../reactRedux/reducerRoadFotos";

const RoadFoto = () => {
    const roadFootos = useSelector(roadFotosSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setRoadFotos());
    }, [roadFootos]);
    return (
        <div className="roadFoto">
            <h2 className="roadFoto__title title">
                Як до нас доїхати? Слайди:
            </h2>
            <Slide>
                {roadFootos.map((el) => (
                    <div key={el.id}>
                        <div className="roadFoto__item">
                            <img src={el.link} alt="foto" />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};
export default RoadFoto;

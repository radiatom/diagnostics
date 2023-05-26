import React, { useEffect } from "react";
import "./RoadFoto.scss";
import { useDispatch, useSelector } from "react-redux";
import { roadFotosSelector } from "../../../selectors/selectors";
import { setRoadFotos } from "../../../reactRedux/reducerRoadFotos";


const RoadFoto = () => {
    const roadFootos = useSelector(roadFotosSelector);
    const objFirstFoto = roadFootos.find((el) => el.id === 1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setRoadFotos());
    }, [roadFootos]);
// всі фото з сервера
    return (
        <div className="roadFoto">
            <h2 className="roadFoto__title title">
                Як до нас доїхати? Слайди:
            </h2>
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide "
                data-bs-ride="carousel"
            >
                <div className="carousel-inner ">
                    <div className="carousel-item active ">
                        <img
                            src={objFirstFoto.link}
                            className="d-block w-100"
                            alt="viniko вініко"
                        />
                    </div>
                    {/* перше фото має бути таке щоб акрсель починалося з цього фото */}
                    {roadFootos.map((el) => {
                        if (el.id > 1) {
                            return (
                                <div className="carousel-item">
                                    <img
                                        src={el.link}
                                        className="d-block w-100"
                                        alt="viniko вініко"
                                    />
                                </div>
                            );
                        }
                    })}
                    {/* в окремий компонент не винести бо треба щоб тут був class="carousel-item active", 
                        тому скоротити можн абуде 1 строчку замість одної строчки, тому це не логічно , фото добавляються всі окрім першого */}
                </div>
                <button
                    className="carousel-control-prev "
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next "
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default RoadFoto;

import React, { useEffect } from "react";
import "./Services.scss";
import { getServices } from "../../reactRedux/reducerServices";
import Service from "./Service/Service";
import { useDispatch, useSelector } from "react-redux";
import { servicesSelector } from "../../selectors/selectors";

const Services = (props) => {
    const servicesData = useSelector(servicesSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getServices());
    }, [props]);

    return (
        <div className="container">
            <div className="services">
                <h1 className="services__title title">Наші послуги</h1>
                <div className="services__row">
                    {servicesData.map((el) => {
                        return (
                            <Service
                                key={el.id}
                                title={el.title}
                                text={el.text}
                                img={el.img}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
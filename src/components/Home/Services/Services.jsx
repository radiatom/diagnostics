import React, { useEffect } from "react";
import "./Services.scss";
import { getServices } from "./reducerServices";
import Service from "./Service/Service";
import { useDispatch, useSelector } from "react-redux";
import { servicesSelector } from "../../../selectors/selectors";

const Services = () => {
    const servicesData = useSelector(servicesSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getServices());
    }, []);

    return (
        <div className="services">
            <h1 className="services__title title" tabIndex="0">
                Наші послуги
            </h1>
            <div className="services__row">
                {servicesData.map((el) => {
                    return (
                        <Service
                            id={el.id}
                            key={el.id}
                            title={el.title}
                            text={el.text}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Services;

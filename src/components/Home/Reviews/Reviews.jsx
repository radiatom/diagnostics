import React, { useEffect } from "react";
import "./Reviews.scss";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "./reducerReviews";
import {dataReviewsSelector} from "./../../../selectors/selectors";
import Review from "./Review/Review";

const Reviews = () => {
    const dispatch = useDispatch();
    const data = useSelector(dataReviewsSelector);
    useEffect(() => {
        dispatch(setReviews());
    }, []);
    return (
        <div className="container">
            <div className="reviews">
                <h5 className="reviews__specification">Відгуки у Google із середньою оцінкою 4.8</h5>
                <h3 className="reviews__title title">Подивіться, що про нас пишуть клієнти</h3>
                <div className="reviews__items">
                    {data.map((item, index) => {
                        return <Review key={index} avatar={item.avatar} fullName={item.fullName} text={item.text} link={item.link} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Reviews;

import React, { useEffect, useRef, useState } from "react";
import "./Reviews.scss";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "./reducerReviews";
import { dataReviewsSelector } from "./../../../selectors/selectors";
import Review from "./Review/Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const dispatch = useDispatch();
    const reviewsRef = useRef(null);
    const data = useSelector(dataReviewsSelector);
    const [slidesToShow, setSlidesToShow] = useState(2);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> ⫸ </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> ⫷ </div>
            </div>
        ),
    };
    useEffect(() => {
        dispatch(setReviews());
    }, []);
    useEffect(() => {
        if (reviewsRef.current) {
            const width = reviewsRef.current.offsetWidth;
            if (width > 1000 ) {
                setSlidesToShow(3);
            }
            if (width <= 1000 && width > 700) {
                setSlidesToShow(2);
            }
            if (width <= 700) {
                setSlidesToShow(1);
            }
        }
    }, []);
    return (
        <div className="container">
            <div className="reviews" ref={reviewsRef}>
                <h5 className="reviews__specification">Відгуки у Google із середньою оцінкою 4.8</h5>
                <h3 className="reviews__title title">Подивіться, що про нас пишуть клієнти</h3>
                <Slider {...settings}>
                    {data.map((item, index) => {
                        return (
                            <Review key={index} avatar={item.avatar} fullName={item.fullName} text={item.text} link={item.link} />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;

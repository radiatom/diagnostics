import React, { useState } from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner2 from './../../img/bg2.jpg'
import banner3 from './../../img/bg3.jpg'
import banner4 from './../../img/bg5.jpg'
import { NavLink } from "react-router-dom";

// import banner1 from "../../../images/banner/banner1.jpg";
// import banner2 from "../../../images/banner/banner2.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 " src={banner4} alt="First slide" />
      <Carousel.Caption>
          <h3>Діагностика</h3>
          <p>Ми розробили систему, за допомогою якої, Ви можете виявити поломку самостійно.</p>
          <NavLink className="btn btn-danger rounded-pill m-2" to="/Diagnostics">Вибрати діагностику</NavLink>
          <NavLink className="btn btn-warning rounded-pill" to="/Сontact">Наше розташування</NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 " src={banner3} alt="Second slide " />
        <Carousel.Caption>
          <h3>Досвід і якість</h3>
          <p>Сервіс професійних, надійних і ефективних послуг з ремонту автомобілів.</p>
          <NavLink className="btn btn-danger rounded-pill m-2" to="/Services">Наші послуги</NavLink>
          <NavLink className="btn btn-warning rounded-pill" to="/Сontact">Наше розташування</NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 " src={banner2} alt="Third slide " />
        <Carousel.Caption>
          <h3>Гарантія</h3>
          <p>Даємо гарантію на роботу та комплектуючі 6місяців.</p>
          <NavLink className="btn btn-danger rounded-pill m-2" to="/Services">Наші послуги</NavLink>
          <NavLink className="btn btn-warning rounded-pill" to="/Сontact">Наше розташування</NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
  );
};

export default Banner;

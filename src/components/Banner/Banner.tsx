import React, { useState } from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
// import banner2 from './../../img/bg2.jpg'
// import banner3 from './../../img/bg3.jpg'
// import banner4 from './../../img/bg5.jpg'
import { NavLink } from "react-router-dom";



const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 " src={`${process.env.PUBLIC_URL}/img/bg5.jpg`} alt="Mazda rx 8 rest мазда " />
        <Carousel.Caption>
          <h3>Діагностика</h3>
          <p>Ми розробили систему, за допомогою якої, Ви зможете перевірити стартер, генератор, акумулятор.</p>
          <NavLink className="btn btn-danger rounded-pill m-2" to="/Diagnostics">Діагностувати</NavLink>
          <NavLink className="btn btn-warning rounded-pill" to="/Сontact">Наше розташування</NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 " src={`${process.env.PUBLIC_URL}/img/bg3.jpg`} alt="Mazda rx 8 rest мазда " />
        <Carousel.Caption>
          <h3>Досвід і якість</h3>
          <p>Сервіс професійних, надійних і ефективних послуг з ремонту автомобілів.</p>
          <NavLink className="btn btn-danger rounded-pill m-2" to="/Services">Наші послуги</NavLink>
          <NavLink className="btn btn-warning rounded-pill" to="/Сontact">Наше розташування</NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 " src={`${process.env.PUBLIC_URL}/img/bg2.jpg`} alt="Mazda rx 8 rest мазда " />
        <Carousel.Caption>
          <h3>Гарантія</h3>
          <p>Даємо гарантію на роботу та комплектуючі 6 місяців.</p>
          <NavLink className="btn btn-danger rounded-pill m-2" to="/Services">Наші послуги</NavLink>
          <NavLink className="btn btn-warning rounded-pill" to="/Сontact">Наше розташування</NavLink>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
};

export default Banner;

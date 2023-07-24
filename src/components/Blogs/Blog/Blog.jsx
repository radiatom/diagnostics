import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { NavLink } from "react-router-dom";

const Blog = ({ img, title, text, navLink }) => {
    const [style,setStyle]=useState({})//сетаємо стиль
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }//створюємо рандомний колір
        setStyle({'background-color':color,'transition': 'all 2s',}) ;
      }
      useEffect(() => {
          setInterval(getRandomColor,2000)//міняємо стиль через деякий інтервал
      }, []);
    return (
        <div className="blog">
            <div>
                  <NavLink to={navLink}>
                      <img src={img} alt="Blog" />
                  </NavLink>
                  <NavLink to={navLink}>
                      <h5>{title}</h5>
                  </NavLink>
                  <p>{text}</p>
            </div>
            <NavLink to={navLink} >
                <button className='blog__button btnY' style={style} >Читати</button>
            </NavLink>
        </div>
    );
};

export default Blog;

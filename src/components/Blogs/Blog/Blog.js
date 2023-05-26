import React from "react";
import "./Blog.scss";
import { NavLink } from "react-router-dom";

const Blog = ({ img, title, text, navLink }) => {
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
                <button className='btnY'>Читати</button>
            </NavLink>
        </div>
    );
};

export default Blog;

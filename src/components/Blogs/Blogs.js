import React from 'react';
import { NavLink } from 'react-router-dom';
import './Blogs.css';
import altFoto from "./../../img/alt4.jpg"
import stFoto from "./../../img/st1.jpg"
import chFoto from "./../../img/acu1.jpg"


const Blogs = () => {
   return (
      <div>
         <h1 className='text-center mt-5 '>Наші статті</h1>
         <section className="blog-area pb-5 text-center">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-8 col-sm-10">
                     <div className="single-blog blog-style-one">
                        <div className="blog-image">
                           <a href="/"><img src={stFoto} alt="Blog"/></a>
                        </div>
                        <div className="blog-content">
                           <h5 className="blog-title"><a href="/">Будова стартера</a></h5>
                           <p className="text">Ця стаття описує будову стартера.</p>
                           <NavLink to="/"><button className="btn btn-warning" >Читати</button></NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-8 col-sm-10">
                     <div className="single-blog blog-style-one">
                        <div className="blog-image">
                           <a href="/" ><img src={altFoto} alt="Blog"/></a>
                        </div>
                        <div className="blog-content">
                           <h5 className="blog-title"><a href="/">Будова генератора</a> </h5>
                           <p className="text">Ця стаття описує будову генеартора.</p>
                           <NavLink to="/"><button className="btn btn-warning" >Читати</button></NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-8 col-sm-10">
                     <div className="single-blog blog-style-one">
                        <div className="blog-image">
                           <a href="/"><img src={chFoto} alt="Blog"/></a>
                        </div>
                        <div className="blog-content">
                           <h5 className="blog-title"><a href="/">Як правильно зарядити акумулятор</a></h5>
                           <p className="text">Ми розказали яким іструметом користуватись та які показники перевіряти.</p>
                           <NavLink to="/"><button className="btn btn-warning" >Читати</button></NavLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Blogs;
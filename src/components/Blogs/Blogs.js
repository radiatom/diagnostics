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
                           <NavLink to="/Starter"><img src={stFoto} alt="Blog" /></NavLink>
                        </div>
                        <div className="blog-content">
                           <NavLink to="/Starter"><h5>Будова стартера</h5></NavLink>
                           <p className="text">Ця стаття описує будову стартера, бендикса та принцип роботи.</p>
                           <NavLink to="/Starter"><button className="btn btn-warning" >Читати</button></NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-8 col-sm-10">
                     <div className="single-blog blog-style-one">
                        <div className="blog-image">
                           <NavLink to="/Alnenator"><img src={altFoto} alt="Blog" /></NavLink>
                        </div>
                        <div className="blog-content">
                           <NavLink to="/Alnenator"><h5>Будова генератора</h5></NavLink>
                           <p className="text">Ця стаття описує будову генеартора.</p>
                           <NavLink to="/Alnenator"><button className="btn btn-warning" >Читати</button></NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-8 col-sm-10">
                     <div className="single-blog blog-style-one">
                        <div className="blog-image">
                           <NavLink to="/BatteryСharging"><img src={chFoto} alt="Blog" /></NavLink>
                        </div>
                        <div className="blog-content">
                           <NavLink to="/BatteryСharging"><h5>Як правильно зарядити автомобільний акумулятор</h5></NavLink>
                           <p className="text">Hозглянемо кілька актуальних питань, які українські водії ставлять досить часто, і дамо на них відповіді.</p>
                           <NavLink to="/BatteryСharging"><button className="btn btn-warning" >Читати</button></NavLink>
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
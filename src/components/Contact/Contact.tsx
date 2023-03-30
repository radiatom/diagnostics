import React from 'react';
import './Contact.css';
import s from "./Contact.module.css"
// import img1 from "./../../img/map2.png"
import RoadFoto from './RoadFoto/RoadFoto';
const img1 = `${process.env.PUBLIC_URL}/img/map2.png`


const Contact = () => {

   return (
      <div id='contact'>
         <section className="contact-area" >
            <h2 className='text-center p-4 '>Контактна інформація</h2>
            <div className="container">
               <div className='container text-center'>
                  <img className={s.img} src={img1} alt="viniko вініко" />
               </div>
               <div className="contact-info">
                  <ul className="info">
                     <li>
                        <div className="single-info">
                           <div className="info-icon">
                              <i className="lni lni-phone-set"></i>
                           </div>
                           <div className="info-content">
                              <p className="text">+38 (097) 93 43 392</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div className="single-info">
                           <div className="info-icon">
                              <i className="lni lni-map-marker"></i>
                           </div>
                           <div className="info-content">
                              <p className="text">
                                 Територіально м.Луцьк, біля заводу ModernExpo, точна адреса: <a href="https://www.google.com/maps/place/Viniko,+Sto,+Remont+Startera+I+Heneratora,+Perevirka+Akumulyatora,+Elektryka+Prychepa+I+Avto/@50.7438413,25.3926916,169m/data=!3m1!1e3!4m6!3m5!1s0x47259b394f792cd9:0x636c590930856bef!8m2!3d50.7437386!4d25.393043!16s%2Fg%2F11c6rxnyx0?hl=en"> с. Струмівка вул. Рівненська 8.</a>
                              </p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div className="single-info">
                           <div className="info-icon">
                              <i className="lni lni-phone"></i>
                           </div>
                           <div className="info-content">
                              <p className="text"><a href="https://www.google.com/maps/place/Viniko,+Sto,+Remont+Startera+I+Heneratora,+Perevirka+Akumulyatora,+Elektryka+Prychepa+I+Avto/@50.7438413,25.3926916,169m/data=!3m1!1e3!4m6!3m5!1s0x47259b394f792cd9:0x636c590930856bef!8m2!3d50.7437386!4d25.393043!16s%2Fg%2F11c6rxnyx0?hl=en">GoogleMaps</a></p>
                           </div>
                        </div>

                     </li>

                     <div className="info-content">
                        <p className="text">Support email: viniko@meta.ua</p>
                        <p className="text">Support telegram:  @Radiatom</p>
                     </div>
                  </ul>
                  {/* <ul className="social mt-5">
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="lni lni-facebook-filled"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="lni lni-twitter-original"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="lni lni-instagram-original"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="lni lni-linkedin-original"></i>
                              </a>
                           </li>
                        </ul> */}
               </div>
            </div>
               <RoadFoto/>
         </section>
      </div>
   );
};

export default Contact;
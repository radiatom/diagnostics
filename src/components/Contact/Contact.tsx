import React from 'react';
import './Contact.css';
import s from "./Contact.module.css"
import RoadFoto from './RoadFoto/RoadFoto';


const Contact = () => {

   return (
      <div id='contact'>
         <section className="contact-area" >
            <h2 className='text-center p-4 '>Контактна інформація</h2>
            <div className="container">
               <div className={`container text-center ${s.img}`}>
                  <iframe className={s.mapContainer} title='0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6003.000204132295!2d25.390563008148185!3d50.7420016240818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47259b394f792cd9%3A0x636c590930856bef!2sViniko%2C%20Sto%2C%20Remont%20Startera%20I%20Heneratora%2C%20Perevirka%20Akumulyatora%2C%20Elektryka%20Prychepa%20I%20Avto!5e1!3m2!1sen!2sua!4v1680589393424!5m2!1sen!2sua" loading="lazy"></iframe>
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
                     <p className="text">Email: viniko@meta.ua</p>


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
            <RoadFoto />
            <ul className="info text-center">
               <div className="info-content">
                  <p className="text">Support email: viniko@meta.ua</p>
                  <p className="text">Support telegram:  @Radiatom</p>
               </div>
            </ul>
         </section>
      </div>
   );
};

export default Contact;
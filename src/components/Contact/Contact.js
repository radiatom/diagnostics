import React from 'react';
// import Cta from '../Home/Cta/Cta';
import './Contact.css';

const Contact = () => {
   return (
      <div id='contact'>

         <section className="contact-area" >
            <h1 className='text-center p-4 heading'>Контактна інформація</h1>
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-1">
                     <div className="contact-info">
                        <ul className="info">
                           <li>
                              <div className="single-info">
                                 <div className="info-icon">
                                    <i className="lni lni-map-marker"></i>
                                 </div>
                                 <div className="info-content">
                                    <p className="text">
                                       Madison Street, NewYork, USA
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
                                    <p className="text">+61 (8) 8234 3555</p>
                                 </div>
                              </div>

                           </li>
                           <li>
                              <div className="single-info">
                                 <div className="info-icon">
                                    <i className="lni lni-phone-set"></i>
                                 </div>
                                 <div className="info-content">
                                    <p className="text">+61 (8) 8234 3555</p>
                                 </div>
                              </div>

                           </li>
                           <li>
                              <div className="single-info">
                                 <div className="info-icon">
                                    <i className="lni lni-envelope"></i>
                                 </div>
                                 <div className="info-content">
                                    <p className="text">Support: telegram @Radiatom</p>
                                 </div>
                              </div>

                           </li>
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
               </div>

            </div>
         </section>
      </div>
   );
};

export default Contact;
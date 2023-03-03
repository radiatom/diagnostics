import React from 'react';
// import Cta from '../Home/Cta/Cta';
import './Contact.css';

const Contact = () => {
   return (
      <div id='contact'>

         <section class="contact-area" >
            <h1 className='text-center p-4 heading'>Контактна інформація</h1>
            <div class="container">
               <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-1">
                     <div class="contact-info">
                        <ul class="info">
                           <li>
                              <div class="single-info">
                                 <div class="info-icon">
                                    <i class="lni lni-map-marker"></i>
                                 </div>
                                 <div class="info-content">
                                    <p class="text">
                                       Madison Street, NewYork, USA
                                    </p>
                                 </div>
                              </div>

                           </li>
                           <li>
                              <div class="single-info">
                                 <div class="info-icon">
                                    <i class="lni lni-phone"></i>
                                 </div>
                                 <div class="info-content">
                                    <p class="text">+61 (8) 8234 3555</p>
                                 </div>
                              </div>

                           </li>
                           <li>
                              <div class="single-info">
                                 <div class="info-icon">
                                    <i class="lni lni-phone-set"></i>
                                 </div>
                                 <div class="info-content">
                                    <p class="text">+61 (8) 8234 3555</p>
                                 </div>
                              </div>

                           </li>
                           <li>
                              <div class="single-info">
                                 <div class="info-icon">
                                    <i class="lni lni-envelope"></i>
                                 </div>
                                 <div class="info-content">
                                    <p class="text">Support: telegram @Radiatom</p>
                                 </div>
                              </div>

                           </li>
                        </ul>
                        <ul class="social mt-5">
                           <li>
                              <a href="javascript:void(0)">
                                 <i class="lni lni-facebook-filled"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i class="lni lni-twitter-original"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i class="lni lni-instagram-original"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i class="lni lni-linkedin-original"></i>
                              </a>
                           </li>
                        </ul>
                     </div>

                  </div>
               </div>

            </div>
         </section>
      </div>
   );
};

export default Contact;
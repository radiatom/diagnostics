import React from 'react';
import s from "./RoadFoto.module.css"
import img1 from './../../../img/map1.png'
import img2 from './../../../img/map2.png'
import img3 from './../../../img/map3.png'
import img4 from './../../../img/galery5.jpg'
import img5 from './../../../img/galery6.jpg'
import img6 from './../../../img/galery7.jpg'


const RoadFoto = (props) => {
      return (
            <div className="container">
                  <div className='container text-center'>
                        <h2 className=' p-4 '>Як до нас доїхати?</h2>
                        <div className={s.RoadFoto}>
                              <div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel">
                                    <div class="carousel-inner ">
                                          <div class="carousel-item active ">
                                                <img src={img1} class="d-block w-100" alt="viniko" />
                                          </div>
                                          <div class="carousel-item">
                                                <img src={img2} class="d-block w-100" alt="viniko" />
                                          </div>
                                          <div class="carousel-item">
                                                <img src={img3} class="d-block w-100" alt="viniko" />
                                          </div>
                                          <div class="carousel-item">
                                                <img src={img4} class="d-block w-100" alt="viniko" />
                                          </div>
                                          <div class="carousel-item">
                                                <img src={img5} class="d-block w-100" alt="viniko" />
                                          </div>
                                          <div class="carousel-item">
                                                <img src={img6} class="d-block w-100" alt="viniko" />
                                          </div>
                                          {/* в окремий компонент не винести бо треба щоб тут був class="carousel-item active", 
                        тому скоротити можн абуде 1 строчку замість одної строчки, тому це не логічно */}
                                    </div>
                                    <button class={`carousel-control-prev ${s.carouselControlPrev}`} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                          <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class={`carousel-control-next ${s.carouselControlNext}`} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                          <span class="visually-hidden">Next</span>
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default RoadFoto;
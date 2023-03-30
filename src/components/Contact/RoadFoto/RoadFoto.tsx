import React from 'react';
import s from "./RoadFoto.module.css"
// import img1 from './../../../img/map1.png'
// import img2 from './../../../img/map2.png'
// import img3 from './../../../img/map3.png'
// import img4 from './../../../img/galery5.jpg'
// import img5 from './../../../img/galery6.jpg'
// import img6 from './../../../img/galery7.jpg'
const img1 = `${process.env.PUBLIC_URL}/img/map1.png`
const img2 = `${process.env.PUBLIC_URL}/img/map2.png`
const img3 = `${process.env.PUBLIC_URL}/img/map3.png`
const img4 = `${process.env.PUBLIC_URL}/img/galery5.jpg`
const img5 = `${process.env.PUBLIC_URL}/img/galery6.jpg`
const img6 = `${process.env.PUBLIC_URL}/img/galery7.jpg`



const RoadFoto = () => {
      return (
            <div className="container">
                  <div className='container text-center'>
                        <h2 className=' p-4 '>Як до нас доїхати? Слайди:</h2>
                        <div className={s.RoadFoto}>
                              <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
                                    <div className="carousel-inner ">
                                          <div className="carousel-item active ">
                                                <img src={img1} className="d-block w-100" alt="viniko вініко" />
                                          </div>
                                          <div className="carousel-item">
                                                <img src={img2} className="d-block w-100" alt="viniko вініко" />
                                          </div>
                                          <div className="carousel-item">
                                                <img src={img3} className="d-block w-100" alt="viniko вініко" />
                                          </div>
                                          <div className="carousel-item">
                                                <img src={img4} className="d-block w-100" alt="viniko вініко" />
                                          </div>
                                          <div className="carousel-item">
                                                <img src={img5} className="d-block w-100" alt="viniko вініко" />
                                          </div>
                                          <div className="carousel-item">
                                                <img src={img6} className="d-block w-100" alt="viniko вініко" />
                                          </div>
                                          {/* в окремий компонент не винести бо треба щоб тут був class="carousel-item active", 
                        тому скоротити можн абуде 1 строчку замість одної строчки, тому це не логічно */}
                                    </div>
                                    <button className={`carousel-control-prev ${s.carouselControlPrev}`} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                          <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className={`carousel-control-next ${s.carouselControlNext}`} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                          <span className="visually-hidden">Next</span>
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default RoadFoto;
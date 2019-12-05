import React from 'react';
import Swiper from 'react-id-swiper';
// Version >= 2.4.0
import 'swiper/css/swiper.css';

const Aparatologia = () => {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }
    return (
        <div className="fondo  flex-column justify-content-center align-items-center">
        <h2 className="col-6 text-light">Aparatología</h2>
      <Swiper {...params}>
         <div className="imgAparatologia col-8 d-flex justify-content-center align-items-center" style={{ backgroundImage:"url('images/equipo1.jpg')"}}>
                 <div className="container">
                     <div className="row">
                         <div className="col-12">
                            <h2 className="display-6 font-weight-bold text-light">
                                 Equipo de.........
                            </h2>
                            <div className="mi-boton w-auto" id="effect-button">
                                    <div id="circle"></div>
                                    <a href="#!">Caracteristicas...</a>
                            </div>
                            
                         </div>
                     </div>
                 </div>
             </div>
                 <div className="imgAparatologia col-6 d-flex justify-content-center align-items-center" style={{ backgroundImage:"url('../../images/equipo2.jpg')"}}>
                   <div className="container">
                     <div className="row">
                         <div className="col-12">
                             <h2 className="display-6 font-weight-bold text-light">
                                 Sala masaje....
                             </h2>
                             <div class="mi-boton w-auto" id="effect-button">
                                    <div id="circle"></div>
                                    <a href="#!">Caracteristicas...</a>
                            </div>
                         </div>
                     </div>
                 </div>
                 </div>
                  <div 
                    className="imgAparatologia col-6 d-flex justify-content-center align-items-center" style={{ backgroundImage:"url('../../images/equipo3.jpg')"}}>
                    <div className="container">
                     <div className="row">
                         <div className="col-12">
                             <h2 className="display-6 font-weight-bold text-light">
                                 Pilates en grupo
                             </h2>
                             <div class="mi-boton w-auto" id="effect-button">
                                    <div id="circle"></div>
                                    <a href="#!">Ver horarios</a>
                            </div>
                         </div>
                     </div>
                 </div>
                  </div>
                   <div className="imgAparatologia col-6 d-flex justify-content-center align-items-center" style={{ backgroundImage:"url('../images/equipo5.jpg')"}}>
                     <div className="container">
                     <div className="row">
                         <div className="col-12">
                             <h2 className="display-6 font-weight-bold text-light">
                                 Pilates personalizado
                             </h2>
                            <div class="mi-boton w-auto" id="effect-button">
                                    <div id="circle"></div>
                                    <a href="#!">¿Como es?</a>
                            </div>
                         </div>
                     </div>
                 </div>
                   </div>
                   <div className="imgAparatologia col-6 d-flex justify-content-center align-items-center" style={{ backgroundImage:"url('../images/equipo4.jpg')"}}>
                     <div className="container">
                     <div className="row">
                         <div className="col-12">
                             <h2 className="display-6 font-weight-bold text-light">
                                 Fisioterápia Avanzada
                             </h2>
                             <div class="mi-boton w-auto" id="effect-button">
                                    <div id="circle"></div>
                                    <a href="#!">Descubrela</a>
                            </div>
                         </div>
                     </div>
                 </div>
                   </div>
                     <div className="imgAparatologia col-6 d-flex justify-content-center align-items-center" style={{ backgroundImage:"url('../images/equipo6.jpg')"}}>
                        <div className="container">
                        <div className="row">
                         <div className="col-12">
                             <h2 className="display-6 font-weight-bold text-light">
                                 Podología
                             </h2>
                              <div class="mi-boton w-auto" id="effect-button">
                                    <div id="circle"></div>
                                    <a href="#!">Pies saludables</a>
                            </div>  
                        </div>
                     </div>
                 </div>
                </div>
      </Swiper>
      </div>
    )
  };
  export default Aparatologia;
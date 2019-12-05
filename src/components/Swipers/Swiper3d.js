import React from 'react';
import Swiper from 'react-id-swiper';

const Swiper3d = () => {
       const params = {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      }
    }

    return (
        <div className="container">
          <div className="row">
            <div className="profesionales-swiper-container d-flex flex-column">
              <div className="profesionales-swiper-wrapper">
                <Swiper  {...params}>  
                     <div style={{ background:"url('../images/fondo-slide-1.jpg') no-repeat center top",backgroundSize: 'cover',
            overflow: 'hidden',
                        }}>
                            <div className="card m-1 mb-0 bg-transparent border-0" style={{width:"50%", height:"80%"}}>
                              <div className="card-header display-4 text-white-50">Diana Sanis</div>
                              <div className="card-body">
                                <h4 className="card-title text-white">Fisioterapeuta</h4>
                                <p className="card-text text-white-50">Titulada en Fisioterapia.</p>
                                <p className="card-text text-white-50">Dilatada esperiencia.</p>
                                <p className="card-text text-white-50">Diplomatura por la universidad de ...</p>
                                <p className="card-text text-white-50">Titulada en Fisioterapia.</p>
                                <p className="card-text text-white-50">Titulada en Fisioterapia.</p>
                                

                              </div>
                            </div>
                      </div>
                       <div style={{ background:"url('../images/fondo-slide-3.jpg') no-repeat center top",backgroundSize: 'cover',
            overflow: 'hidden',
                        }}>
                            <div className="card m-1 mb-0 bg-transparent border-0" style={{width:"50%", height:"80%"}}>
                              <div className="card-header display-4 text-black-50">Ismael Sanis</div>
                              <div className="card-body">
                                <h4 className="card-title text-dark">Quinesiologo</h4>
                                <p className="card-text text-black-50">Titulado en Fisioterapia.</p>
                                <p className="card-text text-black-50">Dilatada esperiencia.</p>
                                <p className="card-text text-black-50">Certificado en Fisioterapia.</p>
                                <p className="card-text text-black-50">Ejerciendo desde.</p>
                                <p className="card-text text-black-50">Titulada en Fisioterapia.</p>
                                

                              </div>
                            </div>
                      </div>
                    <div> <img width="100%" height="100%"  src="../images/fondo-slide-2.jpg" alt=""/></div>
                    <div> <img width="100%" height="100%"  src="../images/fondo-slide-3.jpg" alt=""/></div>
                </Swiper>
              </div>
          </div>
          </div>
        </div>
    )
}
  export default Swiper3d;
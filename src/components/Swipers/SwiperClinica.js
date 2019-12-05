import React from 'react'

import Swiper from 'react-id-swiper';
// Version >= 2.4.0
import 'swiper/css/swiper.css';

const SwiperClinica = () => {

   const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay:5000,
        disableOnInteraction: true
      },
    pagination: {
      el: '.swiper-pagination',
      //type: 'progressbar',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    speed:1000,
    effect:"fade",
    grabCursor:true,
    keyboard:{
      enabled:true,
      onlyInViewport:true
    }
  }
    
    return (
      <section id="SwiperClinica">
       <Swiper {...params } >
             <div className="imgClinica text-center" style={{ backgroundImage:"url('../images/fondo_sanis.jpg')",}}>
               <div className="capa-translucida h-100 w-100">
                 <div className="container h-100">
                     <div className="row h-75">
                         <div className="col-12 d-flex flex-column text-md-left mt-5">
                            <h1 className="display-4 font-weight-bold mt-sm-5 text-light">
                                Tu SALUD en buenas manos.
                            </h1>
                            <hr className="bg-light w-100"/>
                            <h6 className="mb-4 text-light">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                              veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                              molestiae iste.
                            </h6>
          
                              <a href="#!" className="btn btn-outline-light  text-light  font-weight-bold d-block mt-auto">Reservar cita</a>
                           
                         </div>
                     </div>
                 </div>
                </div>
             </div>
             <div className="imgClinica text-center" style={{ backgroundImage:"url('../images/clinica1.jpg')",}}>
               <div className="capa-translucida h-100 w-100">
                 <div className="container h-100">
                     <div className="row h-75">
                         <div className="col-12 d-flex flex-column text-md-left mt-5">
                            <h1 className="display-4 font-weight-bold mt-sm-5 text-light">
                                Tu SALUD en buenas manos.
                            </h1>
                            <hr className="bg-light w-100"/>
                            <h6 className="mb-4 text-light">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                              veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                              molestiae iste.
                            </h6>
          
                              <a href="#!" className="btn btn-outline-light  text-light  font-weight-bold d-block mt-auto">Reservar cita</a>
                           
                         </div>
                     </div>
                 </div>
                </div>
             </div>
             <div className="imgClinica text-center" style={{ backgroundImage:"url('../images/clinica2.jpg')",}}>
               <div className="capa-translucida h-100 w-100">
                 <div className="container h-100">
                     <div className="row h-75">
                         <div className="col-12 d-flex flex-column text-md-left mt-5">
                            <h1 className="display-4 font-weight-bold mt-sm-5 text-light">
                                Tu SALUD en buenas manos.
                            </h1>
                            <hr className="bg-light w-100"/>
                            <h6 className="mb-4 text-light">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                              veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                              molestiae iste.
                            </h6>
          
                              <a href="#!" className="btn btn-outline-light  text-light  font-weight-bold d-block mt-auto">Reservar cita</a>
                           
                         </div>
                     </div>
                 </div>
                </div>
             </div>
             <div className="imgClinica text-center" style={{ backgroundImage:"url('../images/clinica4.jpg')",}}>
               <div className="capa-translucida h-100 w-100">
                 <div className="container h-100">
                     <div className="row h-75">
                         <div className="col-12 d-flex flex-column text-md-left mt-5">
                            <h1 className="display-4 font-weight-bold mt-sm-5 text-light">
                                Tu SALUD en buenas manos.
                            </h1>
                            <hr className="bg-light w-100"/>
                            <h6 className="mb-4 text-light">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                              veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                              molestiae iste.
                            </h6>
          
                              <a href="#!" className="btn btn-outline-light  text-light  font-weight-bold d-block mt-auto">Reservar cita</a>
                           
                         </div>
                     </div>
                 </div>
                </div>
             </div>
     </Swiper>
     </section> 
     
        
        );
}
 
export default SwiperClinica;
import React from 'react'
import { Link } from 'react-router-dom';
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
             <div className="imgClinica" style={{ backgroundImage:"url('../images/fondo_sanis.jpg')",}}>
               <div className="capa-translucida h-100 w-100">
                 <div className="container h-100">
                     <div className="row h-75">
                         <div className="col-12 d-flex flex-column justify-content-center text-center">
                            <div className="tituloInicio text-white">
                                TU <span className="tituloPlus text-primary font-weight-bold">SALUD</span> EN <br/>BUENAS MANOS
                            </div>
                            <Link to={"./Contacto"} className="btn btn-outline-light  text-light  font-weight-bold d-block mt-auto">Reservar cita</Link>
                         </div>
                     </div>
                 </div>
                </div>
             </div>
             <div className="imgClinica" style={{ backgroundImage:"url('../images/clinica2.jpg')",}}>
               <div className="capa-translucida h-100 w-100">
                 <div className="container h-100">
                     <div className="row h-75">
                         <div className="col-12 d-flex flex-column  justify-content-center text-md-right">
                            <div className="titulo text-white">
                                 UN EQUIPO DE EXPERTOS PENSANDO EN TU <br/><span className="tituloPlus text-primary font-weight-bold">BIENESTAR</span>
                            </div>
                            <Link to={"./Contacto"} className="btn btn-outline-light  text-light  font-weight-bold d-block mt-auto">Reservar cita</Link>
                         </div>
                     </div>
                 </div>
                </div>
             </div>
             <div className="imgClinica" style={{ backgroundImage:"url('../images/clinica1.jpg')",}}>
               <div className="capa-translucida h-100 w-100">
                 <div className="container h-100">
                     <div className="row h-75">
                         
                         <div className="col-12 d-flex flex-column  justify-content-center text-md-right">
                            <div className="titulo text-white">
                                 MÉTODOS  INOVADORES  TE  DEVOLVERÁN  TU<br/><span className="tituloPlus text-primary font-weight-bold text-md-right"> VITALIDAD</span>
                            </div>
                            <Link to={"./Contacto"} className="btn btn-outline-light  text-light  font-weight-bold d-block mt-auto">Reservar cita</Link>
                         </div>
                    
                     </div>
                 </div>
                </div>
             </div>
             <div className="imgClinica" style={{ backgroundImage:"url('../images/clinica4.jpg')",}}>
               <div className="capa-translucida h-100 w-100">
                 <div className="container h-100">
                     <div className="row h-75">
                         <div className="col-12 d-flex flex-column text-md-left justify-content-center">
                            <div className="titulo display-4 text-white">
                                SOMOS TU ELECCIÓN MÁS <span className="tituloPlus display-3 text-primary font-weight-bold">SALUDABLE</span> <br/>NO LO DUDES.
                            </div>
                            <Link to={"./Contacto"} className="btn btn-outline-light  text-light  font-weight-bold d-block mt-auto">Reservar cita</Link>
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
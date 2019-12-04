import React, { Fragment } from 'react';
import Swiper from 'react-id-swiper';


const Servicios = () => { 
    
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
        <Fragment>
            
            <Swiper  {...params}>  
                
                <div className="imgClinica" style={{ backgroundImage:"url('../images/fondo_sanis.jpg')",}}></div>
                 <div className="imgClinica" style={{ backgroundImage:"url('../images/massage.jpg')",}}></div>
                  <div className="imgClinica" style={{ backgroundImage:"url('../images/massage.jpg')",}}></div>
                   <div className="imgClinica" style={{ backgroundImage:"url('../images/massage.jpg')",}}></div>
            </Swiper>
        </Fragment>
    )
}

export default Servicios;


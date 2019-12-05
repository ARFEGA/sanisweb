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
        
            <Swiper  {...params}>  
                <div> <img width="100%" height="100%" src="../images/fondo-slide-1.jpg" alt=""/></div>
                <div> <img width="100%" height="100%"  src="../images/fondo-slide-2.jpg" alt=""/></div>
                <div> <img width="100%" height="100%"  src="../images/fondo-slide-3.jpg" alt=""/></div>
                <div> <img width="100%" height="100%"  src="../images/fondo-slide-1.jpg" alt=""/></div>
            </Swiper>
    
    )
}
  export default Swiper3d;
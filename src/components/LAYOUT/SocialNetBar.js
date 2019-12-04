import React from 'react'

const SocialNetBar = ({infonegocio}) => {
    const {direccion,poblacion,cp,provincia,twitter } = infonegocio
    const situacion = `${direccion}, ${poblacion}, ${cp}, ${provincia}` ; 
    return ( 
        <section id="social-net-bar" className="bg-primary py-2 text-center">
            <div className="container text-light font-weight-bold">
                <div className="row justify-content-sm-between align-items-sm-center">
                    <div className="col-12 col-sm-6">
    <i className="fas fa-map-marked-alt mr-2"></i><span>{situacion}</span>
                    </div>
                    <div className="col-12 col-sm-auto">
                        <ul className="redes-sociales list-unstyled d-flex justify-content-center mb-0">
                            <li><a href={twitter}><i className="fab fa-twitter"></i></a></li>
                            <li><a href="!#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="www.google.com" target="_blank"><i className="fab fa-google"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SocialNetBar;
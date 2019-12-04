import React from 'react'
import logo from './../../images/logoSanis.svg'



const InfoContacto = ({auth,whatsapp}) => {
   
    //console.log(infonegocio[0].email)
    return ( 
        <section id="info-contacto" className="d-none d-md-block py-3">
            <div className="container">
                <div className="row justify-content-md-between">
                    <div className="col-auto">
                        <a href="!#">
                            <img src={logo} alt="Logo del sitio" width="150"/>
                        </a>
                    </div>
                    <div className="col-auto align-self-center ml-md-auto">
    <i className="fab fa-whatsapp-square fa-2x align-middle text-info"><span className="font-weight-bold h4 ml-2 text-info">{whatsapp}</span></i>
                    </div>
                    <div className="col-auto align-self-center">
                        <i className="fas fa-envelope fa-2x align-middle text-info"><span className="font-weight-bold h4 ml-2 text-info">{auth.email}</span></i>
                    </div>
                </div>
            </div>

        </section>
     );
    }
export default InfoContacto;
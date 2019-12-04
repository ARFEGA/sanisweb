import React from 'react'

const ImputGroup = () => {
    return ( 
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <form action="" className="border rounded bg-light p-3 mt-3">
                        <h5 className="d-block">Datos contacto:</h5>
                        <div className="form-group">
                            <div className="input-group py-1">
                                <div className="input-group-prepend"><span className="input-group-text">Nombre:</span></div>    
                                <input type="text" className="form-control" id="nombre" name="nombre"/>
                            </div>
                            <div className="input-group">
                                 <div className="input-group-preppend"><span className="input-group-text"><i class="fas fa-weight"></i></span></div>
                                <input type="text" className="form-control" id="peso" name="peso"/>
                                <div className="input-group-append"><span className="input-group-text">,00</span></div>
                            </div>
                        </div>   
                        
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary btn-block" >Enviar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>  );
}
 
export default ImputGroup;
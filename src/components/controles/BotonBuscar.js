import React from 'react'


const BotonBuscar= () => {
    return ( 
        <div className="container">
            <div className="row justify-contet-center">
               <div className="col-12 col-lg-6">
                    <form action="" className="border rounded bg-light mt-3 p-3">
                        <div className="form-group">
                            <h4>Buscar:</h4>
                            <div className="input-group">
                                <input type="text" className="form-control" id="search" name="search"/> 
                                <div className="input-group-append"><button type= "submit" className="btn btn-secondary"><i class="fas fa-search"></i></button></div>
                            </div>
                        </div>
                    </form>
              </div>
            </div>
        </div>
     );
}
 
export default BotonBuscar;

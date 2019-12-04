import React from 'react'


const CheckBox = () => {
    return ( <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <form action="" className="border rounded bg-light p-3 mt-3">
                        <div className="form-group">
                            <h5 className="d-block">Conocimientos Web:</h5>
                            <div className="form-check form-check-inline">
                                <label for="css" className="form-check-label"> CSS </label>
                                <input type="checkbox" className="form-check-input" name="checkbox" id="css" value="css"/>
                            </div>
                            <div className="form-check form-check-inline">
                                <label for="html" className="form-check-label"> HTML </label>
                                <input type="checkbox" className="form-check-input" name="checkbox" id="html" value="html"/>
                            </div>
                            <div className="form-check form-check-inline">
                                <label for="bootstrap" className="form-check-label"> BOOTSTRAP </label>
                                <input type="checkbox" className="form-check-input" name="checkbox" id="bootstrap" value="bootstrap"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary btn-block" >Enviar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div> );
}
 
export default CheckBox;
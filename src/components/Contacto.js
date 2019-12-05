import React, { Component} from 'react';
import axios from 'axios';
import MiAlert from './MiAlert';


class Contacto extends Component {
    state = { 
        from:'',
        name:'',
        emailTo:'sanisvelilla@gmail.com',
        asunto:'Seleccione asunto',
        msg:'',
        error:null,
        date:Date().toLocaleString()
     }
    updateState = e =>{this.setState({[e.target.name] : [e.target.name]==="asunto"?e.target.text:e.target.value})}


    enviarEmail = async () => {
        const {from,name,emailTo,asunto,msg,date} = this.state;
        const data = {from,name,emailTo,asunto,msg,date}
        const urlFunction ="https://europe-west1-web-sanis.cloudfunctions.net/sendMail"//?dest=${emailTo}&
//from=${name}${' '}<${email}>&subject=${asunto}&text=${msg}`
        await axios.post(urlFunction,data)
         .then(result => {
             console.log(result.data);
             this.limpiarState()
             this.setState({error:false})
            
        })
        .catch(error =>{
            this.setState({error:true})
        })
         this.props.history.push('/contacto');
    }

    submitForm = e =>{
        e.preventDefault();
          this.enviarEmail();
    }
    limpiarState = e =>{
        this.setState({from:'',name:'',asunto:'Seleccione asunto',msg:''})
    }
    
    render() { 
        const {error} = this.state;
       
        return (  
                <div className="contacto">
                    <section className="seccion-arriba-contacto d-flex justify-content-center" >
                            <div className="container text-center d-flex flex-column justify-content-center p-0 m-0">
                                <div className="eslogan h1 text-light">Contacto</div>
                                <div className="esloganSub h3 text-light">Solicita información de manera rápida a través de nuestro formulario</div>           
                            </div>       
                    </section>
                    <section className="ruta py-2">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 text-right">
                                    <a href="index.html">Inicio</a> / Contacto
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="formulario px-5 text-light px-2 py-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-7">
                                {error? <MiAlert
                                    success={false}
                                    msgHead={"Error de envío."}
                                    msg={"El e-mail no se ha podido enviar,intenteló nuevamente."}/>
                                : error===false?<MiAlert
                                    success={true}
                                    msgHead={"E-mail enviado"}
                                    msg={"El e-mail ha sido enviado, nos pondremos en contacto con usted lo antes posible"}
                            />
                            :null
                            }
                                <form onSubmit={this.submitForm}>
                                <h2 className="text-light">Formulario contacto</h2>
                                <div className="form-group row">
                                    <label className="col-12 col-md-3  col-form-label font-weight-bold" htmlFor="name">Nombre y apellidos:</label>
                                    <div className="input-group col-12 col-md-12 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fas fa-user-alt"></i>
                                                </span>
                                            </div>
                                        <input 
                                            required
                                            type="text" 
                                            className="form-control" 
                                            id="name" 
                                            name="name"  
                                            value={this.state.name} 
                                            onChange={this.updateState}/>
                                    </div>
                                </div>
                                    <div className="form-group row">
                                    <label htmlFor="from" className="col-12 col-md-2  col-form-label font-weight-bold">Email:</label>
                                        <div className="input-group col-12 col-md-12">
                                            <div className="input-group-prepend"><span className="input-group-text">
                                                <i className="fas fa-envelope"></i></span>
                                            </div>
                                            <input 
                                                required 
                                                type="email" 
                                                className="form-control" 
                                                id="from" 
                                                name="from" 
                                                value={this.state.from} 
                                                onChange={this.updateState}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="asunto" className="col-12 col-md-2  col-form-label font-weight-bold">Asunto:</label>
                                        <div className="input-group col-12 col-md-12">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-bullhorn"></i></span></div>
                                            <select required className="form-control" id="asunto" name="asunto"  value={this.state.asunto} 
                                                onChange={this.updateState}
                                                defaultValue="Seleccione asunto"
                                            >
                                                <option value="Seleccione asunto">Seleccione asunto</option>
                                                <option value="Informacion">Pedir información</option>
                                                <option value="Primera Cita">Primera Cita</option>
                                                <option value="Pedir citasucesiva">Pedir cita sucesiva</option>
                                                <option value="Anular">Anular cita</option>
                                                <option value="Queja">Queja/Reclamación</option>
                                            
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className="form-group row ">
                                    <label  className="col-12 col-md-2 font-weight-bold"><em>Prioridad:</em></label>
                                    <div className="col-12 col-md-10">
                                        <div className="form-check form-check-inline">
                                            <label for="baja" className="form-check-label mr-2">Baja</label>
                                            <input type="radio" className="form-check-input" name="radio" id="baja" value="baja" checked/>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label for="normal" className="form-check-label mr-2">Normal</label>
                                            <input type="radio" className="form-check-input" name="radio" id="normal" value="normal"/>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label for="alta" className="form-check-label mr-2">Alta</label>
                                            <input type="radio" className="form-check-input" name="radio" id="alta" value="alta"/>
                                        </div>
                                        </div>
                                </div> */}
                                    <div className="form-group row">
                                    <label htmlFor="msg" className="col-12 col-md-2  col-form-label font-weight-bold align-self-center">Su mensaje:</label>
                                    <div className="input-group col-12 col-md-12">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="far fa-comment-alt"></i></span>
                                            </div>
                                            <textarea 
                                                required 
                                                className="form-control" 
                                                id="msg" 
                                                name="msg" 
                                                rows="5"  
                                                value={this.state.msg} 
                                                onChange={this.updateState}/> 
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="mi-boton" id="effect-button">
                                            <button type="submit" className="btn text-light mb-1"  name="enviar"><i className="fas fa-paper-plane"></i> Enviar</button>    
                                        </div>
                                        <div className="mi-boton" id="effect-button">
                                            <button type="button" className="btn text-light mb-1" onClick={this.limpiarState}><i className="fas fa-broom"></i> Limpiar</button>
                                        </div>     
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5 text-left">
                                
                                    <div className="container h6 text-light">
                                        <h2 className="col-12 text-light mb-2 p-0">Donde estamos:</h2>
                                        <p className="p-0 m-0">Calle Loeches, 4
                                        Velilla de San Antonio
                                        28891-Madrid</p>
                                        <p className="p-0 m-0"><i className="h4 fab fa-whatsapp text-light bg-success rounded"></i> 666 666 66#</p>
                                         <div className="card card-cascade" >
                                      

                                            {/* <!--Card content--> */}
                                            <div className="card-body card-body-cascade text-center mx-0 my-0">
                                                {/* <!--Google map--> */}
                                                <iframe title="mapa" className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.9126834065669!2d-3.4853953495818093!3d40.368396395233354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42396e00a61c7b%3A0x9006cf7b40f97f94!2sCl%C3%ADnica%20Fisioterapia%20Sanis-Velilla!5e0!3m2!1ses!2ses!4v1575314522220!5m2!1ses!2ses" frameborder="0"></iframe>
                                            </div>
                                    </div>
                                    
                                    
                                   
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
           
       );
    }
}
 
export default Contacto;

       

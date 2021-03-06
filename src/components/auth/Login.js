import React, { Component } from 'react'
import  { firebaseConnect }  from 'react-redux-firebase'
class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    leerDatos = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    validar = e =>{
        e.preventDefault();
        const { firebase } = this.props;
        firebase.login({
            email:this.state.email,
            password:this.state.password
        }).then(result =>{
            console.log(result)
        }).catch(error =>{
            console.log(error)
        })
    }

    render() { 
    
        return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8 m-1">
                    <div class="card border-secondary my-3">
                        <div class="card-header text-center"><i className="fas fa-lock"></i> LOGIN</div>
                            <div class="card-body">
                                <form name="login" onSubmit={this.validar} >
                                    <div className="form-group">
                                        <label htmlFor="email" className="sr-only"><span className="font-weight-bold">E-mail : </span></label>
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-user"></i></span></div>
                                            <input 
                                            type="text" 
                                            id="email" 
                                            className="form-control"
                                            required
                                            onChange={this.leerDatos} 
                                            aria-describedby="ayuda-email"
                                            name="email" />
                                        </div>
                                        
                                        <small className="form-text text-mute" id="ayuda-email">Introduce tu e-mail asociado a tu cuenta.</small>
                                        
                                        <label htmlFor="password" className="sr-only"><span className="font-weight-bold">Contraseña: </span></label>
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i class="fas fa-unlock-alt"></i></span></div>
                                            <input 
                                                type="password" 
                                                id="password" 
                                                className="form-control" 
                                                name="password" 
                                                required
                                                onChange={this.leerDatos} 
                                                aria-describedby="ayuda-contraseña"/>                       
                                        </div>
                                       
                                        <small className="form-text text-mute" id="ayuda-contraseña">Mínimo 6 caracteres.</small>
                                    </div>
                                    <div className="form-group">
        <button  type="Submit" className="bn btn-primary btn-block"><i class="fas fa-sign-in-alt fa-2x"></i></button>
                                    </div>
                                </form>
                            </div>
                    </div>
            
                    </div>
            </div>
        </div> );
    }
}
 
export default firebaseConnect()(Login);
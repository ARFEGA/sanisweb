import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import InfoContacto from './InfoContacto';
import SocialNetBar from './SocialNetBar';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

// 
class Encabezado extends Component {
    state = {
        autenticado: false,
        collapse:true
    }
    toggleNavbar = ()=>{
        this.setState(
            {collapse : !this.state.collapse}
        );
    }
   
      cerrarSesion = () => {
        this.toggleNavbar()
        const { firebase } = this.props;
        firebase.logout();
    }
    //recibe props automáticamente desde compose
    static getDerivedStateFromProps(props, state) {
        const { auth } = props;
        if (auth.uid)
            return { 
                autenticado: true
            }
        else
            return { autenticado: false }
    }
    render() {
        const { autenticado,collapse } = this.state;
        const { auth, infonegocio } = this.props;
        //Esperar a que llegue información de tabla
        if(!infonegocio) return <Spinner/>
        const classDivNavBar = collapse ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classButton = collapse ? 'navbar-toggler collapsed' : 'navbar-toggler';
        const awesomeIcon = collapse ? <i className="fas fa-bars fa-2x"></i> : <i className="fas fa-sort-amount-up fa-2x"></i>

        return (
        <Fragment>
            <SocialNetBar
                infonegocio={infonegocio[0]}
            />
            {autenticado ? null :
            <InfoContacto
                auth={auth}
                whatsapp={infonegocio[0].whatsapp}
            />}
            
            <nav id="barra-menu" className="navbar navbar-expand-md navbar-dark bg-transparent shadow mb-3 mx-3 rounded">
                <nav className="navbar navbar-light shadow">
                    <span className="navbar-brand mb-0">
                        <h1 className="text-light p-0 m-0">SANIS <span className="text-light font-weight-bold" style={{fontSize:14}}>Fisioterápia</span></h1>
                    </span>
                </nav>
                 {!autenticado ? null : (
                     <Fragment>
                        <button     
                            className={classButton}
                            onClick={this.toggleNavbar}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#menu" 
                            aria-controls="menu" 
                            aria-expanded="false" 
                            aria-label="Menú principal">
                            <span>{awesomeIcon}</span>

                        </button>

                        <div className={classDivNavBar} id="menu">
                            <ul className="navbar-nav mr-auto ">
                                 <li className="nav-item mi-boton" id="effect-button">
                                     
                                    <div id="circle"></div>
                                    <Link onClick={this.toggleNavbar} to={'/'} className="nav-link 
                                    mb-1 mb-md-0 mr-md-1">Clínica</Link>
                                </li>
                                <li className="nav-item mi-boton" id="effect-button">
                                     
                                    <div id="circle"></div>
                           
                                    <Link onClick={this.toggleNavbar} to={'/servicios'} className="nav-link mb-1 mb-md-0 mr-md-1" >Servicios</Link>
                                </li>
                                <li className="nav-item mi-boton" id="effect-button">
                                     
                                    <div id="circle"></div>
                                    <Link onClick={this.toggleNavbar} to={'/profesionales'} className="nav-link mb-1 mb-md-0 mr-md-1">Nosotros</Link>
                                </li>
                                <li className="nav-item mi-boton" id="effect-button">
                                     
                                    <div id="circle"></div>
                                    <Link onClick={this.toggleNavbar} to={'/aparatologia'} className="nav-link mb-1 mb-md-0 mr-md-1">Aparatología</Link>
                                </li>
                                 <li className="nav-item mi-boton" id="effect-button">
                                     
                                    <div id="circle"></div>
                                    <Link onClick={this.toggleNavbar} to={'/mainpage'} className="nav-link mb-1 mb-md-0 mr-md-1">MainPage</Link>
                                </li>
                                 <li className="nav-item mi-boton" id="effect-button">
                                     
                                    <div id="circle"></div>
                                    <Link onClick={this.toggleNavbar} to={'/contacto'} className="nav-link mb-1 mb-md-0 mr-md-1">Contacto</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item align-self-end">
                                    <button
                                        type="button"
                                        className="btn btn-toolbar btn-warning"
                                        onClick={this.cerrarSesion}>
                                        {!autenticado?<i className="fas fa-sign-in-alt fa-1x"></i>:<i className="fas fa-sign-out-alt fa-1x"></i>}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </Fragment>) }
            </nav>
        </Fragment>
        );
    }
}


export default compose(
    firestoreConnect([
        {
            collection:'infonegocio'
        }
    ]),
    connect((state, props) => ({
        auth: state.firebase.auth,
        infonegocio: state.firestore.ordered.infonegocio
    }))
)(Encabezado)
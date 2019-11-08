import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// 
class Navbar extends Component {
    state = {
        autenticado: false
    }
    //recibe props automáticamente desde compose
    static getDerivedStateFromProps(props, state) {
        const { auth } = props;
        if (auth.uid)
            return { autenticado: true }
        else
            return { autenticado: false }
    }

    cerrarSesion = () => {
        const { firebase } = this.props;
        firebase.logout();

    }
    render() {
        const { autenticado } = this.state;
        const { auth } = this.props;
        return (

            <nav className="navbar  navbar-expand-lg navbar-dark bg-primary">
                <nav className="navbar navbar-light">
                    <span className="navbar-brand mb-0 h1">
                        Clínica Sanis
                        </span>
                </nav>
                <button     
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarColor01" 
                    aria-controls="navbarColor01" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    {!autenticado ? null : (
                        <Fragment>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Clínica</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/servicios'} className="nav-link">Servicios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/profesionales'} className="nav-link">Plantel Profesionales</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a href="#!" className="nav-link">{auth.email}</a>
                                </li>
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        className="btn btn-toolbar"
                                        onClick={this.cerrarSesion}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </Fragment>)
                    }

                </div>
            </nav>

        );
    }
}

export default compose(
    firestoreConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth
    }))
)(Navbar)
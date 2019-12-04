import React, { Fragment } from 'react';
import Login from './components/auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//REDUX
//STORE Y PROVIDER
import store from './REDUX/store';
import { Provider } from 'react-redux';

//Para redirigir al usuario en función de si está autenticado
import { UserIsAuthenticated, UserIsNotAuthenticated } from './HELPERS/auth';

//COMPONENTES

import Clinica from './components/Clinica';
import Profesionales from './components/Profesionales';
import Servicios from './components/Servicios';
import Aparatologia from './components/Aparatologia';
import Contacto from './components/Contacto';
import MainPage from './components/MainPage';
import Cookies from './components/Cookies';
//Barras
import Encabezado from './components/LAYOUT/Encabezado';



function App() {
 

  return (
      <Provider store={store}>
        <Fragment>
          
          <Router>
            <Encabezado/>
            <Switch>
              <Route exact path="/" component={UserIsAuthenticated(Clinica)}/>
              <Route exact path="/servicios" component={UserIsAuthenticated(Servicios)} />
              <Route exact path="/profesionales" component={UserIsAuthenticated(Profesionales)} />
              <Route exact path="/aparatologia" component={UserIsAuthenticated(Aparatologia)} />
              <Route exact path="/contacto" component={UserIsAuthenticated(Contacto)} />
              <Route exact path="/mainpage" component={UserIsAuthenticated(MainPage)} />
              <Route exact path="/cookies.html" component={UserIsAuthenticated(Cookies)} />
              <Route exact path="/login" component={UserIsNotAuthenticated(Login)}/>
            </Switch>
        </Router>  
      </Fragment>
    </Provider>
    
  );
}


export default App;

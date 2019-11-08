import React from 'react';
import Login from './components/auth/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
//NavBar
import Navbar from './components/LAYOUT/NavBar';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={UserIsAuthenticated(Clinica)}/>
            <Route exact path="/servicios" component={UserIsAuthenticated(Servicios)} />
            <Route exact path="/profesionales" component={UserIsAuthenticated(Profesionales)} />
            <Route exact path="/login" component={UserIsNotAuthenticated(Login)}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;

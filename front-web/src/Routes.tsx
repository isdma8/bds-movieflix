import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'; //instalar primeiro com o yarn, BrowserRouter este vai gerencias as nossas rotas, e o swith vai decidir qual rota deve usar
import Navbar from './core/components/Navbar';
import Home from './pages/Home';
import history from './core/utils/history';
import Movies from 'pages/Movies';
import { isAllowedByRole, isAuthenticated } from 'core/utils/auth';
import PrivateRoute from 'core/components/Routes/PrivateRoute';


const Routes = () => (
        
        <Router history={history}> 
            <Navbar />
            <Switch>
                    <Route 
                        path="/" exact
                    >
                        <Home />
                    </Route>
                    <PrivateRoute path="/movies" >
                        <Movies />
                    </PrivateRoute>
  
                    <Redirect from="/admin" to="/admin/products" exact/>
                    <Route path="/admin">
                        
                    </Route>
            </Switch>

        </Router>

);


export default Routes;
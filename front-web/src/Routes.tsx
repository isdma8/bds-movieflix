import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'; 
import Navbar from './core/components/Navbar';
import Home from './pages/Home';
import history from './core/utils/history';
import Movies from 'pages/Movies';
import PrivateRoute from 'core/components/Routes/PrivateRoute';
import { isAuthenticated } from 'core/utils/auth';


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
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './Components/Movies/List';

const Movies = () => {

    return (
        <div>
            
            <Switch>
                <Route path="/movies" exact>
                    <List />
                </Route>
                <Route path="/movies/:movieId">
                    <h1>Form</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default Movies;
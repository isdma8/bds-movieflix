import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Movies = () => {

    return (
        <div>
            
            <Switch>
                <Route path="/movies" exact>
                    <h1>List</h1>
                </Route>
                <Route path="/movies/:movieId">
                    <h1>Form</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default Movies;
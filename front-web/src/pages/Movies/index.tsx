import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormMovie from './Components/Movies/FormMovie';
import List from './Components/Movies/List';

const Movies = () => {

    return (
        <div>
            
            <Switch>
                <Route path="/movies" exact>
                    <List />
                </Route>
                <Route path="/movies/:movieId">
                    <FormMovie />
                </Route>
            </Switch>
        </div>
    );
}

export default Movies;
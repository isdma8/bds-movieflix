import React from 'react';
import './styles.scss';
import {ReactComponent as ImageTest} from 'core/assets/images/movietest.svg';
import { Movie } from 'core/types/Movie';

type Params = {     
    movie: Movie;
}


const MovieCard = ({movie}: Params) => {
    return (
        <div className="movie-card-container">
            <ImageTest />
            <h4>{movie.title}</h4>
            <h5>{movie.year}</h5>
            <p>{movie.subTitle}</p>

        </div>
    );
}

export default MovieCard;
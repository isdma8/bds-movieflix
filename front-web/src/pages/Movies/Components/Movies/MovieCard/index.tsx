import React from 'react';
import './styles.scss';
import { Movie } from 'core/types/Movie';

type Params = {     
    movie: Movie;
}


const MovieCard = ({movie}: Params) => {
    return (
        <div className="movie-card-container">
            <img src={movie.imgUrl} alt={movie.title} className="img-movie-card"/>
            <h4>{movie.title}</h4>
            <h5>{movie.year}</h5>
            <p>{movie.subTitle}</p>

        </div>
    );
}

export default MovieCard;
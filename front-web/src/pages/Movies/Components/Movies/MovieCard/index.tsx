import React from 'react';
import './styles.scss';
import {ReactComponent as ImageTest} from 'core/assets/images/movietest.svg';

const MovieCard = () => {
    return (
        <div className="movie-card-container">
            <ImageTest />
            <h4 className="">O Retorno do Rei</h4>
            <h5>2013</h5>
            <p>O olho do inimigo está se movendo.</p>

        </div>
    );
}

export default MovieCard;
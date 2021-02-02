import React from 'react';
import './styles.scss';

type Props = {
    children: React.ReactNode;
}

const MovieDetails = ({children}: Props) => {
    
    return (
        <div className="movie-details-container">

            {children}

        </div>
    );
}


export default MovieDetails;
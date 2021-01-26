import React from 'react';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import './styles.scss';

const List = () => {

    return (
        <div>
            <SearchBar />
            <div className="cards-container">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
            
        </div>
        

    );
}



export default List;
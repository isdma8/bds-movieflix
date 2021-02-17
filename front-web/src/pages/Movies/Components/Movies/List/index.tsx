import React, { useCallback, useEffect, useState } from 'react';
import Pagination from '../../Pagination';
import MovieCard from '../MovieCard';
import SearchBar, {FilterGenre} from '../SearchBar';
import {MoviesResponse} from 'core/types/Movie';
import './styles.scss';
import { makePrivateRequest } from 'core/utils/request';
import { Link } from 'react-router-dom';
import MovieCardLoader from '../../Loaders/MovieCardLoader';

const List = () => {
    const [activePage, setActivePage] = useState(0);

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>(); 


    const [isLoading, setIsLoading] = useState(false);

    const getGenres = useCallback((filter?: FilterGenre) => {
        const params = { 
            page: activePage,
            linesPerPage: 8,
            genreId : filter?.genreId
        }

        setIsLoading(true);
        makePrivateRequest({url: '/movies', params})
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage])

    useEffect(()=> {

        getGenres();


    }, [getGenres]);

    return (
        <div>
            <SearchBar onSearch={filter => getGenres(filter)}/>
            <div className="cards-container">
            {isLoading ? <MovieCardLoader /> : (
            moviesResponse?.content.map(movie => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                    <MovieCard movie={movie}/></Link>
                ))

            )}

            </div>
            { 
                <Pagination
                    totalPages={moviesResponse?.totalPages as number}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            }
            
        </div>
        

    );
}



export default List;
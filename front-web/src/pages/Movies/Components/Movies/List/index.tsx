import React, { useEffect, useState } from 'react';
import Pagination from '../../Pagination';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import {MoviesResponse} from 'core/types/Movie';
import './styles.scss';
import { makePrivateRequest } from 'core/utils/request';
import { Link } from 'react-router-dom';
import MovieCardLoader from '../../Loaders/MovieCardLoader';

const List = () => {
    const [activePage, setActivePage] = useState(0);

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>(); 


    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {

        const params = { 
            page: activePage,
            linesPerPage: 8
        }

        setIsLoading(true);
        makePrivateRequest({url: '/movies', params})
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })


    }, [activePage]);

    return (
        <div>
            <SearchBar />
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
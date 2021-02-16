import React, { useEffect, useState } from 'react';
import './styles.scss';
import {ReactComponent as Arrow} from 'core/assets/images/arrow-down.svg';
import Select from 'react-select';
import { makePrivateRequest} from 'core/utils/request';
import { Genre } from 'core/types/Movie';

const SearchBar = () => {

    const [isLoadingGenres, setIsLoadingGenres] = useState(false);

    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({ url: '/genres' })
            .then(response => setGenres(response.data))
            .finally(() => setIsLoadingGenres(false))
    }, []);

    console.log(genres);

 return (
    <div className="searchbar-container">
        <div className="search-box">
            
            <Select
                name="genres"
                //isLoading={isLoadingCategories} //tambem tenho aqui opção de definir um isLoading
                options={genres}
                getOptionLabel={(option: Genre) => option.name}
                getOptionValue={(option: Genre) => String(option.id)}
                className="filter-select-container"
                classNamePrefix="product-categories-select"
                placeholder="Aventura"
                inputId="Generos"
            />
            <Arrow className="ml-5"/>
        </div>
    </div>
 );
}


export default SearchBar;
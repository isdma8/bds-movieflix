import React, { useEffect, useState } from 'react';
import './styles.scss';
import {ReactComponent as Arrow} from 'core/assets/images/arrow-down.svg';
import Select from 'react-select';
import { makePrivateRequest} from 'core/utils/request';
import { Genre } from 'core/types/Movie';

export type FilterGenre = {
    genreId?: number;
}

type Props = {
    onSearch: (filter: FilterGenre) => void;
}


const SearchBar = ({onSearch}: Props) => {



    const [genres, setGenres] = useState<Genre[]>([]);//Lista de objetos



    useEffect(() => {
        makePrivateRequest({ url: '/genres' })
            .then(response => setGenres(response.data))
    }, []);

    const handleGenreChange = (genre: Genre) => {
        onSearch({genreId: genre?.id});
    }
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
                classNamePrefix="genres-select"
                placeholder="Aventura"
                inputId="Generos"
                onChange={value => handleGenreChange(value as Genre)}
                isClearable
            />
            <Arrow className="ml-5"/>
        </div>
    </div>
 );
}


export default SearchBar;
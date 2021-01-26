import React from 'react';
import './styles.scss';
import {ReactComponent as Arrow} from 'core/assets/images/arrow-down.svg';

const SearchBar = () => {
 return (
    <div className="searchbar-container">
        <div className="search-box">
            <p className="mt-2 mr-5 pr-5">Aventura</p>
            <Arrow className="ml-5"/>
        </div>
    </div>
 );
}


export default SearchBar;
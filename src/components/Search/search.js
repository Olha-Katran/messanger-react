import React from 'react';
import './search.css';

const SearchBar = (props) => {
    return (
        <form className="search-bar">
            <div className="search-bar-wrapper">
                <i className="fa-solid fa-magnifying-glass icon"/>
                <input
                    type="text"
                    placeholder="Search contact"
                    className="search-input"
                    onChange={(e) => {props.searchInputHandler(e.target.value)}}
                />
            </div>
        </form>
    )
}

export default SearchBar;
import React from 'react';

const SearchBar = (props) => {

        return (
            <form className="search-bar">
                <i className="fa-solid fa-magnifying-glass icon"></i>
                <input
                    type="text"
                    placeholder="Search contact"
                    className="search"
                    onChange={(e) => {
                        props.searchInputHandler(e.target.value)
                    }
                }
                />
            </form>
        )
}

export default SearchBar;
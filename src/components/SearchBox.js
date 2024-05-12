import React, { useState } from 'react';
import '../styles/SearchBox.css'; 

function SearchBox({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm); 
    };

    return (
        <form className='search-box' onSubmit={handleSubmit}>
            <input className='input'
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button className='button' type="submit">Search</button>
        </form>
    );
}

export default SearchBox;

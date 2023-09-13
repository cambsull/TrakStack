//Searchbar component

import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    // Handle input change
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
       }

    // Only search with enter key for now to avoid hammering API
    const handleKeyPress = (e) => { 
        if (e.key === 'Enter') {
            onSearch(searchTerm)
    }
}

    return (
        <div className={styles.searchBar}>
            <input 
                type="text" 
                placeholder="Search for tracks..." 
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
             <button onClick={() => onSearch(searchTerm)}>Search</button>
        </div>
    );
}


export default SearchBar;
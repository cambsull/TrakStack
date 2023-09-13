//Search results component

import styles from './SearchResults.module.css';

function SearchResults({ results, onResultClick }) {
    return (
        <div className={styles.resultsContainer}>
            {results.map(result => (
                <div 
                    key={result.id} 
                    className="searchResult"
                    onClick={() => onResultClick(result)}
                >
                    {result.trackName} - {result.artistName}
                </div>
            ))}
        </div>
    );
}

export default SearchResults;


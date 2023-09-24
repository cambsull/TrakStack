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
                    <div className={styles.trackContainer}>
                        <div className={styles.trackInfo}>
                            <img className={styles.albumArt} src={result.albumArt} alt="Album Art" />
                            <div>
                                <div className={styles.artistName}> {result.artistName}</div>
                                <div className={styles.albumTitle}>{result.albumTitle}</div>
                                <div className={styles.trackName}>{result.trackName}</div>
                            </div>
                        </div>
                    </div>



                </div>
            ))}
        </div>
    );
}

export default SearchResults;


//Primary root

import './App.css';
import { useState } from 'react';
import { albumArt , albumArt2, albumArt3 } from './Track/Track.js';
import Tracklist from './Tracklist/Tracklist.js';
import SubmitToSpotify from './SubmitToSpotify/SubmitToSpotify.js';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';

const mockTrackObjectsArray = [{
    id: 1,
    albumArt: albumArt,
    albumTitle: `Nerd Life`,
    artistName: `YTCracker`,
    trackName: `nerd life`,
    duration: 297
},
{
    id: 2,
    albumArt: albumArt2,
    albumTitle: `Brothers`,
    artistName: `The Black Keys`,
    trackName: `She's Long Gone`,
    duration: 187
},
{
    id: 3,
    albumArt: albumArt3,
    albumTitle: `Dark Side of the Moon`,
    artistName: `Pink Floyd`,
    trackName: `Money`,
    duration: 383 
}
]


function App() {

    //Search functionality
    const [results, setResults] = useState([]);
    
    const [tracks, setTracks] = useState(mockTrackObjectsArray);
     
    const handleSearch = (query) => {
        if (query.length <= 0) {
            setResults([]);
            return;
        }
        const filteredResults = mockTrackObjectsArray.filter(track => 
            track.trackName.toLowerCase().includes(query.toLowerCase()) ||
            track.artistName.toLowerCase().includes(query.toLowerCase()) ||
            track.albumTitle.toLowerCase().includes(query.toLowerCase()
            )
            );
                    
        setResults(filteredResults)
    }

    const handleResult = (result) => {

        if (!tracks.some(track => track.id === result.id)) {  //Check to make sure track doesn't already exist in tracklist
        setTracks(prevTracks => [...prevTracks, result])
        };
    }

    
//Rendering
    return (
<>
<div className="mainContainer">
    <div className="searchContainer">
    <div>
            <SearchBar onSearch={handleSearch} />
            <SearchResults results={results} onResultClick={handleResult} />
        </div>
     
    </div>
    <div className="tracklistContainer">
        <Tracklist tracks={tracks} setTracks={setTracks}/>
    
    <div className="submitToSpotifyContainer">
        <SubmitToSpotify />
    </div>
    </div>
</div>
</>

    )
};

export default App;

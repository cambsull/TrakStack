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
    albumTitle: `Sad Clown Cat's Greatest Hits`,
    artistName: `Sad Clown Cat`,
    trackName: `Cat Clownin'`,
    duration: 188
},
{
    id: 2,
    albumArt: albumArt2,
    albumTitle: `Waiting for a Developer Job`,
    artistName: `Self-taught Coder`,
    trackName: `I'm Sure They'll Call Any Minute Now`,
    duration: 201
},
{
    id: 3,
    albumArt: albumArt3,
    albumTitle: `Bad Fonts for Coding`,
    artistName: `Squinty Joe`,
    trackName: `Coding in Zapfino`,
    duration: 289  
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

//Primary root
//
// Notes/reminders: Save to Spotify Button, Search button
//
//
//
import './App.css';
import Track, { albumArt } from './Track/Track.js';

const mockTrackObject = {
    albumArt: albumArt,
    albumTitle: `Sad Clown Cat's Greatest Hits`,
    artistName: `Sad Clown Cat`,
    trackName: `Cat Clownin'`,
    duration: 188
};


function App() {
    return (

        <Track {...mockTrackObject} />
    )
};

export default App;

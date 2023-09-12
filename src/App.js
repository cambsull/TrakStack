//Primary root
//
// Notes/reminders: Save to Spotify Button, Search button
//
//
//
import './App.css';
import Track, { albumArt , albumArt2, albumArt3 } from './Track/Track.js';
import Tracklist from './Tracklist/Tracklist.js';

const mockTrackObjectsArray = [{
    albumArt: albumArt,
    albumTitle: `Sad Clown Cat's Greatest Hits`,
    artistName: `Sad Clown Cat`,
    trackName: `Cat Clownin'`,
    duration: 188
},
{
    albumArt: albumArt2,
    albumTitle: `Waiting for a Developer Job`,
    artistName: `Self-taught coder`,
    trackName: `I'm Sure They'll Call Any Minute Now`,
    duration: 201
},
{
    albumArt: albumArt3,
    albumTitle: `Bad Fonts for Coding`,
    artistName: `Squinty Joe`,
    trackName: `Coding in Zapfino`,
    duration: 289  
}]


function App() {
    return (

<div className="mainContainer" style={App.css}>
    <div className="searchContainer" style={App.css}>
        {/* Your search components here */}
    </div>
    <div className="tracklistContainer" style={App.css}>
        <Tracklist tracks={mockTrackObjectsArray} />
    </div>
</div>

    )
};

export default App;

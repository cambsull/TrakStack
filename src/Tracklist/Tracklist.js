//Tracklist Component

import styles from './Tracklist.module.css';
import Track from '../Track/Track.js';

function Tracklist(props) {

    const removeTrack = (trackId) => {
        props.setTracks(prevTracks => prevTracks.filter(track => track.id !== trackId));
    };

    
    return (
        <div style={styles} className="tracklist">
            {props.tracks.map((track) => <Track key={track.id} {...track} onRemove={removeTrack} /> //Map Track props to each track, spread operator to bring entire data structure along
            )}
        </div>
    )
}

export default Tracklist;


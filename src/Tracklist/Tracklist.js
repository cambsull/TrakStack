//Tracklist Component

import styles from './Tracklist.module.css';
import Track from '../Track/Track.js';

function Tracklist(props) {
    return (
        <div style={styles} className="tracklist">
            {props.tracks.map((track, index) => <Track key={index} {...track} /> //Map Track props to each track, spread operator to bring entire data structure along
            )}
        </div>

    )
}

export default Tracklist;


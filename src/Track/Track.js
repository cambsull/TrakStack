//Track component

import { useState, useEffect } from 'react';
import styles from "./Track.module.css";
import albumArt from '../mockdata/img/catClownSad.png';

//Convert duration in seconds to minutes and seconds and display appropriately.
function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60; //Return remainder
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`; //padStart to put a 0 in tens column in the event < 10 seconds remain
}

function Track (props) {

        return (
            <div className={styles.trackContainer}>
                <img className={styles.albumArt} src={props.albumArt} alt="Album Art" />
                <div>
                    <div className={styles.artistName}> {props.artistName}</div>
                    <div className={styles.albumTitle}>{props.albumTitle}</div>
                    <div className={styles.trackName}>{props.trackName}</div>
                    <div className={styles.trackDuration}>{formatDuration(props.duration)}</div>
                </div>
            </div>
        );
   
}

export default Track;
export { albumArt };

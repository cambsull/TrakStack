//Track component

import styles from "./Track.module.css";
import albumArt from '../mockdata/img/catClownSad.png';
import albumArt2 from '../mockdata/img/waitingForJob.png';
import albumArt3 from '../mockdata/img/codingWithZapfino.png';

//Convert duration in seconds to minutes and seconds and display appropriately.
function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60; //Return remainder
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`; //padStart to put a 0 in tens column in the event < 10 seconds remain
}

function Track (props) {

        return (
            <>
          <div className={styles.trackContainer}>
        <div className={styles.trackInfo}> 
            <img className={styles.albumArt} src={props.albumArt} alt="Album Art" />
            <div>
                <div className={styles.artistName}> {props.artistName}</div>
                <div className={styles.albumTitle}>{props.albumTitle}</div>
                <div className={styles.trackName}>{props.trackName}</div>
                <div className={styles.trackDuration}>{formatDuration(props.duration)}</div>
            </div>
        </div>
        <div>
            <button className={styles.removeButton} onClick={() => props.onRemove(props.id)}>Remove</button>
        </div>
    </div>
            </>
        );
   
}

export default Track;
export { albumArt, albumArt2, albumArt3 };

//Track component

import styles from "./Track.module.css";

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

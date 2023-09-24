//Track component

import styles from "./Track.module.css";
import albumArt from '../mockdata/img/nerdLife.PNG';
import albumArt2 from '../mockdata/img/brothers.PNG';
import albumArt3 from '../mockdata/img/darkSideOfTheMoon.PNG';

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
export { albumArt, albumArt2, albumArt3 };

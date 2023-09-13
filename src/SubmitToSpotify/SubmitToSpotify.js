//Submit button functionality

import React, { useRef } from 'react';
import styles from './SubmitToSpotify.module.css';

function SubmitToSpotify() {
    
    const btnRef = useRef(null);

    const handleClick = () => {
        if (btnRef.current) {
            btnRef.current.classList.add(styles.flash); // Apply the animation
    
            // Remove the animation class after 0.5 seconds (the duration of our animation)
            setTimeout(() => {
                btnRef.current.classList.remove(styles.flash);
            }, 500);
        }
    };
    
    return (
        <button className={styles.submitButton} onClick={handleClick} ref={btnRef}>
        <span className={styles.desktopText}>Save your playlist to your Spotify account!</span>
        <span className={styles.mobileText}>Submit your playlist to Spotify!</span>
    </button>
    );

};

export default SubmitToSpotify;




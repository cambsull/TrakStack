//Tracklist Component
import React, { useRef } from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track.js';

function Tracklist(props) {
    //Obtain access token from App.js via destructuring.
    const { token } = props;

    //Save to spotify button logic and flash animation
    const btnRef = useRef(null);

    const handleClick = () => {
        if (btnRef.current) {
            if (token) {  // Using token in Tracklist
                // Perform GET request with token to get user ID
                fetch('https://api.spotify.com/v1/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('User ID: ', data.id);  // Logging the User ID
                    })
                    .catch(error => {
                        console.error('Error: ', error);
                    });
            } else {
                console.error('No token available');
            }
        }

        if (btnRef.current) {
            btnRef.current.classList.add(styles.flash); // Apply the animation

            // Remove the animation class after 0.5 seconds (the duration of our animation)
            setTimeout(() => {
                btnRef.current.classList.remove(styles.flash);
            }, 500);
        }
    };




    //Ability to remove tracks from playlists
    const removeTrack = (trackId) => {
        props.setTracks(prevTracks => prevTracks.filter(track => track.id !== trackId));
    };


    return (
        <>
            <div>
                <form className={styles.playlistName}>
                    <input className={styles.playlistName} placeholder='Playlist name...'></input>
                </form>
            </div>
            <div className="tracklist">
                {props.tracks.map((track) => <Track key={track.id} {...track} onRemove={removeTrack} /> //Map Track props to each track, spread operator to bring entire data structure along
                )}
            </div>
            <button className={styles.submitButton} onClick={handleClick} ref={btnRef}>
                <span className={styles.desktopText}>Save your playlist to your Spotify account!</span>
                <span className={styles.mobileText}>Save to Spotify!</span>
            </button>

        </>
    )
}

export default Tracklist;

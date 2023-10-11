//Tracklist component
import React, { useRef, useState } from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track.js';

function Tracklist(props) {
    const [playlistName, setPlaylistName] = useState(''); 
    const btnRef = useRef(null);
    const { token } = props;

    const createSpotifyPlaylist = (userId, name, token) => {
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        })
        .then(response => response.json())
        .then(data => data.id);  // Returning the new playlist's id.
    };

    const addTracksToPlaylist = (playlistId, tracks, token) => {
        const trackUris = tracks.map(track => `spotify:track:${track.id}`);
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uris: trackUris })
        })
        .then(response => response.json()); 
    };

    const handleClick = () => {
        const finalPlaylistName = playlistName || 'My Playlist';

        if (token) {  
            fetch('https://api.spotify.com/v1/me', {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` },
            })
            .then(response => response.json())
            .then(data => createSpotifyPlaylist(data.id, finalPlaylistName, token))
            .then(playlistId => addTracksToPlaylist(playlistId, props.tracks, token))
            .catch(error => console.error('Error: ', error));
        } else {
            console.error('No token available');
        }

        if (btnRef.current) {
            btnRef.current.classList.add(styles.flash); 
            setTimeout(() => {
                btnRef.current.classList.remove(styles.flash);
            }, 500);
        }
    };

    const removeTrack = (trackId) => {
        props.setTracks(prevTracks => prevTracks.filter(track => track.id !== trackId));
    };

    return (
        <>
            <div>
                <form className={styles.playlistName} onSubmit={e => e.preventDefault()}>
                    <input 
                        className={styles.playlistName} 
                        placeholder='Playlist name...' 
                        onChange={(e) => setPlaylistName(e.target.value)}
                        value={playlistName}
                    />
                </form>
            </div>
            <div className="tracklist">
                {props.tracks.map((track) => 
                    <Track key={track.id} {...track} onRemove={removeTrack} />
                )}
            </div>
            <button className={styles.submitButton} onClick={handleClick} ref={btnRef}>
                <span className={styles.desktopText}>Save your playlist to your Spotify account!</span>
                <span className={styles.mobileText}>Save to Spotify!</span>
            </button>
        </>
    );
}

export default Tracklist;

//Tracklist component
import React, { useRef, useState } from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track.js';

function Tracklist(props) {
    const [playlistName, setPlaylistName] = useState(''); 
    const btnRef = useRef(null);
    const { token } = props; //Destructure token from App.js

    //Helper function to create new playlist
    const createSpotifyPlaylist = (userId, name, token) => {
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }), //Stringify the playlist name for click handler
        })
        .then(response => response.json()) //Convert response to JSON
        .then(data => data.id);  // Return the id specifically from the data return.
    };

    //Helper function to add tracks to playlist when it is saved
    const addTracksToPlaylist = (playlistId, tracks, token) => { //Takes the playlist ID, tracks (from search in App.js), and user token
        const trackUris = tracks.map(track => `spotify:track:${track.id}`); //Create a map of track URIs from tracks passed in from search results
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uris: trackUris }) //Stringify the URIs for use in next API call
        })
        .then(response => response.json());  //Convert to JSON
    };

    const handleClick = () => {
        const finalPlaylistName = playlistName || 'My Playlist'; //Take the playlist name from the form entry, or use 'My Playlist' as a default

        if (token) {  
            fetch('https://api.spotify.com/v1/me', {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` },
            })
            .then(response => response.json()) //Convert to JSON
            .then(data => createSpotifyPlaylist(data.id, finalPlaylistName, token)) //Take the data, pass it to createSpotifyPlaylist
            .then(playlistId => addTracksToPlaylist(playlistId, props.tracks, token)) //Take that data, which creates the playlist ID, and pass it to addTracksToPlaylist
            .then(alert("Playlist saved successfully!"))
            .catch(error => console.error('Error: ', error)); //In case there's an oopsie
        } else {
            console.error('No token available');
        }

        if (btnRef.current) {
            btnRef.current.classList.add(styles.flash); //Golden animation
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

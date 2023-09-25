import React from 'react';
import styles from './LoginButton.module.css';

function LoginButton() {

    //Establish login variables
    const clientID = process.env.REACT_APP_CLIENT_ID;
    const redirectURI = "http://localhost:3000/callback";
    const scopes = "user-read-private playlist-modify-public";

    //CSRF token
    const establishLogin = () => {
        const state = generateRandomString();
        const authorizeURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${encodeURIComponent(redirectURI)}&scope=${encodeURIComponent(scopes)}&state=${state}`;
        
    //Send user to auth URL
    console.log(authorizeURL);
    window.location.href = authorizeURL;
    }

    return (
        <div className={styles.loginButtonContainer} >
            <button className={styles.loginButton} onClick={establishLogin}>Login to Spotify</button>
        </div>
    )
}

//Random string function for CSRF token requirements
function generateRandomString() {

    const length = 16;
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}



export default LoginButton;
import { useEffect } from 'react';

//Callback.js is where users are redirected after the OAuth process.
//It takes the returned URL and uses it to create individual user tokens which allows that user
//to query the Spotify API and not have to rely on client based authentication

function Callback({ setToken }) {

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');

        if (code && state) {
            // Form body
            const body = new URLSearchParams();
            body.append('grant_type', 'authorization_code');
            body.append('code', code);
            body.append('redirect_uri', 'https://development--trakstack.netlify.app/');

            // Get env variables
            const clientID = process.env.REACT_APP_CLIENT_ID;
            const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

            // Perform POST request
            fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret),
                },
                body: body.toString(),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Received user tokens')

                    //set token state for App.js 
                    setToken(data.access_token)
                })
                .catch(error => {
                    console.error('Error: ', error)
                });
        }
    }, [setToken]);

    return null;

}

export default Callback;

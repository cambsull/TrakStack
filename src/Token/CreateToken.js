import { useEffect } from 'react';

function CreateToken() {

    console.log('CreateToken component rendered');
    
    useEffect(() => {

        let client_id = process.env.REACT_APP_CLIENT_ID;
        let client_secret = process.env.REACT_APP_CLIENT_SECRET;

        let url = 'https://accounts.spotify.com/api/token';
        let headers = {
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        let body = 'grant_type=client_credentials';

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        })
        .then(response => response.json())
        .then(data => {
            let token = data.access_token;
            console.log(token);
        })
        .catch(e => {
            console.log('Error:', e);
        });

        console.log('Client ID:', process.env.REACT_APP_CLIENT_ID);
        console.log('Client Secret:', process.env.REACT_APP_CLIENT_SECRET);

    }, []);

    return console.log('Default return');
};

export default CreateToken;
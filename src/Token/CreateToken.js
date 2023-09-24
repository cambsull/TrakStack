function CreateToken() {

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
}

export default CreateToken;
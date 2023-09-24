import './App.css';
import { useState, useEffect } from 'react';
import Tracklist from './Tracklist/Tracklist.js';
import SubmitToSpotify from './SubmitToSpotify/SubmitToSpotify.js';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';
import CreateToken from './Token/CreateToken.js';



function App() {

    //Establish token state for API when component mounts
    const [token, setToken] = useState(null);

    useEffect(() => {
        CreateToken()
            .then(token => {
                setToken(token);
            })
            .catch(error => {
                console.error("Error getting token:", error);
            });
    }, []);


    //Search functionality
    const [results, setResults] = useState([]);
    const [tracks, setTracks] = useState([]);
    

    const handleSearch = (query) => {

        const baseURL='https://api.spotify.com/v1/search'
        const type='artist,album,track'
        const queryParams = encodeURIComponent(query)
        const typeParams = encodeURIComponent(type)
        const headers= { Authorization: `Bearer ${token}` }
      
        const endURL= `${baseURL}?q=${queryParams}&type=${typeParams}`;


        if (query.length <= 0) {
            setResults([]);
            return;
        }
        fetch(endURL, {
            method: 'GET',
            headers: headers
        })
        .then(response => response.json())
        .then(data => {
            let searchResults = data.tracks.items
            console.log('Response: ', searchResults)

        //Extract relevant information
        const filteredResults = searchResults.map(item => ({
            id: item.id,
            trackName: item.name,
            artistName: item.artists.map(artist => artist.name),
            albumArt: item.album.images.length > 0 ? item.album.images[0].url : null
        }));
        //set the results and catch any errors
        setResults(filteredResults)
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setResults([]);
        });
    }

    const handleResult = (result) => {

        if (!tracks.some(track => track.id === result.id)) {  //Check to make sure track doesn't already exist in tracklist
            setTracks(prevTracks => [...prevTracks, result])
        };
    }

    //Rendering
    return (
        <>
            <div className="mainContainer">
                <div className="searchContainer">
                    <div>
                        <SearchBar onSearch={handleSearch} />
                        <SearchResults results={results} onResultClick={handleResult} />
                    </div>

                </div>
                <div className="tracklistContainer">
                    <Tracklist tracks={tracks} setTracks={setTracks} />

                    <div className="submitToSpotifyContainer">
                        <SubmitToSpotify />
                    </div>
                </div>
            </div>
        </>

    )
};

export default App;

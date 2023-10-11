import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './assets/img/trakStackLogo.png';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <>
  <div className="container">
            <header className="header">
                <img src={logo} alt="TrakStack logo" />
                <h2>Create your own custom Spotify playlists!</h2>
                <h4>Development build: 0.7</h4>
            </header>
  </div>
  <div className="contentContainer">
        <App />
  </div>
</>

//</React.StrictMode>
);


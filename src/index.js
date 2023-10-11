import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './assets/img/trakStackLogo.png';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className="container">
            <header className="header">
                <img src={logo} alt="TrakStack logo" />
                <h2>Create your own custom Spotify playlists!</h2>
                <h4>Production build: 1.0</h4>
            </header>
  </div>
  <div className="contentContainer">
        <App />
  </div>
</>
);


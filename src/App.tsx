import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeButton from './pages/common/homeButton';
import SettingsButton from './pages/common/settingsButton';
import Timer from './pages/home/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeButton/>
        <SettingsButton/> 
        <Timer/>
      </header>
    </div>
  );
}

export default App;

import './index.css';
import React, { useState, useEffect } from 'react';
import MainSeen from './mainSeen.jsx';
import Navbar from './Navbar.jsx';
import Level from './Level.jsx';
import Use from './Use.jsx';
import Language from './Language.jsx';
import Conn from './connect.jsx';

function App() {
  const [currentScene, setCurrentScene] = useState('main');
  const [backgroundClass, setBackgroundClass] = useState('bg-dark-gradient');
  
  useEffect(() => {
    if (currentScene === 'language') {
      setBackgroundClass('bg-galaxy'); 
    } else {
      setBackgroundClass('bg-dark-gradient'); 
    }
  }, [currentScene]);

  const renderScene = () => {
    switch (currentScene) {
      case 'level':
        return <Level />;
      case 'howToPlay':
        return <Use />;
      case 'language':
        return <Language setCurrentScene={setCurrentScene}/>;
      case 'newGame':
        return <Conn />;
      default:
        return <MainSeen setCurrentScene={setCurrentScene} />;
    }
  };
  

  return (
    <div className={`${backgroundClass} min-h-screen`}>
      <Navbar setCurrentScene={setCurrentScene} />
      {renderScene()}
    </div>
  );
}

export default App;

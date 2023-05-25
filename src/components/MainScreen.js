import React from 'react';
import '../index.css';
import Figure from './Figure';
import GamePlay from './GamePlay';
import Keys from './Keys';
import Word from './Word';

function MainScreen() {
  return (
    <div className="mainscreen-container flex flex-col items-center justify-center">
      <div className="figure-container">
        <Word /> {/* Render the Word component */}
        <Figure /> {/* Render the Figure component */}
      </div>
      <div className="gameplay-container">
        <GamePlay /> {/* Render the GamePlay component */}
      </div>
      <Keys /> {/* Render the Keys component */}
    </div>
  );
}

export default MainScreen;

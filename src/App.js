import React from 'react';
import Game from './components/Game';
import { GameProvider } from "./contexts/GameContext"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Trivia Game</h1>
      </header>

      <main>
        <GameProvider>
          <Game />
        </GameProvider>
      </main>
    </div>
  );
}

export default App;

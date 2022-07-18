import React from 'react';
import Game from './components/Game';
import { GameProvider } from "./contexts/GameContext"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <GameProvider>
          <Game />
        </GameProvider>
      </main>

      <Footer />
    </div>
  );
}

export default App;

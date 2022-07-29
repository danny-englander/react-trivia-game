import React from 'react';
import Game from './components/Game';
import { GameProvider } from "./contexts/GameContext"
import Header from './components/Header';
import Footer from './components/Footer';
import 'normalize-css'
import './assets/scss/global-styles.scss'

function App() {
  return (
    <div className="App">

      <a id='skip-nav' class='screenreader-text' href='#main-content'>
        Skip Navigation or Skip to Content
      </a>

      <Header />

      <main id='main-content'>
        {/* Wrap Game in the <GameProvider> wrap so as to get context and state globally. */}
        <GameProvider>
          <Game />
        </GameProvider>
      </main>

      <Footer />
    </div>
  );
}

export default App;

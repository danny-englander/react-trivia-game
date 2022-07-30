import React from 'react';
import Game from './components/Game';
import { GameProvider } from "./contexts/GameContext"
import Header from './components/Header';
import Footer from './components/Footer';
import 'normalize-css'
import './assets/scss/global-styles.scss'
import StyleContainer from './assets/scss/components/container.module.scss'

function App() {
  return (
    <>
      <div className=''>
        <a id='skip-nav' className='screenreader-text' href='#main-content'>
          Skip Navigation or Skip to Content
        </a>
      </div>

      <div className={StyleContainer.app_wrap}>
        <div className={StyleContainer.app_inner}>
          <Header />
          <main id='main-content'>
            {/* Wrap Game in the <GameProvider> wrap so as to get context and state globally. */}
            <GameProvider>
              <Game />
            </GameProvider>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

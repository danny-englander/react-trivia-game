import React from 'react';
import Game from './components/Game';
import { GameProvider } from "./contexts/GameContext"
import Header from './components/Header';
import Footer from './components/Footer';
import 'normalize-css'
import './assets/scss/global-styles.scss'
import styleContainer from './assets/scss/components/container.module.scss'
import styleSR from './assets/scss/components/sr.module.scss'

function App() {
  return (
    <>
      <div className={styleSR.srWrap}>
        <a id='skip-nav' className={styleSR.srText} href='#main-content'>
          Skip Navigation or Skip to Content
        </a>
      </div>

      <div className={styleContainer.appWrap}>
        <div className={styleContainer.appInner}>
          <Header />
          <main id='main-content' className={styleContainer.appMain}>
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

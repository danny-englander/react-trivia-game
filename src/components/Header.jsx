import React from 'react'
import styleHeader from '../assets/scss/components/header.module.scss'

const Header = () => {
  return (
    <>
      <header className={styleHeader.bg}>
        <div className={styleHeader.wrap}>
          <div className={styleHeader.logoWrap}>
            <img
              tabIndex="0"
              className={styleHeader.logo}
              src="/assets/img/logo.svg"
              alt="TriviaLand Trivia Game"
              title="TriviaLand Trivia Game"
              width="320"
              height="76"
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

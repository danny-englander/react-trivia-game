import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import styleButton from '../assets/scss/components/button.module.scss'

const Buttons = ({ onLockClick, onNextClick }) => {
  const [gameState] = useContext(GameContext)
  return (
    <div className={styleButton.wrap}>
      {/* Enable disable buttons below with conditions and add accessibility. */}
      {/*
       *** Lock answer button.
       */}
      <button
        disabled={gameState.answerLocked === true}
        aria-disabled={gameState.answerLocked === true}
        onClick={onLockClick}
        className={`${styleButton.btn} ${styleButton.btnPrimary} ${
          gameState.answerLocked === true ? 'foo' : 'bar'
        }`}
      >
        Lock in Answer!
      </button>

      {/*
       *** Next button.
       */}
      <button
        disabled={gameState.answerLocked === false}
        aria-disabled={gameState.answerLocked === false}
        className={`${styleButton.btn} ${styleButton.btnSecondary} ${
          gameState.answerLocked === true ? 'foo' : 'bar'
        }`}
        // aria-describedby={}
        onClick={onNextClick}
      >
        {gameState.currentQuestionIndex === gameState.questions.length - 1
          ? 'Finish the game!'
          : 'Next question'}
      </button>
    </div>
  )
}

export default Buttons

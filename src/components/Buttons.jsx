import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import StyleButton from '../assets/scss/components/button.module.scss'

const Buttons = ({ onLockClick }) => {
  const [gameState, dispatch] = useContext(GameContext)
  return (
    <>
      {/* Enable disable buttons below with conditions and add accessibility. */}
      {/*
       *** Lock answer button.
       */}
      <button
        disabled={gameState.answerLocked === true}
        aria-disabled={gameState.answerLocked === true}
        onClick={onLockClick}
        className={`btn-state ${StyleButton.btn} ${
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
        // aria-describedby={}
        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
      >
        Next question
      </button>
    </>
  )
}

export default Buttons

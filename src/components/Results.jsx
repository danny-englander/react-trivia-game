import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import styleFormActions from '../assets/scss/components/formactions.module.scss'

const Results = () => {
  const [gameState, dispatch] = useContext(GameContext)
  return (
    <>
      <h1>Congratulations, you have completed the game!</h1>

      <div>
        <h2>
          You got {gameState.correctAnswersCount} of{' '}
          {gameState.questions.length} questions correct.
        </h2>
      </div>

      {/*
       * Here we instantiate useReducer with a click event as a dispatch method.
       * Call the state as defined above.
       */}
      <button
        className={`${styleFormActions.btn} ${styleFormActions.btnPrimary}`}
        onClick={() => dispatch({ type: 'RESTART_GAME' })}
      >
        Play Again!
      </button>
    </>
  )
}

export default Results

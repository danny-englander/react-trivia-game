import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'

const Results = () => {
  const [gameState, dispatch] = useContext(GameContext)
  return (
    <>
      <h1 className="">Congratulations, you have completed the quiz!</h1>

      <div>
        You got {gameState.correctAnswersCount} of {gameState.questions.length}
        questions correct.
      </div>

      {/*
       * Here we instantiate useReducer with a click event as a dispatch method.
       * Call the state as defined above.
       */}
      <button
        className="next-button"
        onClick={() => dispatch({ type: 'RESTART_GAME' })}
      >
        Restart the Game
      </button>
    </>
  )
}

export default Results

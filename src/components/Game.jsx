import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import Question from './Question'

const Game = () => {
  // Define the global game context.
  const [gameState, dispatch] = useContext(GameContext)
  // console.log('gameState', gameState)

  return (
    <>
      {/* If showResults is true. */}
      {gameState.showResults && (
        <>
          <h1 className="">Congratulations!</h1>
          You have finished the game You've got 4 of
          {gameState.questions.length}
          <button onClick={() => dispatch({ type: 'RESTART_GAME' })}>
            Play again!
          </button>
        </>
      )}

      {/* If showResults is false. */}
      {!gameState.showResults && (
        <>
          <p className="">
            Question {gameState.currentQuestionIndex + 1}/
            {gameState.questions.length}
          </p>

          <Question />
          {/*
          Here we instantiate useReducer with a click event as a dispatch method.
          Call the state as defined above.
          */}
          <button onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>
            Next Question
          </button>
        </>
      )}
    </>
  )
}

export default Game

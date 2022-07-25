import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import Question from './Question'
import Results from './Results'

const Game = () => {
  const [gameState, dispatch] = useContext(GameContext)
  console.log('gameState in Game.jsx', gameState)
  return (
    <>
      {/* If showResults is true. */}
      {gameState.showResults && <Results />}

      {/* If showResults is false. */}
      {!gameState.showResults && (
        <>
          Question {gameState.currentQuestionIndex + 1}/
          {gameState.questions.length}
          <Question />
          <button onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>
            {/* @todo add form validation to check if a radio button has not been checked. */}
            Next question
          </button>
        </>
      )}
    </>
  )
}

export default Game

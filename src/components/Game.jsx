import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import Question from './Question'

const Game = () => {
  // Define the global game context.
  const [gameState, dispatch] = useContext(GameContext)
  // console.log('gameState', gameState)

  return (
    <>
      <p className="">
        Question {gameState.currentQuestionIndex + 1} /
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
  )
}

export default Game

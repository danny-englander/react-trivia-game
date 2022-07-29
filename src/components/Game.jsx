import React, { useContext, useState } from 'react'
import { GameContext } from '../contexts/GameContext'
import Question from './Question'
import Results from './Results'

const Game = () => {
  const [gameState, dispatch] = useContext(GameContext)
  console.log('gameState', gameState)
  // Define a local state for the selected answer.
  // This helps keep track of the answer in a local state.
  const [selectedAnswer, setSelectedAnswer] = useState('')
  // Custom onchange for input click event.
  // (For prop - onSelectAnswer).
  // This just keeps track of what the user clicked on in a local state
  // i.e. selectedAnswer, setSelectedAnswer as per above.
  const onChange = (e) => {
    console.log('input target', e.target.value)
    setSelectedAnswer(e.target.value)
  }

  // A sort of submit button to lock answer and finalize the answer
  const onLockClick = (e) => {
    console.log('onLockClick selectedAnswer', selectedAnswer)
    dispatch({ type: 'SELECT_ANSWER', payload: selectedAnswer })
    // setSelectedAnswer('')
  }

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
          <Question
            onChange={onChange}
            onLockClick={onLockClick}
            selectedAnswer={selectedAnswer}
          />
          {/* FIXME: enable disable buttons below with conditions. */}
          <button
            disabled={gameState.answerLocked === true}
            onClick={onLockClick}
          >
            Lock in Answer!
          </button>
          <button
            disabled={gameState.answerLocked === false}
            onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
          >
            Next question
          </button>
        </>
      )}
    </>
  )
}

export default Game

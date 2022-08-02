import React, { useContext, useState } from 'react'
import { GameContext } from '../contexts/GameContext'
import Question from './Question'
import Results from './Results'
import FormActions from './FormActions'

const Game = () => {
  const [gameState, dispatch] = useContext(GameContext)
  console.log('gameState', gameState)
  // Define a local state for the selected answer.
  // This helps keep track of the answer in a local state.
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [formValidationMessage, setFormValidationMessage] = useState('')
  // Custom onchange for input click event.
  // (For prop - onSelectAnswer).
  // This just keeps track of what the user clicked on in a local state
  // i.e. selectedAnswer, setSelectedAnswer as per above.
  const onChange = (e) => {
    console.log('input target', e.target.value)
    setSelectedAnswer(e.target.value)
    setFormValidationMessage('')
  }

  // A sort of submit button to lock answer and finalize the answer.
  // Local state that keeps track.
  const onLockClick = () => {
    console.log('onLockClick selectedAnswer', selectedAnswer)
    if (selectedAnswer === '') {
      setFormValidationMessage('Please choose an answer above')
      return
    }
    dispatch({ type: 'SELECT_ANSWER', payload: selectedAnswer })
  }

  // We need to reset the form state for the next question.
  const onNextClick = () => {
    dispatch({ type: 'NEXT_QUESTION' })
    setSelectedAnswer('')
  }
  console.log('gameState in Game.jsx', gameState)

  return (
    <>
      {/* If showResultsPage is true (last question), go to the results page. */}
      {gameState.showResultsPage && <Results />}

      {/* If showResultsPage is false, show questions. */}
      {!gameState.showResultsPage && (
        <>
          {/* Question component, pass props into component. */}
          <Question
            onChange={onChange}
            onLockClick={onLockClick}
            selectedAnswer={selectedAnswer}
          />

          {/* Buttons */}
          <FormActions
            onLockClick={onLockClick}
            onNextClick={onNextClick}
            formValidationMessage={formValidationMessage}
          />
        </>
      )}
    </>
  )
}

export default Game

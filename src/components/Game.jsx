import React, { useContext, useState } from 'react'
import { GameContext } from '../contexts/GameContext'
import Question from './Question'
import Results from './Results'

import Buttons from './Buttons'

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
  }

  console.log('gameState in Game.jsx', gameState)

  return (
    <>
      {/* If showResults is true (last question), go to the results page. */}
      {gameState.showResults && <Results />}

      {/* If showResults is false, show questions. */}
      {!gameState.showResults && (
        <>
          {/* Question component, pass props into component. */}

          <Question
            onChange={onChange}
            onLockClick={onLockClick}
            selectedAnswer={selectedAnswer}
          />
          <Buttons onLockClick={onLockClick} />
        </>
      )}
    </>
  )
}

export default Game

import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import Question from './Question'

const Game = () => {
  const [gameState, dispatch] = useContext(GameContext)
  return (
    <div className="quiz">
      {gameState.showResults && (
        <div className="results">
          <h1 className="congratulations">
            Congratulations, you have completed the quiz!
          </h1>

          <div className="results-info">
            <div>
              You got {gameState.correctAnswersCount} of{' '}
              {gameState.questions.length}
            </div>
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: 'RESTART_GAME' })}
          >
            Restart the Game
          </div>
        </div>
      )}

      {!gameState.showResults && (
        <div>
          <div className="score">
            Question {gameState.currentQuestionIndex + 1}/
            {gameState.questions.length}
          </div>

          <Question />

          <button
            className="next-button"
            onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
          >
            Next question
          </button>
        </div>
      )}
    </div>
  )
}

export default Game

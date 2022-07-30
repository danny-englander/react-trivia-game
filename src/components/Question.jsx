import React, { useContext, useState } from 'react'
import { GameContext } from '../contexts/GameContext'
import Answer from './Answer'

// Receive props from Game.
const Question = ({ onChange, onLockClick, selectedAnswer }) => {
  // Define the global game context.
  const [gameState, dispatch] = useContext(GameContext)
  // Define the current question gameState index.
  const currentQuestion = gameState.questions[gameState.currentQuestionIndex]
  console.log('currentQuestion', currentQuestion)

  return (
    <>
      <h1 className="question">{currentQuestion.question}</h1>

      {/* If gameState.resultsMessage, show the results message and score. */}
      {gameState.resultsMessage && (
        <div aria-live="assertive" role="alert">
          <h2>{gameState.resultsMessage}</h2>
          <h3>Current Score: {gameState.correctAnswersCount}</h3>
        </div>
      )}

      <form>
        <fieldset>
          <legend className="visually-hidden">
            Answers for this question:
          </legend>
          <div>
            {/* Render array for each answer (map). */}
            {gameState.answers.map((answer, index) => (
              <Answer
                answerText={answer}
                key={index}
                index={index}
                currentAnswer={selectedAnswer}
                correctAnswer={currentQuestion.correctAnswer}
                onSelectAnswer={onChange}
              />
            ))}
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default Question

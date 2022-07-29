import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import Answer from './Answer'

const Question = () => {
  // Define the global game context.
  const [gameState, dispatch] = useContext(GameContext)
  // Define the current question gameState index.
  const currentQuestion = gameState.questions[gameState.currentQuestionIndex]
  console.log('currentQuestion', currentQuestion)

  // Custom onchange for input click event.
  // (For prop - onSelectAnswer).
  const onChange = (e) => {
    console.log('input target', e.target.value)
    dispatch({ type: 'SELECT_ANSWER', payload: e.target.value })
  }

  return (
    <>
      <h1 className="question">{currentQuestion.question}</h1>

      <h2>
        {/* FIXME: make this appear on some kind of lock in answer button click */}
        Correct! / Incorrect, the correct answer is{' '}
        {currentQuestion.correctAnswer}
      </h2>

      <h3>
        Current Score: {gameState.correctAnswersCount} of{' '}
        {gameState.questions.length} questions correct
      </h3>

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
                currentAnswer={gameState.currentAnswer}
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

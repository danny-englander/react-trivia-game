import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import Answer from './Answer'

const Question = () => {
  // Define the global game context.
  const [gameState, dispatch] = useContext(GameContext)
  // Define the question
  const currentQuestion = gameState.questions[gameState.currentQuestionIndex]
  console.log('currentQuestion', currentQuestion)
  return (
    <>
      <h2>{currentQuestion.dataQuestion}</h2>

      {/* {currentQuestion} */}

      <form>
        <fieldset>
          <legend className="visually-hidden">
            Answers for this question:
          </legend>
          {/* Render array for each answer (map). */}
          {gameState.answers.map((answer, index) => (
            <Answer
              answerText={answer}
              key={index}
              onSelectAnswer={(answerText) =>
                dispatch({ type: 'SELECT_ANSWER', payload: answerText })
              }
            />
          ))}
        </fieldset>
      </form>
    </>
  )
}

export default Question

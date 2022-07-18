import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'

const Answer = ({ answerText, onSelectAnswer }) => {
  // Define the global game context.
  const [gameState, dispatch] = useContext(GameContext)
  // Define the question
  const currentQuestion = gameState.questions[gameState.currentQuestionIndex]
  return (
    <>
      <div onClick={() => onSelectAnswer(answerText)}>
        A<button>{answerText}</button>
      </div>
    </>
  )
}

export default Answer

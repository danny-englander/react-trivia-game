import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import Answer from './Answer'

const Question = () => {
  // Define the global game context.
  const [gameState] = useContext(GameContext)
  // Define the question
  const currentQuestion = gameState.questions[gameState.currentQuestionIndex]
  console.log('Question', gameState)
  return (
    <>
      <h2>{currentQuestion.question}</h2>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </>
  )
}

export default Question

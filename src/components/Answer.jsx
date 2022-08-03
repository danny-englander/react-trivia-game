import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import styleForm from '../assets/scss/components/form.module.scss'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { AiFillCloseCircle } from 'react-icons/ai'

// Receive answer props from Question.
const Answer = ({
  answerText,
  onSelectAnswer,
  index,
  currentAnswer,
  correctAnswer,
}) => {
  const [gameState, dispatch] = useContext(GameContext)
  // Answer number array.
  const numberMapping = ['1', '2', '3', '4']
  // Define correct and incorrect answers.
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer
  const isIncorrectAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer
  // Custom answer classes.
  const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : ''
  const wrongAnswerClass = isIncorrectAnswer ? 'wrong-answer' : ''
  const disabledClass = currentAnswer ? 'disabled-answer' : ''

  return (
    <>
      <div className={styleForm.answer}>
        <label
          aria-label={`Answer ${numberMapping[index]}: ${answerText}`}
          className={`${styleForm.label} ${
            gameState.answerLocked === true
              ? `${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`
              : ''
          }`}
        >
          <input
            type="radio"
            name="answer"
            required
            disabled={gameState.answerLocked}
            value={answerText}
            onChange={onSelectAnswer}
            checked={answerText === currentAnswer}
          />
          <span>
            {numberMapping[index]}. {answerText}
          </span>

          {gameState.answerLocked === true && isCorrectAnswer && (
            <IoCheckmarkCircle
              name="Correct Icon"
              size="1.6em"
              className={styleForm.icon}
            />
          )}

          {gameState.answerLocked === true && !isCorrectAnswer && (
            <AiFillCloseCircle
              name="Incorrect Icon"
              size="1.6em"
              className={styleForm.icon}
            />
          )}
        </label>
      </div>
    </>
  )
}

export default Answer

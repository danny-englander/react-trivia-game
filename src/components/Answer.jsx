import React from 'react'

const Answer = ({
  answerText,
  onSelectAnswer,
  index,
  currentAnswer,
  correctAnswer,
}) => {
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

  // Custom answer messages.
  const correctAnswerMessage = isCorrectAnswer ? 'Correct!' : ''
  const incorrectAnswerMessage = isIncorrectAnswer
    ? `Sorry, wrong answer, the correct answer is ${correctAnswer}`
    : ''

  return (
    <>
      <div className="form-item">
        <label
          aria-label={`Answer ${numberMapping[index]}: ${answerText}`}
          className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
        >
          <input
            type="radio"
            name="answer"
            required
            value={answerText}
            checked={answerText === currentAnswer}
          />

          <span>{numberMapping[index]}. </span>
          <span>{answerText}</span>
          <span></span>
        </label>
      </div>
    </>
  )
}

export default Answer

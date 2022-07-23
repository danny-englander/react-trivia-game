import React from 'react'

const Answer = ({ answerText, onSelectAnswer }) => {
  // Define a unique id for each form item.
  const answerID = `answer-id-${answerText
    .replaceAll(' ', '-')
    .replaceAll('.', '')
    .toLowerCase()}`
  // Define the global game context.
  return (
    <>
      <div className="form-item" onClick={() => onSelectAnswer(answerText)}>
        <input type="radio" name="answer" id={answerID} />
        <label htmlFor={answerID}>{answerText}</label>
      </div>
    </>
  )
}

export default Answer

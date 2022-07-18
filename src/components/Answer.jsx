import React from 'react'

const Answer = ({ answerText, onSelectAnswer }) => {
  return (
    <>
      <div onClick={() => onSelectAnswer(answerText)}>
        A<button>{answerText}</button>
      </div>
    </>
  )
}

export default Answer

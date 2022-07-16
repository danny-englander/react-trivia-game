import React from 'react'
import Answer from './Answer'

// Call the props passed from the Game component.
const Question = ({ questions }) => {
  console.log('Question', questions)
  return (
    <>
      <h2>Text of our Question</h2>
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </>
  )
}

export default Question

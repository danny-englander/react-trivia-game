import React, { useReducer } from 'react'
import Question from './Question'

// Implement useReducer to separate the business logic from the component.
// This method makes the app more scalable.
// Define the initial state.
const initialState = {
  currentQuestionIndex: 0,
  questions: [],
}

const reducer = (state, action) => {
  if (action.type === 'NEXT_QUESTION') {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    }
  }

  // Return the first argument of the state.
  return state
}

const Game = () => {
  // useState is good but not always scalable so we can implement useReducer instead.
  // Define and read the state.
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log('state', state)

  return (
    <>
      <div>Game</div>
      Question 1/6
      {/* Pass props to the child component. */}
      <Question questions={state.questions} />
      {/*
      Here we instantiate useReducer with a click event as a dispatch method.
      Call the state as defined above.
      */}
      <button onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>
        Next Question
      </button>
    </>
  )
}

export default Game

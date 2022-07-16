import React, { createContext, useReducer } from "react";

// Import the game data.
import questions from '../data/GameData'

// Implement useReducer to separate the business logic from components.
// This allows for global context (props) that can be accessed from any component.
// This method makes the app more scalable.
// Define the initial state.
const initialState = {
  currentQuestionIndex: 0,
  questions,
}

const reducer = (state, action) => {
  // Test for NEXT_QUESTION, increment by 1 for each question.
  if (action.type === 'NEXT_QUESTION') {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    }
  }

  // Return the first argument of the state.
  return state
}

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
  // useState is good but not always scalable so we can implement useReducer instead.
  // Define and read the state.
  const value = useReducer(reducer, initialState)
  console.log('state', value)
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

import React, { createContext, useReducer } from "react";
// Import the game data.
import questions from '../data/GameData'
// Import the custom shuffle answers function to implement in our global context.
import { shuffleAnswers } from "../utils/helpers";
// Implement useReducer to separate the business logic from components.
// This allows for global context (props) that can be accessed from any component.
// This method makes the app more scalable.
// Define the initial state.
// Shuffle answers starts on the first item of the array [0].
const initialState = {
  currentQuestionIndex: 0,
  questions,
  showResults: false,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: ''
}

// Define the reducer with state and action props.
const reducer = (state, action) => {
  console.log("reducer", state, action)

  switch (action.type) {
    // Test for NEXT_QUESTION, increment by 1 for each question.
    case "NEXT_QUESTION": {
      // Define a state that tests for the end of the game so we can go to the results page.
      const showResults = state.currentQuestionIndex === state.questions.length - 1;
      // True / False test if we have reached the end of our questions.
      // Use a Conditional (ternary) operator here to test.
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      // Shuffled answers.
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex])
      // Return the state and count upward for each question for the next button.
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers
      };
    }

    case "RESTART_GAME": {
      // Start the game over, i.e. return to the initial state.
      return initialState
    }

    case "SELECT_ANSWER": {
      return {
        ...state,
        currentAnswer: action.payload
      }
    }

    default: {
      // Return the first argument of the state.
      return state
    }
  }
}

// Export the global context.
export const GameContext = createContext()
// Create a wrapper, "<GameProvider>" that renders children with the state.
// This gets wrapped around the <Game /> component call in App.js
export const GameProvider = ({ children }) => {
  // useState is good but not always scalable so we can implement useReducer instead.
  // Define and read the state.
  const value = useReducer(reducer, initialState)
  console.log('state', value)
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

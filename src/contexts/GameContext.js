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
  currentAnswer: "",
  correctAnswersCount: 0,
};

const reducer = (state, action) => {
  console.log("reducer in GameContext", state, action)
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
          state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      console.log('correct answer count', correctAnswersCount)
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount
      };
    }
    case "NEXT_QUESTION": {
      // Define a state that tests for the end of the game so we can go to the results page.
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      // Test for the next question, increment by 1 for each question.
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      // Shuffled answers.
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART_GAME": {
      // Start the game over, i.e. return to the initial state.
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

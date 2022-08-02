import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import styleFormActions from '../assets/scss/components/form-actions.module.scss'

const FormActions = ({ onLockClick, onNextClick, formValidationMessage }) => {
  const [gameState] = useContext(GameContext)
  return (
    <div className={styleFormActions.wrap}>
      {/* Enable disable buttons below with conditions and add accessibility. */}
      {/*
       *** Lock answer button.
       */}
      {/* Form validation  */}
      {formValidationMessage && <p className="">{formValidationMessage}</p>}

      <button
        disabled={gameState.answerLocked === true}
        aria-disabled={gameState.answerLocked === true}
        onClick={onLockClick}
        className={`${styleFormActions.btn} ${styleFormActions.btnPrimary} ${
          gameState.answerLocked === true ? 'foo' : 'bar'
        }`}
      >
        Lock in Answer!
      </button>

      {/*
       *** Next button.
       */}
      <button
        disabled={gameState.answerLocked === false}
        aria-disabled={gameState.answerLocked === false}
        className={`${styleFormActions.btn} ${styleFormActions.btnSecondary} ${
          gameState.answerLocked === true ? 'foo' : 'bar'
        }`}
        // aria-describedby={}
        onClick={onNextClick}
      >
        {gameState.currentQuestionIndex === gameState.questions.length - 1
          ? 'Finish the game!'
          : 'Next question'}
      </button>
    </div>
  )
}

export default FormActions

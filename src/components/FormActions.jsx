import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import styleFormActions from '../assets/scss/components/formactions.module.scss'

const FormActions = ({ onLockClick, onNextClick, formValidationMessage }) => {
  const [gameState] = useContext(GameContext)
  return (
    <div className={styleFormActions.btnItems}>
      {/* Form validation message.  */}
      {formValidationMessage && <p className="">{formValidationMessage}</p>}

      {/* Enable disable buttons below with conditions and add accessibility. */}

      <div
        className={`${styleFormActions.btnItem} ${styleFormActions.btnItemLock}`}
      >
        {/*
         *** Lock answer button.
         */}
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
      </div>

      <div
        className={`${styleFormActions.btnItem} ${styleFormActions.btnItemNext}`}
      >
        {/*
         *** Next button.
         */}
        <button
          // disabled={gameState.answerLocked === false}
          aria-disabled={gameState.answerLocked === false}
          className={`${styleFormActions.btn} ${
            styleFormActions.btnSecondary
          } ${
            gameState.answerLocked === true
              ? `${styleFormActions.btnEnabled}`
              : `${styleFormActions.btnDisabled}`
          }`}
          aria-describedby={
            gameState.answerLocked === false && 'next-button-tip'
          }
          onClick={onNextClick}
        >
          {gameState.currentQuestionIndex === gameState.questions.length - 1
            ? 'Finish the game!'
            : 'Next question'}
        </button>

        <div className={styleFormActions.tipWrap}>
          <p id="next-button-tip" className={styleFormActions.tip}>
            This button is disabled, you first need to choose an answer and
            select "Lock in Answer" to proceed in the game.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FormActions

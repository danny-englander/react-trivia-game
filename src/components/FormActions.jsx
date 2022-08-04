import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import styleFormActions from '../assets/scss/components/formactions.module.scss'
import { BsExclamationCircle } from 'react-icons/bs'

const FormActions = ({ onLockClick, onNextClick, formValidationMessage }) => {
  const [gameState] = useContext(GameContext)
  return (
    <>
      {/* Form validation message.  */}
      {formValidationMessage && (
        <div className={styleFormActions.warning}>
          <BsExclamationCircle title="Warning Icon" size="2em" />
          <p
            aria-live="assertive"
            role="alert"
            className={styleFormActions.validation}
          >
            {formValidationMessage}
          </p>
        </div>
      )}

      {/* Enable disable buttons below with conditions and add accessibility. */}
      <div className={styleFormActions.btnItems}>
        {/*
         *** Lock answer button.
         */}
        <div
          className={`${styleFormActions.btnItem} ${styleFormActions.btnItemLock}`}
        >
          <button
            disabled={gameState.answerLocked === true}
            aria-disabled={gameState.answerLocked === true}
            onClick={onLockClick}
            className={`${styleFormActions.btn} ${
              styleFormActions.btnPrimary
            } ${gameState.answerLocked === true ? 'locked' : 'unlocked'}
            `}
          >
            Lock in Answer!
          </button>
        </div>

        {/*----------------------------------------------------*/}

        {/*
         *** Next button.
         */}
        <div
          className={`${styleFormActions.btnItem} ${
            gameState.answerLocked === false
              ? `${styleFormActions.toolTipActive}`
              : ''
          }`}
        >
          <button
            aria-disabled={gameState.answerLocked === false}
            className={`${styleFormActions.btn} ${
              styleFormActions.btnSecondary
            } ${
              gameState.answerLocked === true
                ? `${styleFormActions.btnEnabled}`
                : `${styleFormActions.btnDisabled}`
            }`}
            aria-describedby={
              gameState.answerLocked === false && 'disabledReason'
            }
            onClick={onNextClick}
          >
            {/* Contextual button text depending on where you are in the game. */}
            {gameState.currentQuestionIndex === gameState.questions.length - 1
              ? 'Finish the game!'
              : 'Next question'}
          </button>

          {/*
           *** Tooltip for aria-describedby.
           */}
          <div id="disabledReason" className={styleFormActions.tipWrap}>
            <p className={styleFormActions.tip}>
              This button is disabled, you first need to choose an answer and
              select "Lock in Answer" to proceed in the game.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormActions

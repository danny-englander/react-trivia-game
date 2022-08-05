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

      {/* Show / hide buttons below with conditions. */}
      <div className={styleFormActions.btnItems}>
        <div
          className={`${styleFormActions.btnItem} ${styleFormActions.btnItemLock}`}
        >
          {gameState.answerLocked === false ? (
            <button
              className={`${styleFormActions.btn} ${styleFormActions.btnPrimary}`}
              onClick={onLockClick}
            >
              Lock in Answer!
            </button>
          ) : (
            <button
              className={`${styleFormActions.btn} ${styleFormActions.btnSecondary}`}
              onClick={onNextClick}
            >
              {gameState.currentQuestionIndex === gameState.questions.length - 1
                ? 'Finish the game!'
                : 'Next question'}
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default FormActions

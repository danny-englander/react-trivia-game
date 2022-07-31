import React from 'react'
import StyleEyebrow from '../assets/scss/components/eyebrow.module.scss'

const Eyebrow = ({ gameState }) => {
  return (
    <>
      <div className={StyleEyebrow.wrap}>
        {/* Question number, e.g. 1/8 */}
        <div
          tabIndex="0"
          aria-label={`Question ${gameState.currentQuestionIndex + 1} of ${
            gameState.questions.length
          }`}
          className={StyleEyebrow.question}
        >
          <span className={StyleEyebrow.text}>Question: </span>
          <span className={StyleEyebrow.circle}>
            {gameState.currentQuestionIndex + 1}/{gameState.questions.length}
          </span>
        </div>

        {/* Game score, e.g. 1/8 */}
        <div
          tabIndex="0"
          aria-label={`Score ${gameState.correctAnswersCount} points`}
          className={StyleEyebrow.score}
        >
          <span className={StyleEyebrow.text}>Score: </span>
          <span className={StyleEyebrow.circle}>
            {gameState.correctAnswersCount}
          </span>
        </div>
      </div>
    </>
  )
}

export default Eyebrow

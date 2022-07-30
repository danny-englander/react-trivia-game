import React from 'react'
import StyleEyebrow from '../assets/scss/components/eyebrow.module.scss'

const Eyebrow = ({ gameState }) => {
  return (
    <>
      {/* Question number, e.g. 1/8 */}
      <div className={StyleEyebrow.wrap}>
        <div className={StyleEyebrow.question}>
          <span className={StyleEyebrow.text}>Question: </span>
          <span className={StyleEyebrow.circle}>
            {gameState.currentQuestionIndex + 1}/{gameState.questions.length}
          </span>
        </div>

        {/* Game score, e.g. 1/8 */}
        <div aria-live="assertive" role="alert" className={StyleEyebrow.score}>
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

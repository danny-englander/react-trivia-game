import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import styleFormActions from '../assets/scss/components/formactions.module.scss'
import styleResults from '../assets/scss/components/results.module.scss'
import bgImage from '../assets/img/results-bg.jpg'

const Results = () => {
  const [gameState, dispatch] = useContext(GameContext)
  return (
    <>
      <div className={styleResults.wrap}>
        <div className={styleResults.colContent}>
          <h1 className={styleResults.title}>
            Congratulations, you have completed the game!
          </h1>
          <h2>
            You got {gameState.correctAnswersCount} of{' '}
            {gameState.questions.length} questions correct.
          </h2>

          {/*
           * Here we instantiate useReducer with a click event as a dispatch method.
           * Call the state as defined above.
           */}
          <button
            className={`${styleFormActions.btn} ${styleFormActions.btnPrimary}`}
            onClick={() => dispatch({ type: 'RESTART_GAME' })}
          >
            Play Again!
          </button>
        </div>

        <div className={styleResults.colBG}>
          <div
            className={styleResults.colBGIMG}
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Results

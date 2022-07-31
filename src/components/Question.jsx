import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import Answer from './Answer'
import Eyebrow from './Eyebrow'
import styleForm from '../assets/scss/components/form.module.scss'
import styleQuestion from '../assets/scss/components/question.module.scss'
import { BsQuestionLg } from 'react-icons/bs'

// Receive props from Game.
const Question = ({ onChange, selectedAnswer }) => {
  // Define the global game context.
  const [gameState] = useContext(GameContext)
  // Define the current question gameState index.
  const currentQuestion = gameState.questions[gameState.currentQuestionIndex]
  console.log('currentQuestion', currentQuestion)

  return (
    <>
      <Eyebrow gameState={gameState} />

      <div className={styleQuestion.wrap}>
        <div className={styleQuestion.iconWrap}>
          {/* Question icon */}
          <BsQuestionLg
            title="Question mark icon"
            size="4em"
            className={styleQuestion.icon}
          />
        </div>
        {/* Game question */}
        <h1 className={styleQuestion.text}>{currentQuestion.question}</h1>
      </div>

      {/* If gameState.resultsMessage, show the results message and score. */}
      {gameState.resultsMessage && (
        <div aria-live="assertive" role="alert">
          <h2>{gameState.resultsMessage}</h2>
        </div>
      )}

      {/* Start the answers form */}
      <form>
        <fieldset className={styleForm.fieldset}>
          <legend className={styleForm.legend}>
            Answers for this question
          </legend>
          <div className={styleForm.answers}>
            {/* Render array for each answer (map). */}
            {gameState.answers.map((answer, index) => (
              <Answer
                answerText={answer}
                key={index}
                index={index}
                currentAnswer={selectedAnswer}
                correctAnswer={currentQuestion.correctAnswer}
                onSelectAnswer={onChange}
              />
            ))}
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default Question

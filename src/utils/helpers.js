// Custom function to shuffle the answers.
export const shuffleAnswers = question => {
  const unshuffledAnswers = [
    ...question.dataCorrect,
    ...question.dataIncorrect
  ]

  return unshuffledAnswers.map(unshuffledAnswer => ({ sort: Math.random }))
}

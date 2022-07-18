// Custom function to shuffle the answers.
export const shuffleAnswers = question => {
  const unshuffledAnswers = [
    ...question.dataCorrect,
    ...question.dataIncorrect
  ]

  return unshuffledAnswers.map(unshuffledAnswer => ({
    sort: Math.random(),
    value: unshuffledAnswer,
  }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}

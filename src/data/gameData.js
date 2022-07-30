// Array of questions, answers, and other info that we can pull into the globalGameContext.
const questionData = [
  {
    dataID: "1",
    dataMultiple: "false",
    question: "Which Apollo mission was the first one to land on the Moon?",
    incorrectAnswers: [
      "Apollo 14",
      "Apollo 8",
      "Apollo 10",
    ],
    correctAnswer: "Apollo 11",
    dataBG: "foo_icon"
  },

  {
    dataID: "2",
    dataMultiple: "false",
    question: "The asteroid belt is located between which two planets?",
    correctAnswer: "Mars and Jupiter",
    incorrectAnswers: [
      "Jupiter and Saturn",
      "Mercury and Venus",
      "Earth and Mars"
    ],
    dataBG: ""
  },
  {
    dataID: "3",
    dataMultiple: "false",
    question: "Which country is not part of the United Kingdom (the UK)?",
    incorrectAnswers: [
      "Northern Ireland",
      "Scotland",
      "England"
    ],
    correctAnswer: "Iceland",
    dataBG: ""
  },

  {
    dataID: "4",
    dataMultiple: "false",
    question: "This Formula One race car driver who has won the world championship 7 times.",
    incorrectAnswers: [
      "Ferdinand Alonso",
      "Niki Lauda",
      "James Hunt"
    ],
    correctAnswer: "Lewis Hamilton",
    dataBG: ""
  },
];

export default questionData;

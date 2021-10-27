const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz() {}

function showResults() {}

buildQuiz();

submitButton.addEventListener("click", showResults);

const questions = [
  {
    question: "Question 1",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5",
    },
  },
  {
    question: "Question 2",
    answers: {
      a: "1",
      b: "2",
      c: "3",
    },
  },
  {
    question: "Question 3",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
  },
  {
    question: "Question 4",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5",
      f: "6",
      g: "7",
      h: "8",
    },
  },
];

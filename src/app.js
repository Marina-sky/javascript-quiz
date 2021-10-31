const quizContainer = document.getElementById("quiz");
const questionText = document.getElementById("question-text");
const resultsContainer = document.getElementById("results");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");


let currentSlide = 0;

prevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);
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

function buildQuiz() {
  let output = [];
  let answers;

  for (var i = 0; i < questions.length; i++) {
    answers = [];

    for (letter in questions[i].answers) {
      answers.push(
        `<label><input type="checkbox" class="form-check-input" name="question${i}" value="${letter}">${letter}: ${questions[i].answers[letter]}</label>`
      );
    }

    output.push(
      `<div class="slide">
      <div class="question">${
        questions[i].question
      }</div><div class="answers">${answers.join(" ")}</div>
      </div>`
    );
  }
  quizContainer.innerHTML = output.join("");
}

buildQuiz();

function showResults() {
  let answerContainers = quizContainer.querySelectorAll(".answers");
  let userAnswers = "";

  for (var i = 0; i < questions.length; i++) {
    // find selected answer
    userAnswers = (
      answerContainers[i].querySelector(`input[name=question${i}]:checked`) ||
      {}
    ).value;
  }
  resultsContainer.innerHTML = userAnswers;
}

submitButton.onclick = function () {
  showResults();
};

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  if (currentSlide === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "inline-block";
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

showSlide(currentSlide);

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");
const message = document.getElementById("error-msg");

let currentSlide = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener("click", showResults);

const questions = [
  {
    question: "Question 1",
    answers: [],
  },
  {
    question: "Question 2",
    answers: [],
  },
  {
    question: "Question 3",
    answers: [],
  },
  {
    question: "Question 4",
    answers: [],
  },
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildQuiz() {
  let output = [];
  let answers;

  for (var i = 0; i < questions.length; i++) {
    let n = randomNumber(2, 8);
    answers = questions[i].answers;

    for (j = 1; j <= n; j++) {
      answers.push(
        `<label><input type="checkbox" class="form-check-input" onChange="checkAnswers()" name="question${i}" value="${j}">${j}</label>`
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

function checkAnswers() {
  let answerContainers = quizContainer.querySelectorAll(".answers");
  let navLink = document.querySelectorAll(".nav-link");
  submitButton.disabled = false;

  for (var i = 0; i < questions.length; i++) {
    markedCheckbox = answerContainers[i].querySelectorAll(
      `input[name=question${i}]:checked`
    );

    if (markedCheckbox.length < 1) {
      submitButton.disabled = true;
    }

    if (markedCheckbox.length > i + 3) {
      message.innerHTML =
        `You have selected too many answers on question ${i + 1} (max ${i + 3})`;
      setTimeout(function () {
        message.innerHTML = "";
      }, 3000);
      submitButton.disabled = true;
    }

    if (markedCheckbox.length > 0) {
      navLink[i].style.color = "red";
    } else {
      navLink[i].style.color = "rgba(0,0,0,.55)";
    }
  }
}

function showResults() {
  let answerContainers = quizContainer.querySelectorAll(".answers");
  let userAnswers = "";

  for (var i = 0; i < questions.length; i++) {
    markedCheckbox = answerContainers[i].querySelectorAll(
      `input[name=question${i}]:checked`
    );

    userAnswers += `<div>${questions[i].question}:`;
    for (var checkbox of markedCheckbox) {
      userAnswers += ` ${checkbox.value}`;
    }
    userAnswers += `</div>`;
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

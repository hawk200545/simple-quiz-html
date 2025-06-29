
import { quizData } from "./data.js";
let currentQuiz = 0;
let score = 0;
console.log(quizData)

const questionEl = document.getElementById("question");
const options = document.querySelectorAll('input[name="opt"]');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

function loadQuiz() {
  const current = quizData[currentQuiz];
  questionEl.innerText = current.question;
  a_text.innerText = current.a;
  b_text.innerText = current.b;
  c_text.innerText = current.c;
  d_text.innerText = current.d;

  
  options.forEach((opt) => (opt.checked = false));
}

function getSelectedAnswer() {
  let selected = null;
  options.forEach((opt) => {
    if (opt.checked) {
      selected = opt.value;
    }
  });
  return selected;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelectedAnswer();
  if (!answer) {
    alert("Please select an answer.");
    return;
  }

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    const box = document.querySelector(".box");
    box.innerHTML = `
        <div class="question">You scored ${score}/${quizData.length}!</div>
        <button type = "submit" onclick="location.reload()">Try Again</button>
      `;
  }
});


loadQuiz();

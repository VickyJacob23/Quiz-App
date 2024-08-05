// 'use strict';

//the questions section
let questions = [
    {
        question: "What is the Full Form Of RAM?",
        answers: [
            { options: "Run Accept Memory", correct: false },
            { options: "Random All Memory", correct: false },
            { options: "Random Access Memory", correct: true },
            { options: "None of these", correct: false }
        ]
    },

    {
        question: "What is the Full-Form of CPU?",
        answers: [
            { options: "Central Program Unit", correct: false },
            { options: "Central Processing Unit", correct: true },
            { options: "Central Preload Unit", correct: false },
            { options: "None of these", correct: false }
        ]
    },

    {
        question: "How many bits is a byte?",
        answers: [
            { options: "32", correct: false },
            { options: "16", correct: false },
            { options: "8", correct: true },
            { options: "64", correct: false }
        ]
    },

    {
        question: "What is FMD?",
        answers: [
            { options: "Fluorescent Multi-Layer Disc", correct: true },
            { options: "Flash Media Driver", correct: false },
            { options: "Fast-Ethernet Measuring Device", correct: false },
            { options: "None of these", correct: false }
        ]
    },

    {
        question: "Main circuit board in a computer is:",
        answers: [
            { options: "Hard-disk", correct: false },
            { options: "Mother board", correct: true },
            { options: "Microprocessor", correct: false },
            { options: "None of these", correct: false }
        ]
    },

    {
    question: "What is the name of Front-end Instructor at KodeCamp Cohort 4.0?:",
        answers: [
            { options: "Akpan Victoria", correct: false },
            { options: "Mr. Oluwaseun", correct: false },
            { options: "Paul Steven", correct: false },
            { options: "Akinuliola Akinbobola Oluwafemi", correct:true }
        ]
    }
];

//invoking the id from the html element
const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const nextButtonEl = document.getElementById("next-btn");


//setting the score and the question to zero by default
let currentQuestionIndex = 0;
let score = 0;


//create a function that will be called startQuiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButtonEl.innerHTML = "Next";
    showQuestion();

}

//function that will be called to displays the questions
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.options;
        button.classList.add("btn");
        answerButtonsEl.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        ;
        });
    };

// startQuiz();

//function to hid the previous state
function resetState() {
    nextButtonEl.style.display = "none";
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    };
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("wrong");
    }
  //an array for all the correct answers from the questions and check if the answer is correct or not then disable the button
    Array.from(answerButtonsEl.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButtonEl.style.display = "block";
}


//create a function that will be called nextQuestion
nextButtonEl.addEventListener("click", nextQuestion);
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
//create a function that will be called showScore
nextButtonEl.addEventListener("click", nextQuestion);
function showScore() {
    resetState();
    questionEl.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButtonEl.innerHTML = "Play Again";
    nextButtonEl.style.display = "block";
}

startQuiz();

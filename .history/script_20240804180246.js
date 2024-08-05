'use strict';

//the questions section
let questions = [
    {
        question: "What is the Full Form Of RAM?",
        answer: [
            { options: "Run Accept Memory", correct: false },
            { options: "Random All Memory", correct: false },
            { options: "Random Access Memory", correct: true },
            { options: "None of these", correct: false }
        ]
    },

    {
        question: "What is the Full-Form of CPU?",
        answer: [
            { options: "Central Program Unit", correct: false },
            { options: "Central Processing Unit", correct: true },
            { options: "Central Preload Unit", correct: false },
            { options: "None of these", correct: false }
        ]
    },

    {
        question: "How many bits is a byte?",
        answer: [
            { options: "32", correct: false },
            { options: "16", correct: false },
            { options: "8", correct: true },
            { options: "64", correct: false }
        ]
    },

    {
        question: "What is FMD?",
        answer: [
            { options: "Fluorescent Multi-Layer Disc", correct: true },
            { options: "Flash Media Driver", correct: false },
            { options: "Fast-Ethernet Measuring Device", correct: false },
            { options: "None of these", correct: false }
        ]
    },

    {
        question: "Main circuit board in a computer is:",
        answer: [
            { options: "Hard-disk", correct: false },
            { options: "Mother board", correct: true },
            { options: "Microprocessor", correct: false },
            { options: "None of these", correct: false }
        ]
    },

    {
    question: "What is the name of Front-end Instructor at KodeCamp Cohort 4.0?:",
        answer: [
            { options: "", correct: false },
            { options: "", correct: false },
            { options: "", correct: false },
            { options: "", correct:true }
        ]
    }
];

//invoking the id from the html element
const questionElements = getElementById("question");
const answerButtons = getElementById("answer-buttons");
const nextButton = querySelector('#next-btn');


//setting the score and the question to zero by default
let currentQuestionIndex = 0;
let score = 0;

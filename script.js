const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtunsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
 startButton.classList.add('hide')
 shuffledQuestions = question.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
}

function setNextQuestion() {
resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtunsElement.appendChild(button)
    
 })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtunsElement.firstChild) {
        answerButtunsElement.removeChild(answerButtunsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtunsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Reastar button'
        startButton.classList.remove('hide')
    }
    
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')  
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false},
            { text: '22', correct: false},
            { text: '22', correct: false}
        ]
    },
    {
        question: 'What is 11 + 2?',
        answers: [
            { text: '112', correct: false},
            { text: '13', correct: true},
            { text: '114', correct: false},
            { text: '122', correct: false}
            
        ]
    },
    {
        question: 'What is 7 + 8?',
        answers: [
            { text: '145', correct: false},
            { text: '13', correct: false},
            { text: '15', correct: true},
            { text: '178', correct: false}
            
        ]
    },
    {
        question: 'What is 11 - 2?',
        answers: [
            { text: '10', correct: false},
            { text: '9', correct: true},
            { text: '13', correct: false},
            { text: '8', correct: false}
            
        ]
    },
    {
        question: 'What is 49 + 5?',
        answers: [
            { text: '45', correct: false},
            { text: '51', correct: false},
            { text: '54', correct: true},
            { text: '53', correct: false}
            
        ]
    },
    {
        question: 'What is 27 + 7?',
        answers: [
            { text: '34', correct: true},
            { text: '33', correct: false},
            { text: '29', correct: false},
            { text: '35', correct: false}
            
        ]
    },
    {
        question: 'What is 54 - 23?',
        answers: [
            { text: '34', correct: false},
            { text: '31', correct: true},
            { text: '43', correct: false},
            { text: '47', correct: false}
            
        ]
    },
]

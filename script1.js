const quizData = [
    {
        question: "Which number should come next in the series, 48, 24, 12, ......?",
        a: "8",
        b: "6",
        c: "4",
        d: "2",
        correct: "b",
    },
    {
        question: "RQP, ONM, _, IHG, FED, find the missing letters. ",
        a: "CDE",
        b: "LKI",
        c: "LKJ",
        d: "BAC",
        correct: "c",
    },
    {
        question: "PETAL: FLOWER",
        a: "Pen: Paper",
        b: "Engine: Car",
        c: "Cat: Dog",
        d: "Ball: Game",
        correct: "b",
    },
    {
        question: "Which word does not belong to others?",
        a: "Inch",
        b: "Kilogram",
        c: "Centimeter",
        d: "Yard",
        correct: "b",
    },
    {
        question: "1,3,5,7,__",
        a: "9",
        b: "11",
        c: "3",
        d: "1",
        correct: "b",
    },
     {
        question: "Pointing to a photograph, a man said, I have no brother, and that man's father is my father's son. Whose photograph was it?",
        a: "His son",
        b: "His own brother",
        c: "His father",
        d: "His nephew",
        correct: "a",
    },
     {
        question: "Peter is in the East of Tom and Tom is in the North of John. Mike is in the South of John then in which direction of Peter is Mike?",
        a: "South-East",
        b: "South-West",
        c: "South",
        d: "North-East",
        correct: "b",
    },
     {
        question: "An animal always has",
        a: "Skin",
        b: "Heart",
        c: "Lungs",
        d: "life",
        correct: "d",
    }, 
	{
        question: "If in a certain language, NOIDA is coded as OPJEB, how is DELHI coded in that language?",
        a: "CDKGH",
        b: "EFMIJ",
        c: "FGNJK",
        d: "IHLED",
        correct: "b",
    },
     {
        question: "77,70,63,56,49,__",
        a: "42",
        b: "46",
        c: "44",
        d: "48",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
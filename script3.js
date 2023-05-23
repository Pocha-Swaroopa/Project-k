const quizData = [
    {
        question: "Who is the father of C language?",
        a: "Steve Jobs",
        b: "James Gosting",
        c: "Dennis Ritchie",
        d: "Rasmus Lerdorf",
        correct: "c",
    },
    {
        question: "Who is the father of C language?",
        a: "int number",
 	  b: "float rate",
 	  c: "int variable_count",
 	  d: "int $main",
        correct: "d",
    },
 
    {
        question:".All keywords in C are in :",
        a:"LowerCase letters",
        b: "UpperCase letters",
        c: "CameCase letters",
        d: "None of the mentioned",
        correct: "a",
    },
    {
        question:"Which is valid C expression?",
        a:"int my_num = 100,000",
        b:"int my_num = 100000",
        c:"int my num = 1000",
        d:"int $my_num = 10000",
        correct:"b",
   },
       {
        question:"Which of the following cannot be a variable name in C?",
        a:"volatile",
        b:"true",
        c:"friend",
        d:"export",
        correct: "a",
   },
   {
 
        question:"What is short int in C programming?",
        a:"The basic data type of C",
        b:"Qualifier",
        c:"Short is the qualifier and int is the basic data type",
        d:"All of the mentioned",
        correct:"c",
   },
   {
         question:"Which of the following declaration is not supported by C language?",
        a:"String str",
        b:"char *str",
        c:"float str = 3e2",
        d:"Both “String str;” and “float str = 3e2",
        correct:"a",
   },
   {
       question:"Which keyword is used to prevent any changes in the variable within a C program?",
        a:"immutable",
        b:"mutable",
        c:"const",
        d:"volatile",
        correct:"c",
   },
   {
        question:"What is the result of logical or relational expression in C?",
        a:"True or False",
        b:"0 or 1",
        c:"0 if an expression is false and any positive number if an expression is true",
        d:"None of the mentioned",
        correct:"b",
   },
   {
      question:"Which of the following typecasting is accepted by C language?",
        a:"Widening conversions",
        b:"Narrowing conversions",
        c:"Widening & Narrowing conversions",
        d:"None of the mentioned",
        correct:"c",
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
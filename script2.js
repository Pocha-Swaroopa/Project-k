const quizData = [
    {
        question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        a: "150 meters",
        b: "180 meters",
        c: "324 meters",
        d: "150 meters",
        correct: "a",
    },
    {
        question: "A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is ?",
        a: "1/4",
 	  b: "1/10",
 	  c: "7/15",
 	  d: "8/15",
        correct: "b",
    },
 
    {
        question: "Alfred buys an old scooter for Rs. 4700 and spends Rs. 800 on its repairs. If he sells the scooter for Rs. 5800, his gain percent is:?",
        a: "44/7%",
        b: "55/11%",
        c: "10%",
        d: "12%",
        correct: "b",
    },
    {
        question: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
        a:"30%",
        b:"70%",
	    c:"100%",
        d:"250%",
        correct: "b",  
   },
       {
        question:"A bank offers 5% compound interest calculated on half-yearly basis. A customer deposits Rs. 1600 each on 1st January and 1st July of a year. At the end of the year, the amount he would have gained by way of interest is",
        a:"120",
        b:"121",
        c:"122",
        d:"123",
        correct: "a",
   },
   {
 
        question:"There is 60% increase in an amount in 6 years at simple interest. What will be the compound interest of Rs. 12,000 after 3 years at the same rate?",
        a:"Rs.2160",
        b:"Rs.3120",
        c:"Rs.3972",
        d:"Rs.6240",
        correct:"c",
   },
   {
        question:"A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.",
        a:"2 hours",
        b:"3 hours",
        c:"4 hours",
        d:"5 hours",
        correct:"c",
   },
   {
       question:"A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
        a:"6 hours",
        b:"10 hours",
        c:"15 hours",
        d:"30 hours",
        correct:"c",
   },
   {
       question:"From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be done?",
        a:"564",
        b:"645",
        c:"735",
        d:"756",
        correct:"d",
   },
   {
       question:"Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:",
        a:"2:5",
        b:"3:5",
        c:"4:5",
        d:"6:7",
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
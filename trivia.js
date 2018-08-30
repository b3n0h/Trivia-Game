// questions, need question plus answers and correct answer
let trivia = [
  {
    qId: 1,
    question: 'What is the only mammal that can fly?',
    answers: ['Bats', 'Ostriches', 'Peacocks', 'Flamingos',],
    correctAns: 'Bats'
  },
  {
    qId: 2,
    question: 'What animal can survive 2 years without food?',
    answers: ['Lions', 'Tarantulas', 'Octopuses', 'Bees',],
    correctAns: 'Tarantulas'
  },
  {
    qId: 3,
    question: 'How long can an alligator live up to?',
    answers: ['70 years', '80 years', '90 years', '100 years',],
    correctAns: '100 years'
  },
  {
    qId: 4,
    question: 'How heavy can an elephant tooth be?',
    answers: ['6 pounds', '7 pounds', '8 pounds', '9 pounds',],
    correctAns: '9 pounds'
  },
  {
    qId: 5,
    question: 'What is a group of owls called?',
    answers: ['A murder', 'A parliament', 'A flock', 'A convocation',],
    correctAns: 'A parliament'
  },
  {
    qId: 6,
    question: 'How fast can a woodpecker peck?',
    answers: ['20 pecks a second', '40 pecks a second', '50 pecks a second', '80 pecks a second',],
    correctAns: '20 pecks a second'
  },
  {
    qId: 7,
    question: 'What is the most poisonous fish in the world?',
    answers: ['Sea Lion', 'Puffer Fish', 'Stone Fish', 'Toad Fish',],
    correctAns: 'Stone Fish'
  },
  {
    qId: 8,
    question: 'How often does a whales heart beat?',
    answers: ['9 times a minute', '12 times a minute', '15 times a minute', '20 times a minute',],
    correctAns: '9 times a minute'
  },
  {
    qId: 9,
    question: 'What color can a squirrel not see?',
    answers: ['Blue', 'Orange', 'Purple', 'Red',],
    correctAns: 'Red'
  },
  {
    qId: 10,
    question: 'How many hours do ferrets sleep a day?',
    answers: ['4 hours', '7 hours', '15 hours', '20 hours',],
    correctAns: '20 hours'
  },
]

//game variables
let qId = 1
let correctAns = 0
let incorrectAns = 0
let unanswered = 0
let message = ''
let time = 30
var intervalId
var questionCounter = 1
var correctAnsId

// Start game function
$(document).ready(function () {
  $('.container').hide()
  $('.answerTitle').hide()
  $('.nextQuestion').hide()
  startGame()
})

function startGame () {
  $('#startGame').on('click', function () {
    $('#startGame').hide()
    $('.container').show()
    $('.timer').html(`00:${time}`)
    runTimer()
    display()
  })
}

//Display question & answers
let idArr = ['#A', '#B', '#C', '#D']
function display () {
  $('.questionTitle').append(trivia[questionCounter-1].question)
  for (let i = 0; i < trivia[questionCounter-1].answers.length; i++) {
    $(idArr[i]).append(trivia[questionCounter-1].answers[i])
    if (trivia[questionCounter-1].answers[i] === trivia[questionCounter-1].correctAns) {
      correctAnsId = idArr[i]
    }
  }
}

function empty () {
  $('.questionTitle').empty()
  $('.message').empty()
  $('.choices').prop('checked', false)
  $('#A').empty()
  $('#B').empty()
  $('#C').empty()
  $('#D').empty()
}

function checkAns () {
  var checkAns = $(this).siblings('span').text()
  checkAns = checkAns.split(': ') 
  if (checkAns[1] === trivia[questionCounter-1].correctAns) {
    questionCounter++
    correctAns++
  } else {
    questionCounter++
    incorrectAns++
  }
  result()
  $('.nextQuestion').show()
}

function result () {
  $('.questionTitle').parent().hide()
  $('.answerTitle').show()
  for (let i = 0; i < trivia[questionCounter-1].answers.length; i++) {
    if (idArr[i] !== correctAnsId) {
      $('.message').text('Correct!')
      $(idArr[i]).parent().hide()
    } else {
      $('.message').text('Incorrect...')
    }
  }
}

function nextQuestion () {
  empty()
  display()  
  showNew()
  runTimer()
}

// Shows next question and answers
function showNew () {
  $('.questionTitle').parent().show()
  for (let i = 0; i < trivia[questionCounter - 1].answers.length; i++) {
    $(idArr[i]).parent().show()
  }
  $('.answerTitle').hide()
  $('.nextQuestion').hide()
}

//Event Listener
$('.choices').on('click', function () {
  stop()
  checkAns()
})
$('.nextQuestion').on('click', function () {
  $('.choices').removeAttr('checked') 
  nextQuestion()
})

function runTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000)
}

function decrement() {
  time--;
  $('.timer').text("00:" + converter(time));
  if (time === 0) {
    stop();
    $('.timer').text("Time's Up")
    unanswered++
    result()
  }
}

function converter(timer) {
  if (timer < 10) {
    timer = '0' + timer
  }
  return timer
}

function stop() {
  clearInterval(intervalId);
}
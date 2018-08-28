// questions, need question plus answers and correct answer
let trivia = [
  {
    qId: 1,
    question: 'What is the only mammal that can fly?',
    answers: ['Bats', 'Ostriches', 'Peacocks', 'Flamingos',],
    correctAns: 'Bat'
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
let message = ''
let startGame = document.getElementsById('startGame')

// Start game function
$(document).ready(function () {
  $('.container').hide()
  startGame()
})

function startGame () {
  $('#startGame').on('click', function () {
    $('#startGame').hide()
    $('.container').show()
  })
}

startGame.

// let time = 30
// $('timer').text('00:30')

// function timeConversion(t) {
//   var minutes = Math.floor(t / 60)
//   var seconds = t - (minutes * 60)

//   if (seconds < 10) {
//     seconds = '0' + seconds
//   }

//   if (minutes === 0) {
//     minutes = '00'
//   } else if (minutes < 10) {
//     minutes = '0' + minutes
//   }

//   return minutes + ':' + seconds
// }
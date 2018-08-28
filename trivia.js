// questions, need question plus answers and correct answer
let trivia = [
  {
    q1 = 'What is the only mammal that can fly?',
    answers: ['Bats', 'Ostriches', 'Peacocks', 'Flamingos',],
    correctAns: 'Bat'
  },
  {
    q2 = 'What animal can survive 2 years without food?',
    answers: ['Lions', 'Tarantulas', 'Octopuses', 'Bees',],
    correctAns: 'Tarantulas'
  },
  {
    q3 = 'How long can an alligator live up to?',
    answers: ['70 years', '80 years', '90 years', '100 years',],
    correctAns: '100 years'
  },
  {
    q4 = 'How heavy can an elephant tooth be?',
    answers: ['6 pounds', '7 pounds', '8 pounds', '9 pounds',],
    correctAns: '9 pounds'
  },
  {
    q5 = 'What is a group of owls called?',
    answers: ['A murder', 'A parliament', 'A flock', 'A convocation',],
    correctAns: 'A parliament'
  },
  {
    q6 = 'How fast can a woodpecker peck?',
    answers: ['20 pecks a second', '40 pecks a second', '50 pecks a second', '80 pecks a second',],
    correctAns: '20 pecks a second'
  },
  {
    q7 = 'What is the most poisonous fish in the world?',
    answers: ['Sea Lion', 'Puffer Fish', 'Stone Fish', 'Toad Fish',],
    correctAns: 'Stone Fish'
  },
  {
    q8 = 'How often does a whales heart beat?',
    answers: ['9 times a minute', '12 times a minute', '15 times a minute', '20 times a minute',],
    correctAns: '9 times a minute'
  },
  {
    q9 = 'What color can a squirrel not see?',
    answers: ['Blue', 'Orange', 'Purple', 'Red',],
    correctAns: 'Red'
  },
  {
    q10 = 'How many hours do ferrets sleep a day?',
    answers: ['4 hours', '7 hours', '15 hours', '20 hours',],
    correctAns: '20 hours'
  },
]

// need to append questions to div
trivia.array.forEach(trivia => {
  
});

function timeConversion(t) {
  var minutes = Math.floor(t / 60)
  var seconds = t - (minutes * 60)

  if (seconds < 10) {
    seconds = '0' + seconds
  }

  if (minutes === 0) {
    minutes = '00'
  } else if (minutes < 10) {
    minutes = '0' + minutes
  }

  return minutes + ':' + seconds
}
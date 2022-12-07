#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!');
let flag = 'win'
let win = 0
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' +  ' ' + `${name}` + '!');
console.log('What is the result of the expression?')
while (flag === 'win') {
  const actions = ['+', '-', '*']
  let left = Math.floor(Math.random() * (0 - 20) + 20)
  let right = Math.floor(Math.random() * (0 - 20) + 20)
  let rnActions = actions[Math.floor(Math.random() * (0 - 3) + 3)]
  let Question = eval(left + rnActions + right)
  console.log('Question:' + ' ' + `${left}` + ' ' + `${rnActions}` + ' ' + `${right}`)
  const answer = readlineSync.question('Your answer: ')
  if (answer === String(Question)) {
    console.log('Correct!')
    win += 1
  }
  if (answer !== String(Question)) {
    console.log(`${answer}` + ' ' + 'is wrong answer ;(. Correct answer was' + ' ' + `${Question}` + '.' +  '\n' +  'Lets try again,' + ' ' + `${name}` + '!')
  flag = 'lose'
  }
  if (win === 3) {
    console.log('Congratulations,' + ' ' + `${name}` + '!')
    break
  }
}
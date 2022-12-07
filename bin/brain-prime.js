#!/usr/bin/env node

import readlineSync from 'readline-sync'
console.log('Welcome to the Brain Games!');
let flag = 'win'
let win = 0
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' +  ' ' + `${name}` + '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
while (flag === 'win') {
  let num = Math.floor(Math.random() * (0 - 100) + 100)
  console.log('Question: ' + `${num}`)
  let answer = readlineSync.question('Your answer: ')
  if (answer !== 'yes' && answer !== 'no') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".' + '\n' + 'Lets try again,' + ' ' + `${name}` + '!')
    flag = 'lose'
  }
  function prime(n) {
  let m = Math.sqrt(n)
  let isPrime = 'true'
  for (var i = 2; i <= m; i += 1) {
      if (n % i === 0) {
        isPrime = 'false'
        break
    }
  }
    return isPrime
}  
  let check = prime(num)
  if (check === 'true' && answer === 'yes') {
    console.log('Correct!')
    win += 1
  } if (check !== 'true' && answer === 'no') {
    console.log('Correct!')
    win += 1
  } if (check === 'true' && answer === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".' + '\n' + "Let's try again," + ' ' + `${name}` + '!')
    flag = 'lose'
  } if (check !== 'true' && answer === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".' + '\n' + "Let's try again," + ' ' + `${name}` + '!')
    flag = 'lose'
  } if (win === 3) {
  console.log('Congratilutions,' + ' ' + `${name}` + '!')
  break
}
}

#!/usr/bin/env node

import readlineSync from 'readline-sync'
console.log('Welcome to the Brain Games!');
let flag = 'win'
let win = 0
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' +  ' ' + `${name}` + '!');
console.log('Find the greatest common divisor of given numbers.')
while (flag === 'win') {
  let left = Math.floor(Math.random() * (0 - 100) + 100);
  let right = Math.floor(Math.random() * (0 - 100) + 100);
  console.log('Question:' + ' ' + `${left}` + ' ' + `${right}`)
  const answer = readlineSync.question('Your answer: ')
  function NOD(left, right) {
	if (right > left) {
    return NOD(right, left);
  }
	if (!right) {
    return left;
  }
	return NOD(right, left % right);
}
  let i = NOD(left, right)
  if (answer === String(i)) {
    win += 1
    console.log('Correct!')
  } if (answer !== String(i)) {
    console.log(`${answer}` + ' ' + 'is wrong answer ;(. Correct answer was' + ' ' + `${i}` + '.' + '\n' + "Let's try again," + ' ' + `${name}` + '!')
  flag = 'lose'
  }
  if (win === 3) {
    console.log('Congratulations,' + ' ' + `${name}` + '!')
    break
  }
}

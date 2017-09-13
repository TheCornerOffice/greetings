import React from 'react';

const FAST = 300
const MEDIUM = 800
const SLOW = 1500

const GreetingsData = {
  greetings: [
    "Hi",
    "Hello",
    "How are you?",
    "Hey",
    "What's up?"
  ],
  modifiers: [
    "Nice weather, isn't it?",
    "That's a great tie",
    "Well ain't that dandy?"
  ]
}


let sample = array => {
  return array[Math.floor(Math.random() * array.length)]
}

let selectDifferent = (array, current = null) => {
  value = sample(array)
  if (value === current) {
    return selectDifferent(array, current)
  } else {
    return value
  }
}

let generateGreeting = ({ gratuitous, garrulous, gregarious}) => {
  let initialOutput = selectDifferent()
}

// greetings
//
// let generateGreeting = (gratuitous, garrulous, gregarious) => {
//   let initialOutput = selectDifferent(GreetingsData.greetings)
//
//   if (gratuitous) {
//     setInterval(() => {
//
//     })
//   }
// }

// if gratuitous - set timeout


// if garrulous - lower timeout


// if gregarious - add modifier

// const GreetingsGenerator = (traits)


let greetingFunc1 = () => {
  return "hello"
}

let greetingFunc2 = () => {
  return "goodbye"
}

export {
  greetingFunc1,
  greetingFunc2
}

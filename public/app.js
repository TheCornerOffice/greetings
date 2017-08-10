let greetingsArray = ["hi", "hello", "how are you?"]

let sample = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

let regenerateGreeting = () => {
  alert(sample(greetingsArray))
  regenerateGreeting()
}

regenerateGreeting()

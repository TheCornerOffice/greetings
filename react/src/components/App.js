import React, { Component } from 'react';
import Button from './Button'
import GreetingsList from './GreetingsList'

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

let selectDifferent = (array, current = null) => {
  let value = array[Math.floor(Math.random() * array.length)]
  if (value === current) {
    return selectDifferent(array, current)
  } else {
    return value
  }
}


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      traits: {
        garrulous: false, // many words
        gratuitous: true, // activate change
        gregarious: false // a lot more words
      },
      greetings: ["Hi"],
    }

    this.interval = 1000

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.setGreeting = this.setGreeting.bind(this)
  }

  handleGregarious() {
    // check gregarious
  }

  handleButtonClick(trait) {
    let newTraits = Object.assign({}, this.state.traits, {
      [trait]: !this.state.traits[trait]
    })

    let newState = Object.assign({}, this.state, { traits: newTraits })
    this.setState(newState)
  }

  setGreeting(garrulous, gratuitous, gregarious) {
    this.interval = garrulous ? 200 : 1000
    // if (!gratuitous) {
      clearTimeout()
    // }
    // console.log(this.interval)

    // if (gratuitous) {
      setTimeout(() => {
        let [currentGreeting] = this.state.greetings.slice(-1)
        let nextGreeting = selectDifferent(GreetingsData.greetings, currentGreeting)

        if (gregarious) {
          nextGreeting += ` ${selectDifferent(GreetingsData.modifiers)}`
        }

        let nextGreetings = this.state.greetings.concat(nextGreeting).slice(-5)

        this.setState({ greetings: nextGreetings })
      }, this.interval)
    // }
  }

  componentDidMount() {
    let { garrulous, gratuitous, gregarious } = this.state.traits
    if (gratuitous) {
      this.setGreeting(garrulous, gratuitous, gregarious)
    }
    // let { garrulous, gratuitous, gregarious } = this.state.traits

    // if (gratuitous) {
      // setInterval(this.setGreeting, this.interval)
    // }
  }

  componentWillUpdate() {
    // triggering on multiple updates
    // need this to work solely with certain updates (button only)
    // clearTimeout()
    let { garrulous, gratuitous, gregarious } = this.state.traits
    if (gratuitous) {
      this.setGreeting(garrulous, gratuitous, gregarious)
    }
    // let { garrulous, gratuitous, gregarious } = this.state.traits
    //
    //
    // if (gratuitous) {
    //   setInterval(this.setGreeting, this.interval)
    // }
  }

  render() {
    let traits = Object.keys(this.state.traits)

    let buttonRow = traits.map(trait => {
      let toggleButton = (event) => {
        return this.handleButtonClick(trait)
      }

      return(
        <Button
          key={trait}
          trait={trait}
          active={this.state.traits[trait]}
          onButtonClick={toggleButton}
        />
      )
    })

    return(
      <div>
        <div className="expanded button-group">
          {buttonRow}
        </div>
        <div className="row">
          <GreetingsList greetings={this.state.greetings}/>
        </div>
      </div>
    )
  }
}

export default App;

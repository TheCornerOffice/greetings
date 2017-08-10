import React, { Component } from 'react';
import Button from './Button'
import GreetingsList from './GreetingsList'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      traits: {
        garrulous: false, // many words
        gratuitous: true, // activate change
        gregarious: false // a lot more words
      }
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(trait) {
    let newTraits = Object.assign({}, this.state.traits, {
      [trait]: !this.state.traits[trait]
    })

    let newState = Object.assign({}, this.state, { traits: newTraits })
    this.setState(newState)
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
      <div className="expanded button-group">
        {buttonRow}
        <GreetingsList {...this.state.traits}/>
      </div>
    )
  }
}

export default App;

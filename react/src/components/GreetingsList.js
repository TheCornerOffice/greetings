import React from 'react';

const GreetingsList = props => {
  let greetingsList = props.greetings.map(greeting => {
    return <li key={Math.random()}>{greeting}</li>
  })

  return(
    <ul>
      {greetingsList}
    </ul>
  )
}

export default GreetingsList;

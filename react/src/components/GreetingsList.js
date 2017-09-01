import React, { Component } from 'react';
import { greetingFunc1 } from './GreetingGenerator'

const GreetingsList = props => {
  return(
    <h1>
      {greetingFunc1()}
    </h1>
  )
}

export default GreetingsList;

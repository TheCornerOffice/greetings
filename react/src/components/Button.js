import React from 'react';

const Button = props => {
  let buttonClass = "button ";

  if (!props.active) {
    buttonClass += "hollow"
  }

  return(
    <div onClick={props.onButtonClick} className={buttonClass}>
      {props.trait}
    </div>
  )
}

export default Button;

import React from "react"

function Header(props){
  return(
    <header>
      <h1>Clicky Game!</h1>
      <div>
        <strong>Current score:</strong> {props.current} || <strong>High Score:</strong> {props.high}
      </div>
    </header>
  )
}

export default Header
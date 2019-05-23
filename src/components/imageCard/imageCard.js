import React from "react"

const imageArr = [
  
]

function imageCard(props) {
  return (
    <div className="img-container"
      onClick={() => props.handleIamgeClick(props.id)} >
      <img alt={props.name} src={props.image} />
    </div>
  )
}

export default imageCard;
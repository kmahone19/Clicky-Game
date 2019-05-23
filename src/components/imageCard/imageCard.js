import React from "react"



function imageCard(props) {



  return (
    <div className="img-container"
      onClick={() => props.handleIamgeClick(props.id)} >
      <img alt={props.name} src={props.image} data-clicked={props.clicked} />
    </div>
  )
}

export default imageCard;
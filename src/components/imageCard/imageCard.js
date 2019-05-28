import React from "react"



function imageCard(props) {

  const style = {
    card: {
      width: 200,
      height: 150,
      margin: "15px 45px",
      boxShadow: "0 3px 6px #999, 0 3px 6px #999",
      border: "3px solid white",
      display: "flex",
      justifyContent: "center"
    },
    image: {
      width: "100%",
      height: "100%"
    }
    }

  return (
    <div className="col-4 col-md-2" style={style.card}>
      <div className="img-container" 
      onClick={() => props.handleIamgeClick(props.id)} >
      <img alt={props.name} src={props.image} style={style.image} />
    </div>
    </div>
  )
}

export default imageCard;
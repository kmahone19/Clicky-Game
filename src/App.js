import React from 'react';
import Header from "./components/header/header"
import ImageCard from './components/imageCard/imageCard';

const imageArr = [
  {
    id: 1,
    image: "./images/ryu.jpg",
    name: "Ryu"
  },
  {
    id: 2,
    image: "./images/akuma.jpg",
    name: "Akuma"
  },
  {
    id: 3,
    image: "./images/chunli.jpg",
    name: "Chun Li"
  },
  {
    id: 4,
    image: "./images/guile.png",
    name: "Guile"
  },
  {
    id: 5,
    image: "./images/Cammy.jpg",
    name: "Cammy"
  },
  {
    id: 6,
    image: "./images/ken.png",
    name: "Ken"
  },
  {
    id: 7,
    image: "./images/bison.jpg",
    name: "M Bison"
  },
  {
    id: 8,
    image: "./images/vega.jpg",
    name: "Vega"
  },
  {
    id: 9,
    image: "./images/sagat.jpg",
    name: "Sagat"
  }
]

class App extends React.Component {

  state = {
    count: 0,
    imgList: imageArr,
    high: 9,
    clicked:[]
  }

  handleIamgeClick = (id) => {
    console.log(this.state.clicked)
    
    if (this.state.clicked.includes(id)) {
      this.setState({ count: 0 });
      this.shuffleCards();
      this.setState({clicked: []})
    } else {
      this.setState({ count: this.state.count + 1 });
      this.shuffleCards();
      this.state.clicked.push(id)
    }
    if(this.state.count === this.state.high){
      console.log("this works")
      this.setState({
        high: this.state.count
      })
    }
  };

  shuffleCards = () => {
    const shuffledImgList = this.state.imgList.sort(() => 0.5 - Math.random());
    this.setState({
      imgList: shuffledImgList
    });
  };

  render() {
    const style = {
      wrapper: {
        height: "100%",
        display: "flex",
        flexFlow: "row wrap",
        padding: "25px 0 50px",
        justifyContent: "space-around",
        alignContent: "flex-start"
      }
    }
    return (
      <div>
        <Header count={this.state.count} high={this.state.high} />
        <div className="container">
          <div className="row" style={style.wrapper}>
          {
            this.state.imgList.map(image => {
              return (
                <ImageCard id={image.id} image={image.image} handleIamgeClick={this.handleIamgeClick} key={image.id} name={image.name} clicked="false" />
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

export default App;

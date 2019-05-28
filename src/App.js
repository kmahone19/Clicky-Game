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
    image: "./images/ehonda.png",
    name: "Ehonda"
  },
  {
    id: 4,
    image: "./images/blanka.jpg",
    name: "Blanka"
  },
  {
    id: 5,
    image: "./images/cammy.png",
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
    image: "./images/alex.jpg",
    name: "Alex"
  }
]

class App extends React.Component {

  state = {
    count: 0,
    imgList: imageArr,
    high: 0,
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
      this.handleHighScores();
      this.shuffleCards();
      this.state.clicked.push(id)
    }
  };

  shuffleCards = () => {
    const shuffledImgList = this.state.imgList.sort(() => 0.5 - Math.random());
    this.setState({
      imgList: shuffledImgList
    });
  };

  handleHighScores = () => {
    if (this.state.count === this.state.high) {
      this.setState({ high: this.state.count })
    }
  }

  render() {
    return (
      <div>
        <Header count={this.state.count} high={this.state.high} />
        <div className="container">
          {
            this.state.imgList.map(image => {
              return (
                <ImageCard id={image.id} image={image.image} handleIamgeClick={this.handleIamgeClick} key={image.id} name={image.name} clicked="false" />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;

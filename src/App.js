import React from 'react';
import Header from "./components/header/header"
import ImageCard from './components/imageCard/imageCard';

const imageArr = [
  {
    id: 1,
    image: "",
    name: ""
  },
  {
    id: 2,
    image: "",
    name: ""
  },
  {
    id: 3,
    image: "",
    name: ""
  },
  {
    id: 4,
    image: "",
    name: ""
  },
  {
    id: 5,
    image: "",
    name: ""
  },
  {
    id: 6,
    image: "",
    name: ""
  },
  {
    id: 7,
    image: "",
    name: ""
  },
  {
    id: 8,
    image: "",
    name: ""
  },
  {
    id: 9,
    image: "",
    name: ""
  }
]

class App extends React.Component {

  state = {
    count: 0,
    imgList: imageArr,
    high: 0
  }

  handleIamgeClick = () => {

    if (this.state.imgList.clicked) {
      this.setState({ count: this.state.count + 1 });
      this.handleHighScores();
      this.shuffleCards();
    } else if (!this.state.imgList.clicked) {
      this.setState({ count: 0 });
      this.shuffleCards();
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
                <ImageCard image={image.image} handleIamgeClick={this.handleIamgeClick} key={image.id} name={image.name} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;

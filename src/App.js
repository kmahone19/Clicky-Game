import React from 'react';
import Header from "./components/header/header"
import ImageCard from './components/imageCard/imageCard';

const imageArr = [
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  }
]

class App extends React.Component {

  state = {
    count: 0,
    imgList: imageArr,
    high: 0
  }

  handleIamgeClick = () => {
    this.setState({ count: this.state.count + 1 })
    
  };

  shuffleCards = () => {
    const shuffledImgList = this.state.imgList.sort(() => 0.5 - Math.random());

    this.setState({
      imgList: shuffledImgList
    });
  };

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

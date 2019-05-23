import React from 'react';
import Header from "./components/header/header"
import ImageCard from "./components/imageCard/imageCard"


class App extends React.Component {

  state = {
    count: 0
  }

  handleIamgeClick = () => {

    this.setState({ count: this.state.count + 1 });
  };

  shuffleCards = () => {
    const shuffledFriendList = this.state.friendList.sort(() => 0.5 - Math.random());
  
    this.setState({
      friendList: shuffledFriendList
    });
  };

  render() {
    return (
      <div>
        <Header />
        <ImageCard />
      </div>
    )
  }
}

export default App;

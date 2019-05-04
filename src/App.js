import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    friends.sort(() => Math.random() - 0.5);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
  // render() {
  //   return (
  //     <Wrapper>
  //       <Title score={this.state.score} highscore={this.state.highscore}>Clicky Game</Title>
  //       {this.state.friends.map(FriendCard => (
  //         <FriendCard
  //           clickCount={this.clickCount}
  //           id={FriendCard.id}
  //           key={FriendCard.id}
  //           image={FriendCard.image}
  //         />
  //       ))}
  //     </Wrapper>
  //   );
  // }

}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RanShibuki from "./components/RanShibuki/RanShibuki.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Title from "./components/Title/Title";
import NavBar from "./components/NavBar/NavBar.js";
// import Counter from "./Counter.js";
import Footer from "./components/Footer/Footer.js";
import ranShibuki from "./ranshibuki.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props){
    super(props)
    this.state = {
      ranShibuki: ranShibuki,
      count: 0
    };
  }



  handleCount = () => {
    console.log("Hey!")
    this.setState({ count: this.state.count + 1 })
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Router>
      <NavBar />
      <Wrapper>
        <Title>Clicking Game with Ran Shibuki</Title>
        {this.state.ranShibuki.map(ranShibuki => (
          <RanShibuki
            id={ranShibuki.id}
            name={ranShibuki.name}
            image={ranShibuki.image}
            handleIncrement={this.handleCount}
          />
        ))}
      </Wrapper>
      <Footer />
      </Router>
    );
  }
}

export default App;


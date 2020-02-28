import React from "react";
import NavBar from "./components/NavBar/NavBar.js";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
  // We always use the setState method to update a component's state
  this.setState({ count: this.state.count + 1 });
  };

  render() {
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-black">
        Score Counter: 
      </div>
      <NavBar
        count={this.state.count}
        handleIncrement={this.state.handleIncrement}
      />
    </div>
    );
  }
}
  

  export default Counter;  
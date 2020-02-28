import React, {useState} from "react";
import "./style.css";

function computeCount(constCount) {

}

function Wrapper(props) {
  const [count, setCount] = useState(7);
  // console.log("this.state.count", this.state.count);
return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;

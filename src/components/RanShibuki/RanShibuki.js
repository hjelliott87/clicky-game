import React from "react";
import "./style.css";

// let imageRS = $(this.image);
// let ranShibuki = [];

// for (let i = 0; i <= ranShibuiki.length; i++) {

//   imageRS.addClass(this.image);
//   imageRS.attr("src", this.image);
//   imageRS.attr("data-crystalvalue", ranShibuki[0]);
//   $(this.image).append(imageRS);

// }

{/* <div className="img" aria-label="click item" class="click-item">
        <img alt={props.name} src={props.image} />
      </div> */}

function RanShibuki(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={props.handleIncrement} />
      </div>
    </div>
  );
}
export default RanShibuki;

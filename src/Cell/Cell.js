import React, { Component } from "react";
import "./Cell.css";

class Cell extends Component {
  handleClick(evt) {
    // console.log(evt.target.parentNode.key);
    this.props.flipCellsAround();
  }

  render() {
    // console.log(this.props);
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    return <td className={classes} onClick={() => this.handleClick()} />;
  }
}

export default Cell;

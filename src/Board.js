import React, { Component } from "react";

import Cell from "./Cell";

class Board extends Component {
  // state:
  //cell been clicked
  //save board state
  //is game won
  //keep track what cells on/off

  //handleclick function to toggle cell on/off

  // create a board on initial go

  //render a board while game in motion

  //function to determine a cells surroundings when one changes

  render() {
    return (
      <div>
        <h1>This is your board</h1> <Cell />
      </div>
    );
  }
}

export default Board;

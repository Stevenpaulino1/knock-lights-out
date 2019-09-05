import React, { Component } from "react";

import Cell from "./Cell";

import "./Board.css";

class Board extends Component {
  state = {
    hasWonGame: false,
    board: this.createBoard()
  };

  createBoard() {
    console.log("NUMROWS", this.props);
    let board = [];
    for (let y = 0; y < this.props.numRows; y++) {
      let row = [];
      for (let x = 0; x < this.props.numCols; x++) {
        row.push(Math.random() < this.props.chanceLightsOn);
      }

      board.push(row);
    }
    return board;
  }

  // flipSurroundingCells = coordinates => {
  //   let { ncols, nrows } = this.props;
  //   let board = this.state.board;
  //   let [y, x] = coord.split("-").map(Number);
  //   function flipCell(y, x) {
  //     // if this coord is actually on board, flip it
  //
  //     if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
  //       board[y][x] = !board[y][x];
  //     }
  //   }
  //
  //   this.setState({ board, hasWonGame });
  // };

  render() {
    let tableBoard = [];
    for (let y = 0; y < this.props.numRows; y++) {
      let row = [];
      for (let x = 0; x < this.props.numCols; x++) {
        let coord = `${y}-${x}`;
        row.push(<Cell key={coord} isLit={this.state.board[y][x]} />);
      }
      tableBoard.push(<tr key={y}>{row}</tr>);
    }
    console.log("state", this.state);

    return (
      <table className="Board">
        <tbody>{tableBoard}</tbody>
      </table>
    );
  }
}

Board.defaultProps = {
  numRows: 5,
  numCols: 5,
  chanceLightsOn: 0.25
};

export default Board;

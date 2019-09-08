import React, { Component } from "react";
import Cell from "../Cell/Cell";
import "./Board.css";

class Board extends Component {
  state = {
    hasWonGame: false,
    board: this.createBoard(),
    numMoves: 0
  };

  createBoard() {
    // console.log("NUMROWS", this.props);
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

  flipCellsAround(coord) {
    // console.log("FLIPPING", coord);
    let { numCols, numRows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    this.flipCell(board, y, x, numCols, numRows);
    this.flipCell(board, y, x - 1, numCols, numRows);
    this.flipCell(board, y, x + 1, numCols, numRows);
    this.flipCell(board, y - 1, x, numCols, numRows);
    this.flipCell(board, y + 1, x, numCols, numRows);
  }

  flipCell(board, y, x, numCols, numRows) {
    // console.log("BOARD?", y, x, board);

    if (x >= 0 && x < numCols && y >= 0 && y < numRows) {
      board[y][x] = !board[y][x];
    }
    let hasWonGame = board.every(row => row.every(cell => !cell));
    let numMoves = this.state.numMoves + 1;

    // console.log("BOARD NOW", board);

    this.setState({ board, hasWonGame, numMoves });
  }
  handleReset = () => {
    this.setState({ board: this.createBoard(), numMoves: 0 });
  };
  /** Render game board or winning message. */

  render() {
    console.log(this.state.numMoves);
    let tableBoard = [];
    for (let y = 0; y < this.props.numRows; y++) {
      let row = [];
      for (let x = 0; x < this.props.numCols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellsAround={() => this.flipCellsAround(coord)}
          />
        );
      }
      tableBoard.push(<tr key={y}>{row}</tr>);
    }
    // console.log("state", this.state);

    return (
      <React.Fragment>
        <h3>Number of Moves: {this.state.numMoves}</h3>
        <table className="Board">
          {this.state.hasWonGame ? (
            <h1>"You won!"</h1>
          ) : (
            <tbody>{tableBoard}</tbody>
          )}
        </table>
        {this.state.hasWonGame ? null : (
          <button onClick={this.handleReset}>Reset</button>
        )}
      </React.Fragment>
    );
  }
}
Board.defaultProps = {
  numRows: 5,
  numCols: 5,
  chanceLightsOn: 0.25
};

// allow user to chooese difficulty// size of board

export default Board;

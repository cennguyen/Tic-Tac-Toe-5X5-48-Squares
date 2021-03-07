import React from "react";
import "./App.css";

function App() {
  return <Game />;
}

export default App;

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
        </div>
        <div className="board-row">
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
        </div>
        <div className="board-row">
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
        </div>
        <div className="board-row">
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
        </div>
        <div className="board-row">
          {this.renderSquare(35)}
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}
        </div>
        <div className="board-row">
          {this.renderSquare(42)}
          {this.renderSquare(43)}
          {this.renderSquare(44)}
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
          {this.renderSquare(48)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(48).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const move = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner is: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{move}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11],
    [8, 9, 10, 11, 12],
    [9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18],
    [15, 16, 17, 18, 19],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [22, 23, 24, 25, 26],
    [23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32],
    [29, 30, 31, 32, 33],
    [30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39],
    [36, 37, 38, 39, 40],
    [37, 38, 39, 40, 41],
    [42, 43, 44, 45, 46],
    [43, 44, 45, 46, 47],
    [44, 45, 46, 47, 48],
    [0, 7, 14, 21, 28],
    [7, 14, 21, 28, 35],
    [14, 21, 28, 35, 42],
    [1, 8, 15, 22, 29],
    [8, 15, 22, 29, 36],
    [15, 22, 29, 36, 43],
    [2, 9, 16, 23, 30],
    [9, 16, 23, 31, 37],
    [16, 23, 31, 37, 44],
    [3, 10, 17, 24, 31],
    [10, 17, 24, 31, 38],
    [17, 24, 31, 38, 45],
    [4, 11, 18, 25, 32],
    [11, 18, 25, 32, 39],
    [18, 25, 32, 39, 46],
    [5, 12, 19, 26, 33],
    [12, 19, 26, 33, 40],
    [19, 26, 33, 40, 47],
    [6, 13, 20, 27, 34],
    [13, 20, 27, 34, 41],
    [20, 27, 34, 41, 48],

    [0, 8, 16, 24, 32],
    [8, 16, 24, 32, 40],
    [1, 9, 17, 25, 33],
    [9, 17, 25, 33, 41],
    [2, 10, 18, 26, 34],
    [4, 10, 16, 22, 28],
    [5, 11, 17, 23, 29],
    [11, 17, 23, 29, 35],
    [6, 12, 18, 24, 30],
    [12, 18, 24, 30, 36],
    [18, 24, 30, 36, 42],

    [7, 15, 23, 31, 39],
    [15, 23, 31, 39, 47],
    [8, 16, 24, 32, 40],
    [16, 24, 32, 40, 48],
    [9, 17, 25, 33, 41],
    [11, 17, 23, 29, 35],
    [12, 18, 24, 30, 36],
    [18, 24, 30, 36, 42],
    [13, 19, 25, 31, 37],
    [19, 25, 31, 37, 43],

    [14, 22, 30, 38, 46],
    [15, 23, 31, 39, 47],
    [16, 24, 32, 40, 48],
    [18, 24, 30, 36, 42],
    [19, 25, 31, 37, 43],
    [20, 26, 32, 38, 44],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d] &&
      squares[a] === squares[e]
    ) {
      return squares[a];
    }
  }
  return null;
}

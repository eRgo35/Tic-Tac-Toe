import React from 'react'
import Square from './square'
export default class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={
            squares:Array(9).fill(null),
            xIsNext:true,
            xStarted:true,
            gamesPlayed:0
        }
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({squares: squares,xIsNext: !this.state.xIsNext});
      }
    renderSquare(i){
        return(
            <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}/>
        )
    }
    resetBoard(){
        let gamesPlayed = this.state.gamesPlayed + 1;
        document.getElementById("game").innerHTML = "";
        this.setState({squares:Array(9).fill(null),xIsNext:!this.state.xStarted,xStarted: !this.state.xStarted, gamesPlayed: gamesPlayed})
    }
    render(){
        const winner = calculateWinner(this.state.squares);
        let status;
        let gameEnded = false;
        if (winner === "X" || winner === "O") {
            status = 'Winner: ' + winner;
            gameEnded = true;
        } else if(winner === "D") {
            status = "Draw";
            gameEnded = true;
        }
        else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
        <div>
            <div className="data">
                <div className="data-lr l">{status}</div>
                <button className={gameEnded ? "play-again" : "hidden"} onClick={()=>this.resetBoard()}>Play Again?</button>
                <div className="data-lr r">Games Played: {this.state.gamesPlayed}</div>
            </div>
            <div className="board-wrapper">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
          );
    }
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(squares[a], "wins the game!");
        document.getElementById("game").innerHTML = squares[a] + " wins the game!";
        return squares[a];
      }
    }
    if(!squares.includes(null)){
        console.log("Draw!");
        document.getElementById("game").innerHTML = "Draw!";
        return "D"
    }
    return null;
  }
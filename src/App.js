import React from 'react'
import Board from './components/board'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="toolbar">
          <span className="title">Tic Tac Toe</span>
        </div>
        <div className="main">
          <div className="end">
            <span className="game-over" id="game"></span>
          </div>
          <Board />
        </div>
        <div className="footer">
          <span>Michał Czyż & Dawid Głąb &copy;2021</span>
          <span></span>
        </div>
      </div>
    )
  }
}

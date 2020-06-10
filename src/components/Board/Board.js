import React,  { Component } from 'react'
import './Board.css';
import Tile from '../Tile/Tile.js'

class Board extends Component{

    constructor(props){
        super(props)
        this.winner = 'X is winner'
        this.state = this.initialState
    }

    get initialState() {
        return {
            player: 'X',
            tiles: [
                '','','',
                '','','',
                '','',''
            ],
            isFinishGame: false
        };
      }

    changePlayer = (tileIndex) => {
        let player = this.state.player == 'X' ? 'O' : 'X'
        let tiles = this.state.tiles
        tiles[tileIndex - 1] = player

        this.setState({
            player: player,
            tiles
        })

        this.checkWinner()
    }

    checkWinner = () => {
        let tiles = this.state.tiles

        let line = '';
        for (let a = 0; a < 8; a++) {
			switch (a) {
                case 0:
                    line = tiles[0] + tiles[1] + tiles[2]
                    break;
                case 1:
                    line = tiles[3] + tiles[4] + tiles[5]
                    break;
                case 2:
                    line = tiles[6] + tiles[7] + tiles[8]
                    break;
                case 3:
                    line = tiles[0] + tiles[3] + tiles[6]
                    break;
                case 4:
                    line = tiles[1] + tiles[4] + tiles[7]
                    break;
                case 5:
                    line = tiles[2] + tiles[5] + tiles[8]
                    break;
                case 6:
                    line = tiles[0] + tiles[4] + tiles[8]
                    break;
                case 7:
                    line = tiles[2] + tiles[4] + tiles[6]
                    break;
            }

			if (line == 'XXX') {
                this.finishGame('O is winner')
                break
            } else if (line == 'OOO') {
                this.finishGame('X is winner')
                break
            }
        }

        for (let a = 0; a < 9; a++) {
            if(tiles[a] == ''){
                break
            } else if(a == 8){
                this.finishGame('Game is draw, no winner')
            }
        }
    }

    finishGame = (winner) => {
        this.winner = winner
        this.setState({
          isFinishGame: true
        })
    }

    resetBoard = () => {
        this.setState(this.initialState)
    }

    render(){
        return (
            <div className="Board">
                {
                    !this.state.isFinishGame ? 
                        <div className="Tiles">
                            <Tile tile="1" changePlayer={this.changePlayer} player={this.state.player} /> 
                            <Tile tile="2" changePlayer={this.changePlayer} player={this.state.player} /> 
                            <Tile tile="3" changePlayer={this.changePlayer} player={this.state.player} />
                
                            <Tile tile="4" changePlayer={this.changePlayer} player={this.state.player} /> 
                            <Tile tile="5" changePlayer={this.changePlayer} player={this.state.player} /> 
                            <Tile tile="6" changePlayer={this.changePlayer} player={this.state.player} />
                
                            <Tile tile="7" changePlayer={this.changePlayer} player={this.state.player} /> 
                            <Tile tile="8" changePlayer={this.changePlayer} player={this.state.player} /> 
                            <Tile tile="9" changePlayer={this.changePlayer} player={this.state.player} />
                        </div> :
                        <div className="FinishGame">
                            {this.winner}
                            <button className="NewGameButton" onClick={this.resetBoard}>New game</button>
                      </div>
                }
            </div>
        )
    }
}

export default Board

import React,  { Component } from 'react'
import './Tile.css';

class Tile extends Component{

    constructor(props){
        super(props)
        this.state = {
            type: ''
        }
    }

    tileClick = () => {
        if(this.state.type == ''){
            this.props.changePlayer(this.props.tile)
            
            let player = this.props.player
            this.setState({
                type: player
            })
        }
    }

    render(){
        return (
              <div onClick={this.tileClick} className="Tile">
                  <span className="TileContent">{this.state.type}</span>
              </div>
        )
    }
}

export default Tile

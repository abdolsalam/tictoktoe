import React, {Component} from 'react'
import './App.css'
import Board from '../Board/Board.js'

class App extends Component{

  constructor(props){
    super(props)
  }

  render(){
      return (
          <div className="App">
            <div className="Header">XO Game, enjoy it.</div>
            <Board  />    
            <div className="Footer">Developed by Abdolsalam Dehvari</div>
          </div>
    );
  }
}

export default App

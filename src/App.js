import './App.css';

import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       item:[],
       currentItem:{
        text:'',
        key:''
       }
    }
  }
  render() {
    return (
      //<h2>Anshika Gupta</h2>
      <div className='App'>
      <header>
        <form id="to-do-list">
          <input type="text" placeholder="Enter text"></input>
          <button type="submit">Add</button>
        </form>
      </header>
      </div>
    )
  }
}

export default App;

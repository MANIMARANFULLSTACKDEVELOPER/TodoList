import './App.css';
import React from 'react'
import Listitems from './Listitems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

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
    this.handInput = this.handInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    //console.log(newItem);
    if(newItem.text !== ""){
      const newItems = [...this.state.item, newItem];
      this.setState({
        item:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem(key){
    const filterItems = this.state.item.filter(item => item.key === key);
    this.setState({
      item:filterItems,
    })
  }

  render() {
    return (
      //<h2>Anshika Gupta</h2>
      <div className='App'>
      <header>
        <form id="to-do-list" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter text"
          value={this.state.currentItem.text}
          onChange={this.handInput}
          />
          <button type="submit">Add</button>
        </form>
      </header>
      <Listitems items = {this.state.item}
      deleteItem = {this.deleteItem}
      >
       </Listitems> 
      </div>
    )
  }
}

export default App;

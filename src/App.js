import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.todoItems  = ['Đi ỉa', 'Đi ăn', 'Đi ngủ'];
  }
  render(){
    return (
      <div className="App">
        <div className="App-header">
          {
            this.todoItems.map((item) => <TodoItem title={item}></TodoItem>)
          }
        </div>
      </div>
    );
  }
}

export default App;

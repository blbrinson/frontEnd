import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos")
    let todos = await response.json()
    this.setState({todoList: todos})
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
      <TodoList todoList={this.state.todoList} />
      <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
      >
          Learn React
        </a>
      </header>
    </div>
    );
  };
}

export default App;

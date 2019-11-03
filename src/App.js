import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from "./NavBar"

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
      <div>
        <div>
          <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              <NavBar />
           </TypoGraphy>
          </Toolbar>
          </AppBar>
        </div>
        <div>
         <Container>
         <TodoList todoList={this.state.todoList} />
      </Container>
    </div>
    </div>
    );
  };
}

export default App;

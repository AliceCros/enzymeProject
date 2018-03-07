import React from 'react';
import { Component } from 'react';
import uuid from 'uuid/v4'

import logo from './logo.svg';

import Todos from './Todos';
import TodoForm from './TodoForm'
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({
      todos: [
        {
          id: uuid(), 
          text: 'Manger'
        },
        {
          id: uuid(), 
          text: 'Boire'
        },
        {
          id: uuid(), 
          text: 'Dormir'
        },
      ]
    })
  }

  deleteItem(id){
    let newTodos = [];

    this.state.todos.map( (todo) => {
      if( todo.id !== id){
        newTodos.push(todo)
      }
    })

    this.setState({
      todos: newTodos
    })
  }

  submitTodo(text){
    let newTodos = this.state.todos.slice(); // Slice permet de ne pas muter le state (même si on n'utilise pas Redux ici)

    newTodos.push({
      text, 
      id: uuid()
    })

    this.setState({
      todos : newTodos
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <TodoForm onSubmitForm={(text) => this.submitTodo(text) } />

        <Todos todos={this.state.todos} onDeleteItem={ (id) => this.deleteItem(id) } />
      </div>
    );
  }
}

export default App;

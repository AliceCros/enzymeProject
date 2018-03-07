import React from 'react'
import Todo from './Todo'

function Todos(props){

    let todos = props.todos.map( (todo) => ( <Todo key={todo.id} text={todo.text} onDeleteItem={ () => props.onDeleteItem(todo.id) } /> ))
    
    return (
      <div>
        <h2>Mes todos</h2>
        <ul>
          {todos}
        </ul>
      </div>
    )
}

export default Todos

import React from 'react'

function Todo(props) {
  return (
    <li key={props.id} >
      {props.text} 
    
      {' '}
      -
      {' '}
      
      <button onClick={ () => props.onDeleteItem(props.id) }>supprimer</button>
    </li>
  )
}

export default Todo;
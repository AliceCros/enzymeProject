import React, {Component} from 'react'

class TodoForm extends Component{

  constructor(props) {
    super(props);
  }

  submitForm(e){
    e.preventDefault()

    let todo = this.refs.todoText.value
    this.refs.todoText.value = '';
    this.props.onSubmitForm(todo)
  }

  render(){
    return (
      <form onSubmit={(e) => this.submitForm(e) } type="submit">

        <h2>Ajouter une todo</h2>
        <input type="text" placeholder="A faire" ref="todoText" required />

        <button>Créer</button>
      
      </form>
    )
  }
}

export default TodoForm;
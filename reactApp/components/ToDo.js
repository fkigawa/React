import React from 'react'
import ReactDOM from 'react-dom';


class ToDo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <li>
        {this.props.todos.completed ?
        <strike>
          {this.props.todos.taskText}
        </strike>
          : this.props.todos.taskText}
        <button>X</button>
      </li>
    )
  }
}


export default ToDo

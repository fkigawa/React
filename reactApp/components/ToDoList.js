import React from 'react'
import ReactDOM from 'react-dom';
import ToDo from './ToDo';


class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
    <ul>
      {this.props.berry.map((taskObj) => <ToDo todos = {taskObj}/>)}
    </ul>
    )
  }
}



export default ToDoList

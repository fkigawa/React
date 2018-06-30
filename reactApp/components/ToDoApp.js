import React from 'react'
import ReactDOM from 'react-dom';
import ToDoList from './TodoList';
import InputLine from './InputLine';

var dummyData = [
  { taskText: "task1", completed: false },
  { taskText: "task2", completed: true },
  { taskText: "task3", completed: false }]

class ToDoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tahoes: []
    }
  }

  componentDidMount(){
    this.setState = ({
      tahoes: dummyData
    })
  }

  render() {
    return(
      <div>
        <ToDoList berry = {this.state.tahoes} listing = {dummyData}/>
        <InputLine/>
      </div>
    )
  }

}

export default ToDoApp

import React from 'react'
import ReactDOM from 'react-dom';
import ToDoApp from './ToDoApp';


class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}


export default InputLine

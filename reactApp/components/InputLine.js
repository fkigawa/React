import React from 'react'
import ReactDOM from 'react-dom';


class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typedText: ''
    }
  }

  handleTyping(event){
    this.setState({
      typedText: event.target.value
    })
  }

  handleSubmit() {
    this.props.submit(this.state.typedText)
    this.setState({
      typedText: ''
    })
  }

  render(){
    return(
      <div>
          <label>
            Name:
            <input onChange={(event) => this.handleTyping(event)} type="text" value={this.state.typedText} />
          </label>
          <input onClick={() => this.handleSubmit()} type="submit" value="Submit" />
      </div>
    )
  }

}


export default InputLine

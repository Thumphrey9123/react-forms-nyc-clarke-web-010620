import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleNameChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

// changing things
  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={event => this.handleNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;
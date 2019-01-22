import React from 'react';
import $ from 'jquery';
import sendMessage from '../sendMessage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: '',
      response: 'Response goes here!'
    };

    this.updateName = this.updateName.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateResponse = this.updateResponse.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updateMessage(e) {
    this.setState({
      message: e.target.value
    })
  }

  clearFields() {
    $('#username').val('');
    $('#message').val('');
    this.setState({
      name: '',
      message: ''
    });
  }

  handleSubmit(e) {
    // On submit, prevent default
    e.preventDefault();

    console.log('submitted!');

    // Send message
    var message = {
      name: this.state.name,
      message: this.state.message
    };

    sendMessage(message, this.updateResponse);

    // Clear fields/state
    this.clearFields();
  }

  updateResponse(data) {
    this.setState({
      response: data
    });
  }

  render() {
    return (
      <div>
        Server Response:
        <p id="response">
          {this.state.response}
        </p>
        <div>
          <form action="#" id="form" method="post" onSubmit={this.handleSubmit}>
            Name: <input type="text" name="username" id="username" onChange={this.updateName}/>
            Message: <input type="text" name="message" id="message" onChange={this.updateMessage}/>
            <input type="submit" name="submit" value="Send Message" />
          </form>
        </div>
      </div>
    );
  }

}

export default App;
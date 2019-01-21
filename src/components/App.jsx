import React from 'react';
import Form from './Form.jsx';

var App = () => (
  <div>
    Server Response:
    <p id="response">
      Response goes here!
    </p>
    <div>
      <Form />
    </div>
  </div>
);

export default App;
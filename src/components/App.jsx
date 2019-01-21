import React from 'react';

var App = () => (
  <div>
    Server Response:
    <p id="response">
      Response goes here!
    </p>
    <div>
      <form action="#" id="form" method="post">
        Name: <input type="text" name="username" id="username" />
        Message: <input type="text" name="message" id="message" />
        <input type="submit" name="submit" value="Send Message" />
      </form>
    </div>
  </div>
);

export default App;
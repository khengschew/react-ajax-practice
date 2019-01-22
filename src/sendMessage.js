import $ from 'jquery';

var sendMessage = (message, callback) => {
  // Ajax method
  // $.ajax({
  //   url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf111/greeting',
  //   type: 'POST',
  //   data: JSON.stringify(message),
  //   contentType: 'application/json',
  //   success: (data) => (callback(data)),
  //   error: function(error) {
  //     console.error('Failed to send message', error);
  //   }
  // });

  // Fetch method
  fetch('http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf111/greeting', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.text())
  // .then(res => console.log(res))
  .then(data => callback(data))
  .catch(error => console.error('Failed to send message', error));
}

export default sendMessage;
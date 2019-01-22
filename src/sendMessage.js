import $ from 'jquery';
import axios from 'axios';

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
  // Note: since our response returns text, we cast to text using .text()
  // For more data types to convert to, reference MDN: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // fetch('http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf111/greeting', {
  //   method: 'POST',
  //   body: JSON.stringify(message),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then(res => res.text())
  //   // .then(res => console.log(res))
  //   .then(data => callback(data))
  //   .catch(error => console.error('Failed to send message', error));

  // Axios method
  axios.post('http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf111/greeting', message)
    // .then((response) => (console.log(response.data)))
    .then((response) => callback(response.data))
    .catch((error) => (console.error('Failed to send message', error)));
}

export default sendMessage;
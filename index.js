var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('AC651a0052bef02d3158bbbd90c3164cf5', '4c44d745be94abff71b24b7a2f0550e3');

// Send the text message.
client.messages.create({
  to: '+16124384250',
  from: '+12082699421',
  body: 'Hi Kyle. This is God speaking. You were wrong about me. Thoughts on the name BookSmart for our app?',
});

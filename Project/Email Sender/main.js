//   challenge 
//   i am using gmail so we we need to turn on google two set verification 
var nodemailer = require('nodemailer');
require('dotenv').config()

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user_name,
    pass: process.env.pass
  }
});

var mailOptions = {
  from:  process.env.user_name,
  to:  process.env.to,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
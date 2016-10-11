require('react');

var component = require('./component');
var form = require('./form');
var login = require('./input_email');
var password = require('./input_password');
var button = require('./button');
var newline = require('./newline');

require('./main.css');

document.body.appendChild(component());
document.body.appendChild(form());
document.getElementById('login-form').appendChild(login());
document.getElementById('login-form').appendChild(newline());
document.getElementById('login-form').appendChild(password());
document.getElementById('login-form').appendChild(newline());
document.getElementById('login-form').appendChild(button());
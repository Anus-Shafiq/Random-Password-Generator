var password =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+<>~?/";

var passLenght = 15;
var generatePass = "";

for (var i = 0; i < passLenght; i++) {
  var passRandomIndex = Math.floor(Math.random() * password.length);
  generatePass += password[passRandomIndex];
}

// document.write(`Random Password is: ${generatePass}`);

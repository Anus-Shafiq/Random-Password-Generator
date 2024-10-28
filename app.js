var password =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+<>~?/";

var passLenght = 15;

function generator() {
  var generatePass = "";
  for (var i = 0; i < passLenght; i++) {
    var passRandomIndex = Math.floor(Math.random() * password.length);
    generatePass += password[passRandomIndex];
  }
  document.getElementById("input").innerHTML = `<span>${generatePass}</span>`;
}

// document.write(`Random Password is: ${generatePass}`);

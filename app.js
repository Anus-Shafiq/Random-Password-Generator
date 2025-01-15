let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let number = document.getElementById("num");
let symbol = document.getElementById("symbol");

let range = document.getElementById("range");
let rangeNum = document.getElementById("rangeNum");
var passLenght = "";
var uppercaseEng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseEng = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%^&*()_+<>~?/";

function num() {
  rangeNum.innerText = range.value;
  passLenght = range.value;

  generator();
}

window.onload = num;
function generator() {
  let char = "";
  if (uppercase.checked) {
    char += uppercaseEng;
  }
  if (lowercase.checked) {
    char += lowercaseEng;
  }
  if (number.checked) {
    char += numbers;
  }
  if (symbol.checked) {
    char += symbols;
  }
  if (char === "") {
    alert("Please select at least any one character");
    return;
  }

  var generatePass = "";
  for (var i = 0; i < passLenght; i++) {
    var passRandomIndex = Math.floor(Math.random() * char.length);
    generatePass += char[passRandomIndex];

    document.getElementById("input").innerHTML = `<span>${generatePass}</span>`;
  }
}

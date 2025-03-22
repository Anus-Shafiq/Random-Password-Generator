let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let number = document.getElementById("num");
let symbol = document.getElementById("symbol");
let label = document.getElementById("label");
let range = document.getElementById("range");
let rangeNum = document.getElementById("rangeNum");
var passLenght = "";
var uppercaseEng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseEng = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%^&*()_+<>~?/";
let pass = document.getElementById("input");
let copyBtn = document.getElementById("copyBtn");

function num() {
  rangeNum.innerText = range.value;
  passLenght = range.value;
  copyBtn.innerText = "Copy";

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

    pass.value = generatePass;
  }

  if (pass.value.length < 6) {
    label.classList.remove(
      "bg-success-subtle",
      "bg-danger-subtle",
      "bg-warning",
      "bg-success"
    );

    label.classList.add("bg-danger");
    label.innerText = "Very weak";
  } else if (pass.value.length < 8) {
    label.classList.remove(
      "bg-danger",
      "bg-success-subtle",
      "bg-warning",
      "bg-success"
    );
    label.classList.add("bg-danger-subtle");
    label.innerText = "Weak";
  } else if (pass.value.length < 10) {
    label.classList.remove(
      "bg-danger",
      "bg-danger-subtle",
      "bg-success-subtle",
      "bg-success"
    );
    label.classList.add("bg-warning");
    label.innerText = "Good";
  } else if (pass.value.length < 12) {
    label.classList.remove(
      "bg-danger",
      "bg-danger-subtle",
      "bg-success",
      "bg-warning"
    );
    label.classList.add("bg-success-subtle");
    label.innerText = "Strong";
  } else if (pass.value.length >= 12) {
    label.classList.remove(
      "bg-danger",
      "bg-danger-subtle",
      "bg-warning",
      "bg-success-subtle"
    );
    label.classList.add("bg-success");
    label.innerText = "Very Strong";
  }
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(pass.value);
  copyBtn.innerText = "Copied!";
});

//define variables
var length = Number(prompt("How many characters would you like your password to be?"));
console.log(length);
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var upper = confirm("Would you like to use uppercase letters?");
console.log(upper);
var lower = confirm("Would you like to use lowercase letters?");
console.log(lower);
var number = confirm("Would you like to use numbers?");
console.log(number);
var symbol = confirm("Would you like to use special characters?");
console.log(symbol);

while (!upper && !lower && !number && !symbol) {
  alert("You must select at least one character type!");
  upper = confirm("Would you like to use uppercase letters?");
  lower = confirm("Would you like to use lowercase letters?");
  number = confirm("Would you like to use numbers?");
  symbol = confirm("Would you like to use special characters?");
}

window.addEventListener('load', function() {
  generateNewPassword();
});
//set function
function generateNewPassword() {
  var password = "";

  var allowed = {};
  if (upper) password += rando(allowed.upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (lower) password += rando(allowed.lower = "abcdefghijklmnopqrstuvwxyz");
  if (number) password += rando(allowed.number = "1234567890");
  if (symbol) password += rando(allowed.symbol = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");

  return "generated password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
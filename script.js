//define variables
var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var upper = confirm("Would you like to use uppercase letters?");
var lower = confirm("Would you like to use lowercase letters?");
var number = confirm("Would you like to use numbers?");
var symbol = confirm("Would you like to use special characters?");

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
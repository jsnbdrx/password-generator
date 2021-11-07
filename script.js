// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 

  
//1.prompt user for password criteria
//  a. length 8-128
//  b. upper case
//  c. lower case
//  d. number
//  e. special character
//2. validate input
//3. generate password based on criteria
//4. display password to page

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
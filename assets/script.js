// Assignment code here
// variables for user's input
var passLength = Number(prompt("Enter a password length between 8 and 128."));
var confUpperCase = confirm("Include Uppercase?");
var confLowerCase = confirm("Include Lowercase?");
var confNumbers = confirm("Include Numbers?");
var confSymbols = confirm("Include Symbols?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

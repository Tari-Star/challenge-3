// Assignment code here
// variables for user's input
var passLength = Number(prompt("Enter a password length between 8 and 128."));
var confUpperCase = confirm("Include Uppercase?");
var confLowerCase = confirm("Include Lowercase?");
var confNumbers = confirm("Include Numbers?");
var confSymbols = confirm("Include Symbols?");

// Arreys for lower case,numbers, symbols
lowerCaseChars = ["a", "b", "c", "d", 'e', "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
symbolChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// for uppercase conversion
space = [];
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

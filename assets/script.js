// Assignment code here
// variables for user's input
var passLength = Number(prompt("Enter a password length between 8 and 128."));
// for wrong or empty input
if(!passLength || passLength < 8 || passLength > 128){
  passLength = Number(prompt("You must choose password length between 8 and 128!"));
 };
var confUpperCase = confirm("Include Uppercase?");
var confLowerCase = confirm("Include Lowercase?");
var confNumbers = confirm("Include Numbers?");
var confSymbols = confirm("Include Symbols?");
if (!confLowerCase && !confNumbers && !confSymbols && !confUpperCase) {
   alert("Choose options!");
  confUpperCase = confirm("Include Uppercase?");
  confLowerCase = confirm("Include Lowercase?");
  confNumbers = confirm("Include Numbers?");
  confSymbols = confirm("Include Symbols?");
};

//arrey for user's input: length and characters
var charSet = [];
// Arreys for lower case,numbers, symbols
symbolChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
lowerCaseChars = ["a", "b", "c", "d", 'e', "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for uppercase conversion
space = [];

var converse = function(x) {
  return x.toUpperCase();
};
upperCaseChars = lowerCaseChars.map(converse);

//generate password function
function generatePassword() {
 
  if(confUpperCase && confLowerCase && confNumbers && confSymbols){
    charSet = symbolChars.concat(numberChars,lowerCaseChars,upperCaseChars);
  } else if(confUpperCase && confLowerCase && confNumbers){
    charSet = lowerCaseChars.concat(numberChars,upperCaseChars);
  } else if(confUpperCase && confLowerCase && confSymbols){
    charSet = lowerCaseChars.concat(symbolChars,upperCaseChars);
  } else if(confLowerCase && confNumbers && confSymbols){
    charSet = lowerCaseChars.concat(numberChars,symbolChars);
  } else if(confUpperCase && confNumbers && confSymbols){
    charSet = numberChars.concat(symbolChars,upperCaseChars);
  } else if(confUpperCase && confLowerCase){
    charSet = lowerCaseChars.concat(upperCaseChars);
  } else if(confUpperCase && confNumbers){
    charSet = numberChars.concat(upperCaseChars);
  } else if(confUpperCase && confSymbols){
    charSet = symbolChars.concat(upperCaseChars);
  } else if(confLowerCase && confNumbers){
    charSet = lowerCaseChars.concat(numberChars);
  } else if(confLowerCase && confSymbols){
    charSet = lowerCaseChars.concat(symbolChars);
  } else if(confNumbers && confSymbols){
    charSet = numberChars.concat(symbolChars);
  } else if(confSymbols){
    charSet = symbolChars;
  } else if(confLowerCase){
    charSet = lowerCaseChars;
  } else if(confNumbers){
    charSet = numberChars;
  } else if(confUpperCase){
    charSet = space.concat(upperCaseChars);
  };
  //for loop to get random password basedon user's input
  var getVal = "";
  for(var i = 0; i < passLength; i++){
    getVal = charSet[Math.floor(Math.random() * charSet.length)] + getVal;
    console.log(getVal);
  }
  return getVal;
};
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

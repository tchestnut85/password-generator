// generate random letters, numbers and characters

// make prompts when clicking the GENERATE button
  // prompt asking for length of password
  // prompt for character types to include in password choosing from lowercase, uppercase, numeric and/or special chars
  // validate user input and at least one character type should be seclected

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lettersLow = "abcdefghijklmnopqrstuvwxyz";
var lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[]/^_`{}~";


// Write password to the #password input

function writePassword() {
  var possibleChar = "";
  var finalPassword = "";

  var passwordLength = window.prompt("How many characters (at least 8) would you like to include in your password?");
  if (passwordLength <= 7 || passwordLength >= 129) {
    window.alert('The password must be at least 8 and no more than 128 characters. Please click the "Generate Password" button again.');
    return;
  }
  var textLowConfirm = window.confirm("Would you like to include lowercase letters?");
  var textUpConfirm = window.confirm("Would you like to include uppercase letters?");
  var textNumConfirm = window.confirm("Would you like to include numbers?");
  var textSpecialConfirm = window.confirm("Would you like to include special characters?");


  // make if statements based on user input from confirms, and at least 1 confirm must be true
  if (textLowConfirm == false && textUpConfirm == false && textNumConfirm == false && textSpecialConfirm == false) {
    window.alert('You need to have at least one type of character in your password! Please click the "Generate Password" button again.'); 
    return; }
  
  if (textLowConfirm ==true) {
    possibleChar += lettersLow
  }
  if (textUpConfirm ==true) {
    possibleChar += lettersUp
  }
  if (textNumConfirm ==true) {
    possibleChar += numbers
  }
  if (textSpecialConfirm ==true) {
    possibleChar += special
  }

  for (var i = 0; i < passwordLength; i++) {
    finalPassword += possibleChar.charAt (Math.floor(Math.random() * possibleChar.length));
  }
  console.log(possibleChar);
  console.log(finalPassword);

var passwordText = document.querySelector("#password");
passwordText.value = finalPassword;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

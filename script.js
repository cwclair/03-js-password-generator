// Assignment Code

var generateBtn = document.querySelector("#generate");

//These prompts ask for password length and the inclusion of character types (lowercase, uppercase, number, special)


var passLength = Number(window.prompt("Enter the length of your password (at least 8 characters, no more than 128 characters).", 8));


function passLengthCheck() {
  if (passLength < 8) {
  window.alert("That's not long enough! Let's go with the minimum of 8 characters.");
  passLength = 8;
  console.log(passLength);
  } else if (passLength > 128) {
  window.alert("That's not long enough! Let's go with the maximum of 128 characters.");
  passLength = 128;
  console.log(passLength);
} else {
console.log(passLength);
}
}
passLengthCheck()

var passRequireLower = window.prompt("Do you want your password to include at least one capital letter? (Y/N)", "Y");
console.log(passRequireLower);

var passRequireCap = window.prompt("Do you want your password to include at least one capital letter? (Y/N)", "Y");
console.log(passRequireCap);

var passRequireNum = window.prompt("Do you want your password to include at least one number? (Y/N)", "Y");
console.log(passRequireNum);

var passRequireSpec = window.prompt("Do you want your password to include at least one special character, such as a question mark, exclamation point, etc.? (Y/N)", "Y");
console.log(passRequireSpec);




//Define the function generatePassword?
function generatePassword () {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

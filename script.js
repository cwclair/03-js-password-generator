// Assignment Code
const alphaLowerOnly = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(alphaLowerOnly);

const alphaUpperOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(alphaUpperOnly);

const numOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(numOptions);

const specialCharsList = ["!", "@", "$", "#", "%", "&", "*", "(", ")", "/"];
console.log(specialCharsList);

const alphaMixedCase = alphaLowerOnly.concat(alphaUpperOnly);
console.log(alphaMixedCase);

const alphaLowerNum = alphaLowerOnly.concat(numOptions);
console.log(alphaLowerNum);

const alphaUpperNum = alphaUpperOnly.concat(numOptions);
console.log(alphaUpperNum);

const alphaAllAndNums = alphaLowerOnly.concat(alphaUpperOnly, numOptions);
console.log(alphaAllAndNums);

const alphaLowerSpecial = alphaLowerOnly.concat(specialCharsList);
console.log(alphaLowerSpecial);

const alphaUpperSpecial = alphaUpperOnly.concat(specialCharsList);
console.log(alphaUpperSpecial);

const numSpecial = numOptions.concat(specialCharsList);
console.log(numSpecial);

const alphaAllAndSpecial = alphaLowerOnly.concat(alphaUpperOnly, specialCharsList);
console.log(alphaAllAndSpecial);

const alphaLowerNumSpec = alphaLowerOnly.concat(numOptions, specialCharsList);
console.log(alphaLowerNumSpec);

const alphaUpperNumSpec = alphaUpperOnly.concat(numOptions, specialCharsList);
console.log(alphaUpperNumSpec);

const allChars = alphaUpperOnly.concat(alphaLowerOnly, numOptions, specialCharsList);
console.log(allChars);


var generateBtn = document.querySelector("#generate");

//These prompts ask for password length and the inclusion of character types (lowercase, uppercase, number, special)


var passLength = Number(window.prompt("Enter the length of your password (at least 8 characters, no more than 128 characters).", 8));

// This will ensure the password is within the stated constraints of 8 and 128. 
function passLengthCheck() {
  if (passLength < 8) {
  window.alert("That's not long enough! Let's go with the minimum of 8 characters.");
  passLength = 8;
  console.log(passLength);
  } else if (passLength > 128) {
  window.alert("Whoa! Too many characters, my friend. The National Institute of Standards and Technology recommends 14-16 characters; let's meet in the middle at 15.");
  passLength = 15;
  console.log(passLength);
} else {
console.log(passLength);
}
}
passLengthCheck()

var passRequireLower = window.prompt("Do you want your password to include at least one lowercase letter? (Y/N)", "Y");
console.log(passRequireLower);

var passRequireCap = window.prompt("Do you want your password to include at least one capital letter? (Y/N)", "Y");
console.log(passRequireCap);

var passRequireNum = window.prompt("Do you want your password to include at least one number? (Y/N)", "Y");
console.log(passRequireNum);

var passRequireSpec = window.prompt("Do you want your password to include at least one special character, such as a question mark, exclamation point, etc.? (Y/N)", "Y");
console.log(passRequireSpec);




//Define the function generatePassword?
// function generatePassword () {
//   var theString = "";
//   var count = 0;
//   while (count < passLength) {
//     theString += alphaLowerOnly[Math.floor(Math.random() * alphaLowerOnly.length)];
//     count ++;
//   }
//   return theString;
// }
// console.log(generatePassword());


//Define the function generatePassword?
function generatePassword () {
  var theString = "";
  var count = 0;
  if (passRequireLower === "Y" && passRequireCap === "N" && passRequireNum === "N" && passRequireSpec == "N") {
  while (count < passLength) {
    theString += alphaLowerOnly[Math.floor(Math.random() * alphaLowerOnly.length)];
    count ++;
  }
} else if (passRequireLower === "Y" && passRequireCap === "Y" && passRequireNum === "N" && passRequireSpec == "N") {
  while (count < passLength) {
    theString += alphaMixedCase[Math.floor(Math.random() * alphaMixedCase.length)];
    count ++;
  }
} else if (passRequireLower === "Y" && passRequireCap === "N" && passRequireNum === "Y" && passRequireSpec == "N") {
  while (count < passLength) {
    theString += alphaLowerNum[Math.floor(Math.random() * alphaLowerNum.length)];
    count ++;
  }
} else if (passRequireLower === "Y" && passRequireCap === "N" && passRequireNum === "N" && passRequireSpec == "Y") {
  while (count < passLength) {
    theString += alphaLowerSpecial[Math.floor(Math.random() * alphaLowerSpecial.length)];
    count ++;
  }
} else if (passRequireLower === "Y" && passRequireCap === "Y" && passRequireNum === "Y" && passRequireSpec == "N") {
  while (count < passLength) {
    theString += alphaAllAndNums[Math.floor(Math.random() * alphaAllAndNums.length)];
    count ++;
  }
} else if (passRequireLower === "Y" && passRequireCap === "Y" && passRequireNum === "N" && passRequireSpec == "Y") {
  while (count < passLength) {
    theString += alphaAllAndSpecial[Math.floor(Math.random() * alphaAllAndSpecial.length)];
    count ++;
  }
} else if (passRequireLower === "Y" && passRequireCap === "N" && passRequireNum === "Y" && passRequireSpec == "Y") {
  while (count < passLength) {
    theString += alphaLowerNumSpec[Math.floor(Math.random() * alphaLowerNumSpec.length)];
    count ++;
  }
} else if (passRequireLower === "Y" && passRequireCap === "Y" && passRequireNum === "Y" && passRequireSpec == "Y") {
  while (count < passLength) {
    theString += allChars[Math.floor(Math.random() * allChars.length)];
    count ++;
  }
}
return theString;
}
console.log(generatePassword());














// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Assignment Code

// Setting the arrays for my various character sets. I set four base sets (lowercase letters, uppercase letters, numbers 0-9, and a set of 10 special characters), and then concat those together to form larger arrays of specific character combinations.
const alphaLowerOnly = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const alphaUpperOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const numOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharsList = ["!", "@", "$", "#", "%", "&", "*", "(", ")", "/"];

const alphaMixedCase = alphaLowerOnly.concat(alphaUpperOnly);

const alphaLowerNum = alphaLowerOnly.concat(numOptions);

const alphaUpperNum = alphaUpperOnly.concat(numOptions);

const alphaAllAndNums = alphaLowerOnly.concat(alphaUpperOnly, numOptions);

const alphaLowerSpecial = alphaLowerOnly.concat(specialCharsList);

const alphaUpperSpecial = alphaUpperOnly.concat(specialCharsList);

const numSpecial = numOptions.concat(specialCharsList);

const alphaAllAndSpecial = alphaLowerOnly.concat(alphaUpperOnly, specialCharsList);

const alphaLowerNumSpec = alphaLowerOnly.concat(numOptions, specialCharsList);

const alphaUpperNumSpec = alphaUpperOnly.concat(numOptions, specialCharsList);

const allChars = alphaUpperOnly.concat(alphaLowerOnly, numOptions, specialCharsList);


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

// This is where the user is asked about what sorts of characters they want to use: lowercase letters, uppercase letters, numbers, and special characters.

var passRequireLower = window.confirm("Do you want your password to include at least one lowercase letter? (OK = Yes; Cancel = No)");
console.log(passRequireLower);

var passRequireCap = window.confirm("Do you want your password to include at least one capital letter? (OK = Yes; Cancel = No)");
console.log(passRequireCap);

var passRequireNum = window.confirm("Do you want your password to include at least one number? (OK = Yes; Cancel = No)");
console.log(passRequireNum);

var passRequireSpec = window.confirm("Do you want your password to include at least one special character, such as a question mark, exclamation point, etc.? (OK = Yes; Cancel = No)");
console.log(passRequireSpec);


// If the user answers false for all four categories, well, how can we generate a password? This function will force the user to use lowercase and uppercase letters.

function atLeastOne () {
if (passRequireLower !== true && passRequireCap !== true && passRequireNum !== true && passRequireSpec !== true) {
  window.alert("Come on, now! You have to choose ONE of the character types. We will choose from lowercase and uppercase letters.");
  passRequireLower = true;
  passRequireCap = true;
  console.log(passRequireLower);
}
else {
  console.log(passRequireLower)
}
}
atLeastOne();

//Define the function generatePassword
function generatePassword () {
  var theString = "";
  var count = 0;
  if (passRequireLower === true && passRequireCap === false && passRequireNum === false && passRequireSpec === false) {
  while (count < passLength) {
    theString += alphaLowerOnly[Math.floor(Math.random() * alphaLowerOnly.length)];
    count ++;
  }
} else if (passRequireLower === true && passRequireCap === true && passRequireNum === false && passRequireSpec === false) {
  while (count < passLength - 2) {
    theString += alphaMixedCase[Math.floor(Math.random() * alphaMixedCase.length)];
    count ++;
  }
  while (count == passLength - 2) {
    theString += alphaLowerOnly[Math.floor(Math.random() * alphaLowerOnly.length)];
    count ++;
  }
  while (count == passLength - 1) {
    theString += alphaUpperOnly[Math.floor(Math.random() * alphaUpperOnly.length)];
    count ++;
  }
} else if (passRequireLower === true && passRequireCap === false && passRequireNum === true && passRequireSpec === false) {
  while (count < passLength - 2) {
    theString += alphaLowerNum[Math.floor(Math.random() * alphaLowerNum.length)];
    count ++;
  }
  while (count == passLength - 2) {
    theString += alphaLowerOnly[Math.floor(Math.random() * alphaLowerOnly.length)];
    count ++;
  }
  while (count == passLength - 1) {
    theString += numOptions[Math.floor(Math.random() * numOptions.length)];
    count ++;
  }
} else if (passRequireLower === true && passRequireCap === false && passRequireNum === false && passRequireSpec === true) {
  while (count < passLength - 2) {
    theString += alphaLowerSpecial[Math.floor(Math.random() * alphaLowerSpecial.length)];
    count ++;
  }
  while (count == passLength - 2) {
    theString += alphaLowerOnly[Math.floor(Math.random() * alphaLowerOnly.length)];
    count ++;
  }
  while (count == passLength - 1) {
    theString += specialCharsList[Math.floor(Math.random() * specialCharsList.length)];
    count ++;
  }
} else if (passRequireLower === true && passRequireCap === true && passRequireNum === true && passRequireSpec === false) {
  while (count < passLength - 3) {
    theString += alphaAllAndNums[Math.floor(Math.random() * alphaAllAndNums.length)];
    count ++;
  }
  while (count == passLength - 3) {
    theString += alphaLowerOnly[Math.floor(Math.random() * alphaLowerOnly.length)];
    count ++;
  }
  while (count == passLength - 2) {
    theString += numOptions[Math.floor(Math.random() * numOptions.length)];
    count ++;
  }
  while (count == passLength - 1) {
    theString += alphaUpperOnly[Math.floor(Math.random() * alphaUpperOnly.length)];
    count ++;
  }
} else if (passRequireLower === true && passRequireCap === true && passRequireNum === false && passRequireSpec === true) {
  while (count < passLength - 3) {
    theString += alphaAllAndSpecial[Math.floor(Math.random() * alphaAllAndSpecial.length)];
    count ++;
  }
  while (count == passLength - 3) {
    theString += alphaLowerOnly[Math.floor(Math.random() * alphaLowerOnly.length)];
    count ++;
  }
  while (count == passLength - 2) {
    theString += specialCharsList[Math.floor(Math.random() * specialCharsList.length)];
    count ++;
  }
  while (count == passLength - 1) {
    theString += alphaUpperOnly[Math.floor(Math.random() * alphaUpperOnly.length)];
    count ++;
  }
} else if (passRequireLower === true && passRequireCap === false && passRequireNum === true && passRequireSpec === true) {
  while (count < passLength - 3) {
    theString += alphaLowerNumSpec[Math.floor(Math.random() * alphaLowerNumSpec.length)];
    count ++;
  }
  while (count == passLength - 3) {
    theString += alphaLowerOnly[Math.floor(Math.random() * alphaLowerOnly.length)];
    count ++;
  }
  while (count == passLength - 2) {
    theString += specialCharsList[Math.floor(Math.random() * specialCharsList.length)];
    count ++;
  }
  while (count == passLength - 1) {
    theString += numOptions[Math.floor(Math.random() * numOptions.length)];
    count ++;
  }
} else if (passRequireLower === false && passRequireCap === true && passRequireNum === true && passRequireSpec === true) {
  while (count < passLength - 3) {
    theString += alphaUpperNumSpec[Math.floor(Math.random() * alphaUpperNumSpec.length)];
    count ++;
  }
  while (count == passLength - 3) {
    theString += specialCharsList[Math.floor(Math.random() * specialCharsList.length)];
    count ++;
  }
  while (count == passLength - 2) {
    theString += numOptions[Math.floor(Math.random() * numOptions.length)];
    count ++;
  }
  while (count == passLength - 1) {
    theString += alphaUpperOnly[Math.floor(Math.random() * alphaUpperOnly.length)];
    count ++;
  }
} else if (passRequireLower === false && passRequireCap === false && passRequireNum === true && passRequireSpec === true) {
  while (count < passLength - 2) {
    theString += numSpecial[Math.floor(Math.random() * numSpecial.length)];
    count ++;
  }
  while (count == passLength - 2) {
    theString += specialCharsList[Math.floor(Math.random() * specialCharsList.length)];
    count ++;
  }
  while (count == passLength - 1) {
    theString += numOptions[Math.floor(Math.random() * numOptions.length)];
    count ++;
  }
} else if (passRequireLower === true && passRequireCap === true && passRequireNum === true && passRequireSpec === true) {
  while (count < passLength - 4) {
    theString += allChars[Math.floor(Math.random() * allChars.length)];
    count ++;
  }
  while (count == passLength - 4) {
    theString += alphaLowerOnly[Math.floor(Math.random() * alphaLowerOnly.length)];
    count ++;
  }
  while (count == passLength - 3) {
    theString += specialCharsList[Math.floor(Math.random() * specialCharsList.length)];
    count ++;
  }
  while (count == passLength - 2) {
    theString += numOptions[Math.floor(Math.random() * numOptions.length)];
    count ++;
  }
  while (count == passLength - 1) {
    theString += alphaUpperOnly[Math.floor(Math.random() * alphaUpperOnly.length)];
    count ++;
  }
} else {
  while (count < passLength) {
    theString += specialCharsList[Math.floor(Math.random() * specialCharsList.length)];
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




// window.alert("Would you like a different password? Click the Generate Password button to create a new password with the same criteria. If you want to change criteria, please reload the page.");


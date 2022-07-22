// GLOBAL VARIABLES
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "&^*()%$#@!";
var finalPassword = [];


var passChoices = '';
var generateBtn = document.querySelector("#generate");

// FUNCTIONS
function writePassword() {
  var password = generatePassword();

  // connects to the button on the HTML page
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var length = window.prompt("Choose a number between 8 and 128 characters for your password.");
    var wantLowercase = window.confirm("Do you want to include lowercase letters?");
    var wantUppercase = window.confirm("Do you want to include uppercase letters?");
    var wantNumbers = window.confirm("Do you want to include numbers?");
    var wantSpecialChar = window.confirm("Do you want to include special characters?")
    

    if (wantLowercase === true) {
      passChoices = passChoices.concat(alphabetLower);
    } if (wantUppercase === true) {
      passChoices = passChoices.concat(alphabetUpper);
    } if (wantNumbers === true) {
      passChoices = passChoices.concat(numbers);
    } if (wantSpecialChar === true) {
      passChoices = passChoices.concat(specialCharacters);
    }

    else if (passChoices === '') {
      window.alert("You must select at least one character type for your password. Please try again.");
    }

    // split string to prep for randomizer
    passChoices = passChoices.split('');

    for (i=0; i<length; i++) {
      var character = passChoices[Math.floor(Math.random() * passChoices.length)];
      finalPassword.push(character);
    }

    console.log(passChoices);

    console.log(finalPassword.join(''));

    var stringPass = finalPassword.join('')

    return stringPass

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// on button click, prompted to generate a password - window.prompt

// prompted with password criteria
  // prompted for the length of the password, 8 < password < 128

  // choose character types
    // uppercase, lowercase, numeric, and special characters

// create variable alphabet = "all of the letters here" - uppercase and lowercase

  // answer each prompt, input should be validated and at least one character type selected
    // warning alert if at least one character type is NOT selected

  // password generated that matches the criteria
    // can be displayed in an alert OR written to the page

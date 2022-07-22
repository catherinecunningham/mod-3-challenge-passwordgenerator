// GLOBAL VARIABLES
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "&^*()%$#@!+,-/:;<>{}[]_|~";
var finalPassword = [];
var passChoices = '';
var generateBtn = document.querySelector("#generate");

// FUNCTIONS
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // prompt and confirm password length
    var length = window.prompt("Choose a number between 8 and 128 characters for your password.");

    if (length >= 8 && length <= 128) {
      // establish character selections for password
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
      // if no character selections are made
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

      // ouput of password on screen
      return stringPass
    }

    else if (length < 8 || length > 128) {
      window.alert("You must select a password length between 8 and 128 characters. Please try again.")
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
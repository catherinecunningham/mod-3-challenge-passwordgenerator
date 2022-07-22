

//FUNCTIONS





//CALLED FUNCTIONS OR EVENT LISTENERS

// GLOBAL VARIABLES
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "&^*()%$#@!";
var finalPassword = [];


var passChoices = '';
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  // connects to the button on the HTML page
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var length = window.prompt("Choose a number between 8 and 128 characters for your password.");
    var wantLowercase = window.confirm("Do you want lower case letters?");
    var wantUppercase = window.confirm("Do you want upper case letters?");
    var wantNumbers = window.confirm("Do you want numbers?");
    

    if (wantLowercase === true) {
      passChoices = passChoices.concat(alphabetLower);
    } if (wantUppercase === true) {
      passChoices = passChoices.concat(alphabetUpper);
    } 
    // add in special characters
    if (wantNumbers === true) {
      passChoices = passChoices.concat(numbers);
    } 

    else if (passChoices === '') {
      window.alert("You must select at least one character type for your password. Please try again.")
    }

    // split string to prep for randomizer
    passChoices = passChoices.split('');

    for (i=0; i<length; i++) {
      var character = passChoices[Math.floor(Math.random() * passChoices.length)]
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

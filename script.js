//https://sebhastian.com/javascript-confirmation-yes-no/#:~:text=You%20can%20create%20a%20JavaScript,can%20specify%20as%20its%20argument.

//https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/#:~:text=awesome%22))%3B-,How%20to%20convert%20a%20string%20to%20a%20number%20in%20JavaScript,base%20in%20a%20numeral%20system.



// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max) {
    max = min
    min= 0
  }
  var rando = Math.random()
  return Math.floor(min *(1- rando) + rando * max)
} 

function randomize(list) {
  return list[randomInt(0, list.length)];
}

function generatePassword() {

//1.prompt user for password criteria
  var alert = confirm("You are about to generate a new password. Would you like to proceed?")

  console.log(alert)

//  a. password length between 8-128

  var lengthPrompt = window.prompt("Please select password length from 8-128 characters")
  console.log(lengthPrompt)

//2. validate input to ensure chara. length and 1 chara. type selceted
  var passwordLength = parseInt(lengthPrompt)

    if (isNaN(passwordLength)) {
      window.alert("This is not a number!")
      return 
    } else if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password must be between 8-128 characters")
    } 

//  b. upper/lower case and special chararcters

  var specialCharacters = confirm("Would you like to include special characters?")
  var specialList = ['~', '!', '@', '#', '$,', '%', '^', '&', '*', '(', ' )', '_',  '+']
  var numbersWanted = confirm("Would you like to include numbers characters?")
  var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var lowerCase = confirm("Would you like to include lowercase characters?")
  var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperCase = confirm("Would you like to include uppercase characters?")
  var upperLetters = [] 
  
  var optionSelections = []

  for (var i=0; i < lowerLetters.length; i++) {
    upperLetters[i] = lowerLetters[i].toUpperCase()
    }

  if (specialCharacters) {
    optionSelections.push(specialList)
  } 

  if (numbersWanted) {
    optionSelections.push(numberList)
  } 
  
  if (lowerCase) {
    optionSelections.push(lowerLetters)
  } 
 
  if (upperCase) {
    optionSelections.push(upperLetters)
  } 
 
  if (optionSelections.length === 0) {
    optionSelections.push(lowerLetters, numberList)
  }
//3. generate password

  var passwordGenerated = ''

  for (var i=0; i < passwordLength; i++) {
    var randomItem = randomize(optionSelections);
    var randomChar = randomize(randomItem);
    passwordGenerated += randomChar;
  }

//4. display generate password 
  return window.prompt("This is your new passowrd: " + passwordGenerated)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

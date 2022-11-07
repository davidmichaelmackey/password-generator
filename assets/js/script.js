// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  while (true) {

    var userInput = window.prompt("How long do you want your password to be?")

    if (userInput === null) {
      return
    }

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("That's not a number!")
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid password length. Length must be between 8 and 128 Characters.")
    } else {
      break
    }

  }

  var userNumbers = window.confirm("Would you like to include numbers in your password?")
  var userSpecialCharacters = window.confirm("Would you like to include special characters in your password?")
  var userLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = []

  var optionsGroup = []

  for (var i = 0; i < lowercase.length; i++) {
    uppercase[i] = lowercase[i].toUpperCase()
  }

  if (userNumbers === true) {
    optionsGroup.push(numbers)
  }

  if (userSpecialCharacters == true) {
    optionsGroup.push(specialCharacters)
  }

  if (userLowercase === true) {
    optionsGroup.push(lowercase)
  }

  if (userUppercase === true) {
    optionsGroup.push(uppercase)
  }

  if (optionsGroup.length === 0) {
    optionsGroup.push(lowercase)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsGroup)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) {
    return
  }

  if (password) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

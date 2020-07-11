// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  var passwordLength = prompt('Please select a number between 8-128 characters');
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Oh password length does not meet the requirement');
    return;
  }
  var lowercase = confirm('Do you want lower case in your password');
  var uppercase = confirm('Do you want upper case in your password');
  var numeric = confirm('Do you want numeric in your password');
  var specialChr = confirm('Do you want special characters in your password');
  // var specialCharacters = confirm('Do you want special characters in your password');
  if (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
    alert('Sorry, you got to select a character type');
    return;
  }
  let password = getCharacters(lowercase, uppercase, numeric, specialChr, passwordLength);
  return password;
}
function getCharacters(lowercase, uppercase, numeric, specialChr, passwordLength) {
  var special_Chr = '!#$%&*';
  var lower_alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var upper_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var nums = '0123456789';
  var possiblePwLower = ''
  var possiblePwUpper = ''
  var possiblePwNum = ''
  var possiblePwChr = ''

  if (lowercase === true) {
    possiblePwLower = lower_alphabet ;
  }
  if(uppercase === true){
    possiblePwUpper = upper_alphabet ;
  }
  if(numeric === true){
    possiblePwNum = nums ;
  }
  if(specialChr===true){
    possiblePwChr = special_Chr ;
  }
  console.log(possiblePwLower );
  console.log(possiblePwUpper );
  console.log(possiblePwNum );
  console.log(possiblePwChr );
 

  let password=createPassword(lowercase, uppercase, numeric, specialChr, possiblePwLower, possiblePwUpper, possiblePwNum, possiblePwChr, passwordLength)

return password;
}
 function createPassword(lowercase, uppercase, numeric, specialChr, possiblePwLower, possiblePwUpper, possiblePwNum, possiblePwChr, passwordLength) {
  var possiblePw = ''
  if (lowercase === true) {
    possiblePw += possiblePwLower[Math.floor(Math.random()*possiblePwLower.length)];
  }
  if(uppercase === true){
    possiblePw += possiblePwUpper[Math.floor(Math.random()*possiblePwUpper.length)];
  }
  if(numeric === true){
    possiblePw += possiblePwNum[Math.floor(Math.random()*possiblePwNum.length)];
  }
  if(specialChr===true){
    possiblePw += possiblePwChr[Math.floor(Math.random()*possiblePwChr.length)];
  }
  console.log(possiblePw);

  for (j=possiblePw.length; j < passwordLength; j++){
    var finalPw = possiblePwLower + possiblePwNum + possiblePwUpper + possiblePwChr
    possiblePw+= finalPw [Math.floor(Math.random()*finalPw.length)];
  }
  console.log(possiblePw);

  return possiblePw;
    }

  
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
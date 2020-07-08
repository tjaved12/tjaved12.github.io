
var max = prompt("How many characters you want in your password?");
var i = confirm("You want to have numerals in your password?");
var j = confirm("You want to have special CHR in your password?");
var k = confirm("You want to have lower case alphabets in your password?");
var l = confirm("You want to have uppercase alphabets in your password?");

var numeral = [0,1,2,3,4,5,6,7,8,9];
var special_Chr = '!#$%&*';
var lower_alphabet = 'abcdefghijklmnopqrstuvwxyz';
var upper_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var pass = "";
var characterPool = [];



if (i === true) {
 pass += numeral[Math.floor(Math.random()*numeral.length)];
 characterPool += numeral;
}
 else  {
  numeral = ('');
  }



//if (i==="yes"){
  //var numeral = numeral[Math.floor(Math.random()*numeral.length)];
  //characterPool.concat(numeral)
//}
 // else  {
 // numeral = ('');
 // }

if (j === true){
  pass += special_Chr[Math.floor(Math.random()*special_Chr.length)];
characterPool  += special_Chr;
}
else {
 special_Chr = ('');
}

if (k === true){
  pass += lower_alphabet[Math.floor(Math.random()*lower_alphabet.length)]; 
 characterPool += lower_alphabet;
}
 else{
lower_alphabet= ('');
}
 
  if (l === true){
    pass += upper_alphabet[Math.floor(Math.random()*upper_alphabet.length)];
    characterPool += upper_alphabet;
  } 
   else {
 upper_alphabet= ('');
  }
 
  //Then finish building the password

function randomPassword(){
for(z = pass.length; z < max; z++) {

  pass += pass [Math.floor(Math.random()*pass.length)];
  myform.row_password.value = pass;
 

}
}

console.log(pass[0])
console.log(pass[1])
console.log(pass[2])
console.log(pass[3])
  //function randomPassword(length){
   // pass= (numeral+special_Chr+lower_alphabet+Upper_alphabet);
  //for (pass=0;pass("")< max(""); pass++);
 
    // myform.row_password.value = pass;


    //var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    //var pass = "";
    //for (var x = 0; x < length; x++) {
      // var i = Math.floor(Math.random() * chars.length);
       //pass += char.charAt(i);

  
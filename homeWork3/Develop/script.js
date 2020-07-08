
var max = prompt("How many characters you want in your password?");
var i = prompt("You want to have numerals in your password?yes or no");
var j = prompt("You want to have special CHR in your password?yes or no");
var k = prompt("You want to have lower case alphabets in your password?yes or no ");
var l = prompt("You want to have uppercase alphabets in your password?yes or no");

var numeral ='0123456789';
var special_Chr = '!#$%&*';
var lower_alphabet = 'abcdefghijklmnopqrstuvwxyz';
var upper_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var pass = "";
var characterPool = [];



if (i === 'Yes') {
 pass += numeral[Math.floor(Math.random()*numeral.length)];
 characterPool.concat(numeral);
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

if (j==="yes"){
  pass += special_Chr[Math.floor(Math.random()*special_Chr.length)];
characterPool.concat(special_Chr);
}
else {
 special_Chr = ('');
}

if (k==="yes"){
  pass += lower_alphabet[Math.floor(Math.random()*lower_alphabet.length)]; 
 characterPool.concat(lower_alphabet);
}
 else{
lower_alphabet= ('');
}
 
  if (l==="yes"){
    pass += upper_alphabet[Math.floor(Math.random()*upper_alphabet.length)];
    characterPool.concat(upper_alphabet);
  } 
   else {
 upper_alphabet= ('');
  }
 
  //Then finish building the password

function randomPassword(length){
while(pass.length < max) {
 
 pass += characterPool[Math.floor(Math.random()*characterPool.length)];
 myform.row_password.value = pass;
}
}
  //function randomPassword(length){
   // pass= (numeral+special_Chr+lower_alphabet+Upper_alphabet);
  //for (pass=0;pass("")< max(""); pass++);
 
    // myform.row_password.value = pass;


    //var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    //var pass = "";
    //for (var x = 0; x < length; x++) {
      // var i = Math.floor(Math.random() * chars.length);
       //pass += char.charAt(i);

  
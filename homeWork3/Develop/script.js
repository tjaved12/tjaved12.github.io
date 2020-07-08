
var max = prompt("How many characters you want in your password?");
var i = prompt("You want to have numerals in your password?yes or no");
var j = prompt("You want to have special CHR in your password?yes or no");
var k = prompt("You want to have lower case alphabets in your password?yes or no ");
var l = prompt("You want to have uppercase alphabets in your password?yes or no");

var numeral =[1,2,3,4,5];
var special_Chr = '!@#$%';
var lower_alphabet = ["a","b","c","d","e"];
var Upper_alphabet = 'ABCDE';
var pass ="";
var toTake =2;


if (i==="yes"){
  var numeral = numeral[Math.floor(Math.random()*numeral.length)];
}
  else  {
  numeral = ('');
  }

if (j==="yes"){
var special_Chr = special_Chr[Math.floor(Math.random()*special_Chr.length)];
}
else {
 special_Chr=('');
}

if (k==="yes"){
 
 var lower_alphabet = lower_alphabet[Math.floor(Math.random()*lower_alphabet.length)]; 
}
 else{
lower_alphabet= ('');
}
 
  if (l==="yes"){
    var Upper_alphabet= Upper_alphabet[Math.floor(Math.random()*Upper_alphabet.length)];
  } 
   else {
 Upper_alphabet= ('');
  }
 
  
  function randomPassword(length){
    pass= (numeral+special_Chr+lower_alphabet+Upper_alphabet);
  //for (pass=0;pass("")< max(""); pass++);
 
     myform.row_password.value = pass;
}

    //var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    //var pass = "";
    //for (var x = 0; x < length; x++) {
      // var i = Math.floor(Math.random() * chars.length);
       //pass += char.charAt(i);

  
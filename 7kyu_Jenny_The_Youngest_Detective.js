 /*Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
Spaces are not places, you need the actual letters. No spaces.
The returned word should be all lowercase letters.
if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(
Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y") */


 let result = []; //create an empty array to store letters for Jenny 
 let arrayNumbers = nums.sort(function ( a , b ) { return a - b ;}); // sorting number elements in array in a numeric order ['5', '0', '3' ] to ['0', '3', '5'] 
 let stringArray = str.replace(/\s/g,'').toLowerCase().split(''); //remove space/to lower-cased and make a string into an array ['i','l','o','v','e','y','o','u'] 
 
 for ( var i = 0; i < arrayNumbers.length; i++ ) {
  if ( arrayNumbers[i] > stringArray.length ) { //if ith number in arrayNumbers greater than the length of stringArray, then Jenny can't play today
  return "No mission today";  
 }
 else result.push(stringArray[arrayNumbers[i]]); //if not, ith value of arrayNumbers becomes the index for the letter of stringArray to be store in result array
 
 }
result = result.join(''); //lastly, let's make this array with letters into a string! 
return result;
 // Jenny needs your help...
}

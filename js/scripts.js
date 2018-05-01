/*
1. Take a number and return the square of that number (power of 2).
2. If a non-number argument is passed into the function, alert NaN and prompt for another response
*/
function sqrt(num) {
  let convertedNum = parseInt(num);
  if(!isNaN(convertedNum)) {
    return alert(convertedNum * convertedNum);
  } else {
    let resp = prompt(`No, no, no, not NaN, a number!`);
    sqrt(resp);
  }
}
// let numToSquare = prompt("Give me a number to square.");
// sqrt(numToSquare);


/*
In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
*/
function alertString(str) {
  if(str.charAt(str.length - 1) !== '.') {
    str += '.';
  }
  str = str.charAt(0).toUpperCase() + str.slice(1);
  alert(str);
}

// let myStr = prompt('Hey, tell  me something...');
// alertString(myStr);

/*
Create a string/FUNCTION that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.
*/
function flipHalves(stringToFlip) {
  let firstHalf = stringToFlip.substr(0, stringToFlip.length / 2);
  let secondHalf = stringToFlip.substr(stringToFlip.length / 2);
  alert(`${secondHalf}${firstHalf}`);
}
let stringy = prompt("Let me flip ya");
flipHalves(stringy);




/*
BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.
*/

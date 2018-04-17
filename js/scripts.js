//For Loops
for (let i = 0; i < 10; i++) {
  console.log(i);
} 
//Basic For loop has 3 parts: 
  //1. declaration of iterator (let i = 0)
  //2. statement to be evaluated (i < 10)
  //3. Incrementor (i++)

for (let i = 5; i > 0; i--) {
  console.log(i);
} //For loop with decrementor
// 
let i = 0; //Declaration

for(; i < 10 ; i++) { //For loop with earlier declaration
  alert(i);
}

/* logical or looks like this ||. So....
if(this || that) { if either or this or that is true, do stuff
  do stuff
}
*/

/*
  locigal and looks like this &&
  so... if(this && that) {
  if BOTH of these is true, do stuff
}
*/

let obj1 = {
  name: "Ryeker"
};

let obj2 = {
  name: "Ryeker"
};

obj1 === obj2; //will always return false

//Strict equals (===) checks for value AND TYPE

32 == "32"; 

//Loose equals (==) checks for value, NOT type.

new Number('cheese');
//This will come out NaN (or Not a Number);

// to check if something is not a number, use isNaN();

isNaN(new Number('cheese')); //Will return TRUE

// alert(
//   isNaN((parseInt(myNumber) / 2))
// );




// 1. Prompt user for a number
// 2. Convert returned value into an integer
// 3. Return values for
  // a. their value + 42
  // b. their value - 42
  // c. thier value * 42
  // d. thier value / 42

const best = 42;
const cheese = "delicious";

best += 2; //is the same as
best = best + 2;

//CONTROL FLOW
if(best == "42") { //JS will evaluate each of the statements. When one returns true, JS will run the code in the corresponding block and then terminate.
  console.log('hooray!!');
} else if(cheese === 'delicious n stuff') {
  console.log('yes it is!!!');
} else {
  console.log('boooooo');
}









//

//ALL ABOUT VAR VARIABLES:
var myName; //declared
myName = "Ryeker"; //defined
var myName = "Ryeker"; //declared AND defined

console.log(myName, "one");
{ // {} makes a "block" of code, which forms a scope. More on that later.
  myName = "Christa";
  console.log(myName, "Two");  
}
 
 console.log(myName, "Three");
 
 //ALL ABOUT LET VARIABLES
 
 let myName = "Ryeker"; 
 console.log(myName, "one");
 {
   let = "Christa"; //uh-oh
   console.log(myName, "Two");  
 }
  console.log(myName, "Three");
  
  //ALL ABOUT CONST VARIABLES
  
  const myName = "Ryeker";
  console.log(myName, "one");
  {
    myName = "Christa";
    console.log(myName, "Two");  
  }
  console.log(myName, "Three");

//How to use the JavaScript DATE Object
let birthday = '5/21/86'; //Make a "date string". Must be properly formatted.
let rightNow = new Date(birthday); //pass that date string to the date constructor.


//How to use the JavaScript MATH Object
let myNum = 3;
const newVal = myNum * Date.PI;
alert newVal;

//ARRAYS in JavaScript...think "linked lists" if you're a C programmer
let myArray = ["Sam", 3, new Date(), []]; //collection of data. Holds all/any JS data types.

//OBJECTS in JavaScript
let myObject = { //Formed by {} with key: value pairs, where the key is the reference, the value is the data being referenced.
  studentCount: 0,
  teacherRating: 10000000000000000
};
//There will be MUCH more covered on these Objects in class.


//PROMPT 
const userStory = prompt('Tell me, do you take walks?');

console.log(userStory);

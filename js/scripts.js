let blueDivs = document.getElementsByClassName('blue'); //Returs an array of HTML Elements with the class blue
let h1 = document.getElementsByTagName('h1'); // Returns an array of HTML Elements that are of the tag name h1
let para = document.getElementById('para'); //Returns the FIRST instance of an element that has the id para;
let queryById = document.querySelectorAll('#para'); //returns an array of elements with id of para
let queryByClass = document.querySelectorAll('.blue'); //returns an array of elements with class of blue
let queryByTag = document.querySelectorAll('div'); //returns an array of div elements 

//TRY it out #1
function queryDom(element, method) {
  switch(method.toLowerCase()) {
    case 'getelementsbytagname':
      console.log(document.getElementsByTagName(element));
      break;
    case 'getelementsbyclassname':
      console.log(method = document.getElementsByClassName(element));
      break;
    case 'getelementbyid':
      console.log(method = document.getElementById(element));
      break;
    case 'queryselector': 
      console.log(method = document.querySelector(element));
      break
    default:
      console.log(method = document.querySelectorAll(element));
      break;
  }
}
let el = prompt("Give me an element");
let method = prompt("Give me a method");
queryDom(el, method);


//EVENT LISTENERS
const button = document.querySelector('.btn-danger');
const div = document.querySelector('.blue');

button //element to listen TO
.addEventListener( //Method that activates the listener. Takes 2 arguments.
  'click', //arg 1 = string of the event to listen FOR
  (e) => { //arg 2 = callback function that gets called when the event that you are listening FOR happens on the element you're listening TO
    alert(e.target); //execute some logic here. This happens when the event happens.
}); //callback function because JS is being "called back" to this point in the code when the user clicks on the button.

//TRY IT OUT #2
div.addEventListener('mouseenter', (e) => {
  div.style.backgroundColor = 'red';
});

h1.addEventListener('mouseup', (e) => {
  h1.innerHTML = '<small>Im tiny</small>';
});















//

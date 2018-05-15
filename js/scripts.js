'use strict';
// //TIMER
// setTimeout( //Set timeout method
//   () => { //arg #1, a callback fn
//     alert("WACKY DAN'S SUPER SALE!!!!");
// }, 
// 5000) //time in ms youw ant to wait
// 
// 
// setInterval( //Set interval method
//   () => { //arg #1, a callback fn
//     logout();
// }, 
// 60000) //time in ms youw ant to wait
// alert("I am first!!!");
// 
// // TRY IT OUT # 1
// 
// const quotes = ["hey you're great", "Best teacher ever? why thank you...", "Geekwise is fun...and informative!"];
// let i = 0;
// let timer;
// let interval;
// /*
// 1. Write a program that prompts the user for a time (in ms) they want to wait.
// */
// function promptUser() {
//   return parseInt(prompt("How long you wanna wait for stuff in ms?", '1000'));
// }
// 
// /*
// 2. Take the response and create a setTimeout. After the time expires, alert the user with a random quote.
// */
// let userTimeout = promptUser();
// !isNaN(userTimeout) ? createTimeout(userTimeout) : promptUser();
// 
// function createTimeout(time) {
//   timer = setTimeout(() => {
//     alert(quotes[i]);
//   }, time);
// };
// /*
// 3. Prompt the user for a number of how often they want to be alerted and have the message change every time the alert happens. HINT: DO NOT write multiple messages, have JS change it for you.
// */
// let userInterval = parseInt(prompt("how often do you wanna hear from me? (in ms please)", "5000"));
// 
// !isNaN(userInterval) ? createInterval(userTimeout) : promptUser();
// 
// function createInterval(time) {
//   interval = setInterval(() => {
//     alert(quotes[i]);
//     i < 4 ? i++ : i = 0;
//   }, time);
// }
// 
// /*
// 4. Create two buttons: one that cancels the timeout, and one that cancels the interval.
// */
// const cancelTimeout = document.querySelector('#cancel-timeout');
const cancelInterval = document.querySelector('#cancel-interval');
// 
// cancelTimeout.addEventListener('click', () => {
//   console.log('TIMER>>>>', timer);
//   clearTimeout(timer);
// })
// 
cancelInterval.addEventListener('click', () => {
  logout();
});

let user = {
  email: "ryekerjh@gmail.com",
  firstName: "Bryan",
  lastName: "Griffin",
  cart: [],
  lastLogin: Date.now()
};

let token = 'lkasdfa,mns;kasd faslk;hasdf;ajsdf';

sessionStorage.setItem('currentUser', JSON.stringify(user));
sessionStorage.setItem('token', token);
user = JSON.parse(sessionStorage.getItem('currentUser'));

alert(`Hi ${user.firstName}, glad you're back! Now, spend money.`);

function logout() {
  sessionStorage.clear();
}

var v = 1;
var getValue = (function(x) {
    return function() { 
        alert(x); 
    };
}(v));
v = 2;

getValue(); 




var note = {
  to: 'Tove',
  from: 'Jani'
}





//

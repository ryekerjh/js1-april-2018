// const div = document.querySelector('div');
// const p = document.querySelector('p');
// const button = document.querySelector('.btn-default');
// 
// div.addEventListener('mouseover', (e) => {
//   let newPTag = document.createElement('p'); //Create a new element
//   newPTag.textContent = "Hey there, guy/gal/friend/frienemy!!!"; //add some text content to that element
//   div.appendChild(newPTag); //add that element to another parent element
// });
// 
// button.addEventListener('click', (e) => {
//   let newDiv = document.createElement('div'); //create a DIV
//   newDiv.innerHTML = '<h3 class="text-center">Whoa! You clicked the thing!</h3><p>Some other things you might be interested in....</p>'; //Add some HTML content to the DIV you made
//   div.insertBefore(newDiv, p); //Add you new DIV to a parent (const div), BEFORE a sibling node (const p).
// });
// 
// button.addEventListener('click', (e) => {
//   div.classList.remove('text-center');
// });
// 
// function checkForRed(element) {
//   if(element.classList.contains('red-text')) {
//     element.classList.remove('red-text');
//     //...also add a class of some importance
//   } else {
//     //add the red-text clas
//   }
// }
// 
// const myImg = document.querySelector('img');
// 
// function changeImg(url) {
//   myImg.setAttribute('src', 'http://img.photobucket.com/albums/v480/punkboi/fried_anakin1.jpg')  
// }
// 
// myImg.addEventListener('click', () => (changeImg()));
// 
// 
// 
//

const body = document.querySelector('body');

for(let i = 1; i <= 100; i++) {
  let p = document.createElement('p');
  if(i % 3 === 0 && i % 5 === 0) {
    p.textContent = 'FizzBuzz';
  } else if(i % 3 === 0) {
    p.textContent = 'Fizz';
  } else if(i % 5 === 0) {
    p.textContent = 'Buzz';
  } else {
    p.textContent = i;
  }
  body.appendChild(p);
}







 //

const div = document.querySelector('div');
const p = document.querySelector('p');
const button = document.querySelector('.btn-default');

div.addEventListener('mouseover', (e) => {
  let newPTag = document.createElement('p'); //Create a new element
  newPTag.textContent = "Hey there, guy/gal/friend/frienemy!!!"; //add some text content to that element
  div.appendChild(newPTag); //add that element to another parent element
});

button.addEventListener('click', (e) => {
  let newDiv = document.createElement('div'); //create a DIV
  newDiv.innerHTML = '<h3 class="text-center">Whoa! You clicked the thing!</h3><p>Some other things you might be interested in....</p>'; //Add some HTML content to the DIV you made
  div.insertBefore(newDiv, p); //Add you new DIV to a parent (const div), BEFORE a sibling node (const p).
});

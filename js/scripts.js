// /*
// 1. Prompts your user for their name.
// 2. Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
// 3. Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.
// */
// 
// 
// 
// 
// 
// 
// var userName = prompt("What's your name, doe?");
// 
// 
// 
// 
// 
// 
// 
// var favColor = prompt("How about dat fav colly, doe? Please choose from these: ", "Please choose from: red, blue, green, purple, pink, yellow, brown, black, white, grey.");
// 
// 
// 
// 
// 
// 
// let messageToUser;
// 
//   switch(favColor.toLowerCase()) {
//     case 'blue':  
//       messageToUser = 'Blue is the BEST!';
//       break;
//     case 'red':
//       messageToUser = "Red is aight, I guess...";
//       break;
//     default:
//       messageToUser = "Oh come on, man. A REAL COLOR!!";
//       break;
// }
// 
// alert(`Hey there, ${userName}, ${messageToUser}`);
let shoppingList = [];

let item1 = "Detergent";
let item2 = "cheese";
let item3 = "Crackas";
let item4 = "wine";

shoppingList.push(item1, item2, item3, item4);

// console.log(shoppingList);


let favoriteMovie = ['Star Wars VI', 'Ian McDermott', 1983];
let secondFavorite = ['Return of the King', 'Viggo Mortenson', 2003];
let thirdFavorite = ['Equilibrium', 'Christian Bale', 1999];
let fourthFavorite = ['Back to the Future III', 'Michael J. Fox', 1987];
let fifthFavorite = ['The Dark Knight', 'Heath Ledger', 2007];
let myFavoriteMovies = [];
myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite, fourthFavorite, fifthFavorite);

for(let i = 0; i < myFavoriteMovies.length; i++) {
  if(myFavoriteMovies[i][0] === favoriteMovie[0]) {
    let correctEntry = myFavoriteMovies[i];
    alert(`${correctEntry[0]} is the title of my favorite movie and ${correctEntry[2]} is the year!`);
  }
}
// const titles = [];
// const favAndLeastFav = [];
// 
// 
// titles.push(favoriteMovie[0], secondFavorite[0], thirdFavorite[0], fourthFavorite[0], fifthFavorite[0]);

// console.log(titles);











//

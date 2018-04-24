/*
1. Prompts your user for their name.
2. Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
3. Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.
*/






var userName = prompt("What's your name, doe?");







var favColor = prompt("How about dat fav colly, doe? Please choose from these: ", "Please choose from: red, blue, green, purple, pink, yellow, brown, black, white, grey.");






let messageToUser;

  switch(favColor.toLowerCase()) {
    case 'blue':  
      messageToUser = 'Blue is the BEST!';
      break;
    case 'red':
      messageToUser = "Red is aight, I guess...";
      break;
    default:
      messageToUser = "Oh come on, man. A REAL COLOR!!";
      break;
}

alert(`Hey there, ${userName}, ${messageToUser}`);

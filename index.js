for (let bunnyNumber = 1; bunnyNumber <= 20; bunnyNumber++) {
  // console.log(`BUNNY NUMBER`);
  // console.log(`Floofer ${bunnyNumber}`);
}

// SUDO CODING
const magicNumber = 7;
// create a variable called isCorrect that let's me know if the user has guessed correctly
let isCorrect = false;
// while isCorrect is not true
while (!isCorrect) {
  // console.log(`NOT CORRECT`);

  //TESTING - EXIT OF WHILE LOOP (infinite loop)
  // If use const isCorrect = false; gives and infinite loop
  //   isCorrect = true;
  // }

  // ask the user to guess a number
  const userGuess = prompt(`Guess a Number!`);

  // if the number is correct
  if (Number(userGuess) === magicNumber) {
    // console.log(`CORRECT`);

    // tell the user that they are a winner
    alert(`YOU WIN!!!`);

    // set  isCorrect to true
    isCorrect = true;
    // if the user is not correct
  } else {
    // let the user know that they need to try again
    alert(`Try Again!`);
  }
}

//Project 5: Rock Paper Scissors 
//The possible outcomes are:
// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.
// Our code will break the game into four parts:

// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

//Program starts

console.log("Hi!");

//define a function to take a single parameter from a user

const getUserChoice = (userInput) => {

    // to ensure the input must be lower case
    userInput = userInput.toLowerCase(); 

    //if the inputs are not rock,paper or scissors, the user will be alerted
    if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors' || userInput==='bomb'){
      return userInput;
    }
    else {
      return ("Invalid input");
    }
  };
  
//Make a function to have the computer make a choice

  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
          return("rock");
          break;
        case 1:
          return("paper");
          break;
        case 2:
          return("scissors");
          break;
    }
  };

  //Determine who the winner is:

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
        return ("You both tie!");
    }
    else if (userChoice === 'rock'){
        if (computerChoice ==='paper'){
            return("Computer won!");
        }
        else {
            return("User won!");
        }
        
    }
    else if (userChoice === "paper"){
        if (computerChoice ==="scissors"){
            return("Computer won!");
        }
        else {
            return("User won!");
        }
    }
    else if (userChoice ==="scissors"){
        if (computerChoice === "rock"){
            return("Computer won!");
        }
        else {
            return("User won!");
        }
    }

    // if the user type in "bomb", he will win the game automatically
    else if (userChoice ==="bomb"){
        return("You won!")
    }
  };

  //Start to play a game and determine who the winner is:

  const playGame = () =>{

    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice} .`);
    console.log(`The computer threw: ${computerChoice}.`);

    return(determineWinner(userChoice,computerChoice));
  };

  // Let's try playing the game:
  console.log(playGame());

//Project 3: Magi 8-ball
//In this project we will build a Magic Eight Ball using control flow in JavaScript.

//The user will be able to input a question, then our program will output a random fortune.

//program starts

//Create an empty variable to store users' name

let userName = 'John';

//Using a ternary expression to decide what to do if the user enters a name or not

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//Create question container to store users' questions

let userQuestion ='';

//Print the question a user would like to ask

console.log(`${userName} asks: Will I pass tomorrow's test?`);

//Create a random number between 0-7 to be used for fortune teller

let randomNumber = Math.floor(Math.random()*8);

// Creat a variable to store the answer

let eightBall = '';

//Create a control flow to capture the randomNumber and assign the eightball to a reply

switch (randomNumber){
    case 0:
        eightBall='It is certain';
        break;
    case 1:
        eightBall='It is decidedly so';
        break;
    case 2:
        eightBall='Reply hazy try again';
        break;
    case 3:
        eightBall='Cannot predict now';
        break;
    case 4:
        eightBall='Do not count on it';
        break;
    case 5:
        eightBall='My sources say no';
        break;
    case 6:
        eightBall='Outlook not so good';
        break;
    case 7:
        eightBall='Signs point to yes';
        break;
    default:
        console.log('No answer!');
        break;                  
}

console.log(`The Magic 8-ball says: ${eightBall}.`);
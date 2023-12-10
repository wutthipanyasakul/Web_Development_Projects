
//Project 4: Race Day

// Instruction:
//write a program that will register runners for the race 
//and give them instructions on race day.

//Race numbers are assigned randomly

let raceNumber = Math.floor(Math.random() * 1000);

//Create a variable indicating whether a runner registered early or not
let registeredEarly = false;

//Create a variable for the runner's age and set it to equal a number
let runnerAge = 25;
//let runnerAge = Math.floor(Math.random()*100);

// Check if the runner is an adult and registered only

if (runnerAge > 18 && registeredEarly === true) {
    raceNumber+= 1000;
}

//Check if runners over 18 who registered early and tell their race time
if  (runnerAge > 18 && registeredEarly ===true){
    raceNumber += 1000;
    console.log(`Early adults with race number: ${raceNumber} run at 9:30 am.`);
}
else if (runnerAge > 18 && registeredEarly ===false){
    console.log(`Late adults with race number: ${raceNumber} run at 11:00 am.`)
  }
else if (runnerAge < 18){
    console.log(`Youth registrants with race number: ${raceNumber} run at 12:30 pm.`);
  }
else{
    console.log(`Youths are exactly 18 yrs with race number: ${raceNumber}, please see the registration desk. Thank you!`)
  }

/*Project 6 version 2 (V.2): Sleep Debt Calculaor */

//The updated version: 

//program starts

const getSleepHours = (day) => {

    //If the user input a beginning small letter ,convert to a big one.
    
    let dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1);
  
  switch (dayCapitalized){
    case 'Monday':
      return (8);
      break;
    case 'Tuesday':
      return (9);
      break;
    case 'Wednesday':
      return (10);
      break;
    case 'Thursday':
      return (6);
      break;
    case 'Friday':
      return (7);
      break;
    case 'Saturday':
      return(5);
      break;
    case 'Sunday':
      return(9);
      break;
    default:
      return ("Invalid input!");
      break;
    }
          
      };
  //Updated: To get the actual sleep hours, by putting liternal numbers and make the code more concise
  
  const getActualSleepHours = () => 8 + 9 +10+ 6+7+5+9;

    //Updated: Calculate for an ideal sleep hour, by making it more concise and putting the parameter into it
  
    const getIdealSleepHours = idealHours => idealHours * 7;

  console.log
    const calculateSleepDebt = () => {
      let actualSleepHours = getActualSleepHours();
      let idealSleepHours = getIdealSleepHours(9); //Updated by inserting the number into this function
  // Check your sleep status
  
      if (actualSleepHours === idealSleepHours){
        return ("You have enough sleep!");
    } else if (actualSleepHours > idealSleepHours) {
        let overSleep = actualSleepHours - idealSleepHours;
        return(`You sleep over ${overSleep} hours.`);
    } else {
        let underSleep =  idealSleepHours - actualSleepHours;
        return (`You sleep less ${underSleep}.You should get some rest!`);
    }
    };
  
  console.log(calculateSleepDebt());
  
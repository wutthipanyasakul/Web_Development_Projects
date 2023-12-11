/*Project 6: Sleep Debt Calculaor */

//The program will determine the actual and ideal hours of sleep for each night of the last week.
//Finally, it will calculate, in hours ,how far you are from your weekly sleep goal.

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
  //To get the actual sleep hours
  
  const getActualSleepHours = () =>{
    let Monday = getSleepHours('Monday');
    let Tuesday = getSleepHours('Tuesday');
    let Wednesday = getSleepHours('Wednesday');
    let Thursday = getSleepHours('Thursday');
    let Friday = getSleepHours('Friday');
    let Saturday = getSleepHours('Saturday');
    let Sunday= getSleepHours('Sunday');
  
    let sum = Monday + Tuesday +Wednesday+ Thursday+Friday+Saturday+Sunday;
    return sum;
  };
  
    //Calculate for an ideal sleep hour
  
    const getIdealSleepHours = () =>{
      let idealHours = 8;
      return idealHours * 7;
    };
  
    const calculateSleepDebt = () => {
      let actualSleepHours = getActualSleepHours();
      let idealSleepHours = getIdealSleepHours();
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
  
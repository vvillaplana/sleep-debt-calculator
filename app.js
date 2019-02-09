const getSleepHours = day => {
    //Write how many hours do you sleep each day of the week
    switch (day) {
      case 'monday':
        return 7;
        break;
      case 'tuesday':
        return 9;
        break;
      case 'wednesday':
        return 5;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 8;
        break;
      default:
        return 'Error!!';
    }
  };
  
  const getActualSleepHours = () => 
      getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  
  const getIdealHours = (idealHours) => {
    return idealHours * 7;
  }
  
  const calculateSleepDebt = (idealHoursADay) => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealHours(idealHoursADay);
       if (actualSleepHours === idealSleepHours) {
      console.log(`Congrats! You sleep the perfect amount of time: ${idealSleepHours} hours.`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`Ups! You are sleeping ${actualSleepHours - idealSleepHours} more hour(s) than needed`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`Sorry! You need to sleep ${idealSleepHours - actualSleepHours} hour(s) more`);
    } else {
      console.log('There was an error. Please, check your code!');
    }
  }
  //Write how many hours you would like to sleep per night
  calculateSleepDebt(8);
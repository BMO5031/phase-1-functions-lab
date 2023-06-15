// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hqLocation = 42;
    return Math.abs(blocks - hqLocation);
    //returns the number of blocks given a value
  }

function distanceFromHqInFeet(blocks) {
   const blockInFeet = 264;
   return distanceFromHqInBlocks(blocks) * blockInFeet;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264;
    return Math.abs(start - destination) * blockInFeet;
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
   const feet = distanceTravelledInFeet(start, destination);
    //returns the fare for the customer
  
  if (feet <= 400) {
    return 0;
  }else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * 2/100;
  }else if (feet > 2000 && feet <= 2500) {
    return 25;
  }else if (feet > 2500) {
    return 'cannot travel that far';
  }
}

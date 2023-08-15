console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// function printOdds(count) {
//    if (count < 0) {
//        count = count * -1;
//    }
//    for (let i = 1; i <= count; i++) {
//        if (i % 2 !== 0) {
//         console.log(i);
//     }
//    }
// }

// printOdds(10);
// printOdds(-10);

function printOdds(count) {
  if (count > 0) {
    for (let i = 1; i <= count; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  } else if (count < 0) {
    for (let i = 1; i <= count; i--) {
      if (i % 2 !== 0) {
        console.log(i * -1);
      }
    }
  } else {
    console.log(count);
  }
}

printOdds(10);
printOdds(-10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge(userName, age) {

  let aboveSixteen = `Congrats ${userName}, you can drive a motor vehicle!`;
  let belowSixteen =
  `Sorry ${userName}, but you're gonna need to wait ${16-age} years until you can vroom vroom.`;
 
  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

checkAge("Beavis", 42);
checkAge("Butthead", 13);

function oldEnough(age, targetAge) {
    return age >= targetAge;
}

function checkLicence(name, age) {
    let canDrive = oldEnough(age, 16);
    let canHavePermit = oldEnough(age, 15);
    let canVote = oldEnough(age, 18);
    let canDrink = oldEnough(age, 21);

    if (canDrink) {
        console.log(`${name} can drink, vote and drive (just not at the same time).`)
    } else if (canVote) {
        console.log(`${name} can vote and drive (preferably not at the same time).`)
    } else if (canDrive) {
            console.log(`${name} can drive (with a license).`)
    } else if (canHavePermit) {
        console.log(`${name} can drive with a licensed adult in the passenger seat.`)
    } else {
        console.log(`$(name) is too young. try again in at least ${15-age} years.`)
    }
}

checkAge("Beavis", 42);
checkAge("Butthead", 13);

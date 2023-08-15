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
  let belowSixteen = `Sorry ${userName}, but you're gonna need to wait ${
    16 - age
  } years until you can vroom vroom.`;

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
    console.log(
      `${name} can drink, vote and drive (just not at the same time).`
    );
  } else if (canVote) {
    console.log(
      `${name} can vote and drive (preferably not at the same time).`
    );
  } else if (canDrive) {
    console.log(`${name} can drive (with a license).`);
  } else if (canHavePermit) {
    console.log(
      `${name} can drive with a licensed adult in the passenger seat.`
    );
  } else {
    console.log(
      `$(name) is too young. try again in at least ${15 - age} years.`
    );
  }
}

checkLicence("Beavis", 42);
checkLicence("Butthead", 13);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// my first attempt (unecessarily verbose) solution

function checkQuadrant(x, y) {
  let quadrant1 = false;
  let quadrant2 = false;
  let quadrant3 = false;
  let quadrant4 = false;
  let xAxis = false;
  let yAxis = false;

  // check possible quadrants based on x axis
  if (x > 0) {
    quadrant1 = true;
    quadrant4 = true;
  } else if (x < 0) {
    quadrant2 = true;
    quadrant3 = true;
  } else {
    xAxis = true;
  }
  // narrow down possible quadrants based on x axis
  if (y > 0) {
    quadrant3 = false;
    quadrant4 = false;
  } else if (y < 0) {
    quadrant1 = false;
    quadrant2 = false;
  } else {
    yAxis = true;
  }
  // print result to the console based on which quadrant is TRUE
  if (quadrant1) {
    console.log(`The point (${x}, ${y}) is in Quadrant #1`);
  } else if (quadrant2) {
    console.log(`The point (${x}, ${y}) is in Quadrant #2`);
  } else if (quadrant3) {
    console.log(`The point (${x}, ${y}) is in Quadrant #3`);
  } else if (quadrant4) {
    console.log(`The point (${x}, ${y}) is in Quadrant #4`);
  } else if (xAxis) {
    if (yAxis) {
      console.log(`The point (${x}, ${y}) is at origin (zero)`);
    } else {
      console.log(`The point (${x}, ${y}) is on the x axis`);
    }
  } else {
    console.log(`The point (${x}, ${y}) is on the y axis`);
  }
}

checkQuadrant(0, 0);
checkQuadrant(4, 20);
checkQuadrant(-127, -974);

// my second attempt solution

function testQuadrant(x, y) {
  let quadrant = " ";
  if (x > 0 && y > 0) {
    quadrant = "in quadrant 1";
  } else if (x < 0 && y > 0) {
    quadrant = "in quadrant 2";
  } else if (x < 0 && y < 0) {
    quadrant = "in quadrant 3";
  } else if (x > 0 && y < 0) {
    quadrant = "in quadrant 4";
} else if  (x == 0 && y != 0) {
  quadrant = " on x axis";
} else if (x != 0 && y == 0) {
  quadrant = "on y axis";
} else {
  quadrant = "at origin (zero)";
}

console.log(`point (${x},${y}) is ${quadrant}.`);

}

testQuadrant(0, 0);
testQuadrant(4, 20);
testQuadrant(-127, -974);


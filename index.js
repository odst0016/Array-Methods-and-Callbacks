import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final

(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const task1 = fifaData.filter(function (item) {
  return item["Year"] === 2014 && item["Stage"] === "Final";
});
console.log(task1);
console.log(task1[0]["Home Team Name"]);
console.log(task1[0]["Away Team Name"]);
console.log(task1[0]["Home Team Goals"]);
console.log(task1[0]["Away Team Goals"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  const a = data.filter(function (item) {
    return item["Stage"] === "Final";
  });
  return a;
}
console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals, data) {
  const arr = getFinals(data);
  const newArr = [];
  for (let i in arr) {
    newArr.push(arr[i]["Year"]);
  }
  return newArr;
}
console.log(getYears(getFinals, fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(getFinals, data) {
  const arr = getFinals(data);
  const winners = [];
  for (let i in arr) {
    if (arr[i]["Away Team Goals"] > arr[i]["Home Team Goals"]) {
      winners.push(arr[i]["Away Team Name"]);
    } else {
      winners.push(arr[i]["Home Team Name"]);
    }
  }
  return winners;
}

console.log(getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears, getFinals, data) {
  const arrYear = getYears(getFinals, data);
  const arrWinners = getWinners(getFinals, data);
  const arrToReturn = [];
  for (let i in arrYear) {
    arrToReturn.push(`In ${arrYear[i]}, ${arrWinners[i]} won the world cup!`);
  }
  return arrToReturn;
}

console.log(getWinnersByYear(getWinners, getYears, getFinals, fifaData));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  const homeGoalsArr = [];
  const awayGoalsArr = [];
  for (let i in data) {
    homeGoalsArr.push(data[i]["Home Team Goals"]);
    awayGoalsArr.push(data[i]["Away Team Goals"]);
  }

  const homeTotal = homeGoalsArr.reduce(function (a, b) {
    return a + b;
  }, 0);
  const awayTotal = awayGoalsArr.reduce(function (a, b) {
    return a + b;
  }, 0);

  const homeAverage = homeTotal / homeGoalsArr.length;
  const awayAverage = awayTotal / awayGoalsArr.length;

  return {
    "Home Goals Average": homeAverage,
    "Away Goals Average": awayAverage,
  };
}

//console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins() {}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

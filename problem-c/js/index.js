'use strict';

/* Below is an array of objects representing Husky Football games from the 2016
   season. Each object has the same properties, so it represents a data table. */
let huskyGames2016 = [
  { "date":"9/3/16", "home":"UW", "opponent":"Rutgers", "home_score":48, 
    "opponent_score":13, "passing_yards":289, "rushing_yards":91, "fumbles":0 },
  { "date":"9/10/16", "home":"UW", "opponent":"Idaho", "home_score":59, 
    "opponent_score":14, "passing_yards":356, "rushing_yards":126, "fumbles":1 },
  { "date":"9/17/16", "home":"UW", "opponent":"Portland State", "home_score":41, 
    "opponent_score":3, "passing_yards":194, "rushing_yards":213, "fumbles":1 },
  { "date":"9/24/16", "home":"Arizona", "opponent":"UW", "home_score":28, 
    "opponent_score":35, "passing_yards":160, "rushing_yards":352, "fumbles":0 },
  { "date":"9/30/16", "home":"UW", "opponent":"Stanford", "home_score":44, 
    "opponent_score":6, "passing_yards":210, "rushing_yards":214, "fumbles":0 },
  { "date":"10/8/16", "home":"Oregon", "opponent":"UW", "home_score":21, 
    "opponent_score":70, "passing_yards":304, "rushing_yards":378, "fumbles":0 },
  { "date":"10/22/16", "home":"UW", "opponent":"Oregon State", "home_score":41, 
    "opponent_score":17, "passing_yards":300, "rushing_yards":219, "fumbles":2 },
  { "date":"10/29/16", "home":"Utah", "opponent":"UW", "home_score":24, 
    "opponent_score":31, "passing_yards":186, "rushing_yards":199, "fumbles":1 },
  { "date":"11/5/16", "home":"Cal", "opponent":"UW", "home_score":27, "opponent_score":66, 
    "passing_yards":417, "rushing_yards":287, "fumbles":2 },
  { "date":"11/12/16", "home":"UW", "opponent":"USC", "home_score":13, "opponent_score":26, 
    "passing_yards":259, "rushing_yards":17, "fumbles":0 },
  { "date":"11/19/16", "home":"UW", "opponent":"Arizona State", "home_score":44, 
    "opponent_score":18, "passing_yards":338, "rushing_yards":201, "fumbles":0 },
  { "date":"11/25/16", "home":"Washington State", "opponent":"UW", "home_score":17, 
    "opponent_score":45, "passing_yards":342, "rushing_yards":168, "fumbles":1 },
  { "date":"12/2/16", "home":"Colorado", "opponent":"UW", "home_score":10, 
    "opponent_score":41, "passing_yards":118, "rushing_yards":25, "fumbles":0 },
  { "date":"12/31/16", "home":"UW", "opponent":"Alabama", "home_score":7, 
    "opponent_score":24, "passing_yards":150, "rushing_yards":44, "fumbles":1 }
 ];


/*Game:
        date
        home (team)
        opponent (team)
        home_score
        opponent_score
        passing_yards
        rushing_yards
        fumbles 
*/

//1.
//Define a function `extractOpponent()` that takes in a "game" object and returns
//UW's opponent (whether or not that was the home team!)
//You can test this by passing in an individual element from the array.

function extractOpponent(game) {

    if (game.home == 'UW') {

      return game.opponent;

    } else if (game.opponent == 'UW') {

      return game.home;

    } else { //just incase for some reason isn't not a UW game??

      return 'UW did not play';

    }

}

//Use the `map()` method and your `extractOpponent()` function to create an array
//of UW's opponents for the season (in the same order as in the `huskyGames2016`).
//The opponents in the list do not need to be unique.
//Log out the opponents array.

console.log(huskyGames2016.map(extractOpponent));

//2.
//Define a function `huskiesLost()` that takes in a "game" object and returns
//whether or not UW lost.

function huskiesLost(game) {
 
  if (game.home == 'UW') {
 
      //a tie or winning means they did not lose
      return game.home_score < game.opponent_score;

  } else { //if (game.opponent == 'Uw') {

      return game.opponent_score < game.home_score;
  /*} else {

      return 'UW did not play';
  */
  }

} 

  //note to self: filter doesn't work with functions that can pass something that isn't a boolean?
  //means that any array of games HAS to have UW, or filtering 'UW games lost' with this function will not be accurate


//Use the `filter()` method to create an array of games that UW lost (a smaller
//array than the games they won!)
//Log out the array of lost games.

console.log(huskyGames2016.filter(huskiesLost));


//3.
//Log out an array of opponents that UW lost to. Hint: Use the `.map()` method 
//to extract the opponent names!

//get the array of games that UW lost
let lostUWGames = huskyGames2016.filter(huskiesLost);

//map out the opponent of UW
console.log(lostUWGames.map(extractOpponent));

//4.
//Use a `forEach()` loop to log out each of the games UW lost, each on its own 
//line, in the following format:
//    "Rutgers at UW, 13 to 48"
//You should use an anonymous callback function.



//for each game in lostUWGames
//print '<opponent> at <home>, <opponent_score> to <home_score>'

lostUWGames.forEach(function(game) {

  console.log(game.opponent + ' at ' + game.home + ', ' + game.opponent_score + ' to ' + game.home_score);

});

//5.
//Use the `filter()` method with an anonymous callback function to get an array
//of games where UW had at least one fumble.
//Log out HOW MANY games included fumbles.

let fumbledUWGames = huskyGames2016.filter(function(game) {

    return game.fumbles >= 1;

});

console.log(fumbledUWGames.length);

//6.
//Define a function `mostYardsPassing()` that takes in two "game" objects and
//returns the game that has a greater number of passing yards.
//Your function should handle the case where the _first_ game has no 
//`passing_yards` property, in which case it should return the second game.

function mostYardsPassing(game1, game2) {

  if (!game1.hasOwnProperty('passing_yards')) {

    return game2;

    //would this be better as an OR || condition in the first if? or no because the first if checks if game1.passing_yards exists, where the second if assumes game1.passingyards exists already
  } else if (game1.passing_yards < game2.passing_yards) {

    return game2; 

  } else {

    return game1;

  }

}

//7.
//Create a variable `mostPassingGame` that refers to the "game" that had the most
//passing yards in the season. Use the `reduce()` method with `mostYardsPassing()`
//as the callback.
// - You will need your `reduce()` method to start with an empty object `{}`,
//   since initially no game has the most passing yards!
// - Consider: why do this with `reduce()` instead of `filter()`?
//
//Log out the game with the most passing yards.

let mostPassingGame = {};

//I honestly don't entire understand the concept of starting with an empty object; did I even do it right??
mostPassingGame = huskyGames2016.reduce(mostYardsPassing);

console.log(mostPassingGame);

//It would be useful to be able to apply multiple "filter criteria" to an array
//of games at once.
//To support this, define a function `makeCombinedFilter()` that takes two 
//*callback functions* as arguments. The `makeCombinedFilter()` function should 
//then define a _new_ function (called e.g., `combinedFilter`) that takes in a 
//game object and returns the result of passing that object to both of the 
//callback functions and "anding" (&&) the results. The `makeCombinedFilter()` 
//function should then return this new function.

function makeCombinedFilter(func1, func2) {

  return function(game) {

    return func1(game) && func2(game);

  };

}

//Create a variable `fumbledAndLostFilter` which is the result of calling the 
//`makeCombinedFilter()` function and passing two callback functions: 
//one for filtering for games UW lost (e.g., the `huskiesLost()` function), and 
//one for filtering for games with fumbles (this can be a named or an anonymous
//callback like you used earlier).
//Note that `fumbledAndLostFilter` _is_ a function!

let fumbledAndLostFilter = makeCombinedFilter(huskiesLost, function(game) {

  return game.fumbles >= 1;

});


//Create an array of games that UW lost with fumbles. Use the 
//`fumbledAndLostFilter()` function as a callback to the `filter()` method.
//Log out the array of games lost with fumbles.

let lostAndFumbledUwGames = huskyGames2016.filter(fumbledAndLostFilter);

console.log(lostAndFumbledUwGames);

//OPTIONAL extra practice: create a variable `avgScoreDifference` that
//represents the average number of points UW scored _over_ their opponent
//(this value would be negative for games they lost). Use the `reduce()`
//method with an anonymous callback function.

//brainstorm: 
//make function to get score difference
//make an array of the score differences
//( 10 + 7 + 5 ) / 3 = 10/3 + 7/3 + 5/3

//function to get score difference - assumes UW always plays
function getScoreDiff(game) {

  if (game.home == 'UW') {

      return game.home_score - game.opponent_score;

  } else {

      return game.opponent_score - game.home_score;

  }

}

//array of score differences
let scoreDifferences = huskyGames2016.map(getScoreDiff);

/* keeping this just for reference: can't do this because it will divide the new "score 1" (again)
function averageScoreDiff(score1, score2) {
    return (score1 / ??) + (score2 / ??) //unsure how getting the length would work anyways
}


function sumScoreDiff(score1, score2) {
    return score1 + score2;
}
*/

//add all scores together with reduce, then get the average by dividing by 2
let avgScoreDifference = scoreDifferences.reduce(function(score1, score2) {
   return score1 + score2;
}) / scoreDifferences.length;

console.log(avgScoreDifference);



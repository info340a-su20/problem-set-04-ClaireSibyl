'use strict';

/* Define a function `addFour()` that takes a single argument 
   and returns a value 4 greater than the input.*/

   function addFour(num) {

      return num + 4;

   }
   
/* Create and log a variable `twelve` that is the result of passing 8 to your
   addFour() function. */

   let twelve = addFour(8);
   console.log(twelve);

/* Create and log a variable `twelveString` that is the result of passing "8" 
   (a string) to your addFour() function. Consider what this tells you about how
  the function should be explained (e.g., in a comment). */

   let twelveString = addFour('8');
   //concatenates strings and numerically adds numbers  

/* Define a function `compoundInterest()` that takes three parameters: 
     1. an initial bank balance (principle, in dollars)
     2. an annual interest rate (as a decimal, e.g., 0.01) 
     3. a number of years
   The function should calculate the continuous compound interest
     (https://en.wikipedia.org/wiki/Compound_interest#Continuous_compounding) 
   and *return* the resulting total balance after that many number of years

   You can call the method and log the result to check your work. Compare to
     http://www.mathwarehouse.com/calculators/continuous-compound-interest-calculator.php
*/
    
   function compoundInterest(pbalance, interest, years) {

    return pbalance * Math.exp(interest * years);
    
   }

/* Define a function `fizzBuzz()` that takes in a single number as an argument.
   The function should *return* an _array_ of numbers from 1 to the argument. 
   But for multiples of three, the array should contain "Fizz" instead of the 
   number. For multiples of five, the array should contain "Buzz" instead of the 
   number. For numbers which are multiples of both three and five, the array 
   should contain "FizzBuzz" instead of the number.
   The returned array should be empty for arguments less than 1. */

   function fizzBuzz(num) {

    let array = [];

    if (num > 1) {
      
      for (let i = 1; i <= num; i++) {
        
        if (i % 3 == 0 && i % 5 == 0) {

          array.push('FizzBuzz');

        } else if (i % 3 == 0) {

          array.push('Fizz');

        } else if (i % 5 == 0) {

          array.push('Buzz');

        } else {

          array.push(i);

        }

      }

    }

    return array;

   }

/* Define a function `getLetterFrequencies()` that takes in a single string as 
   an argument. The function should *return* an Object whose keys are characters
   (letters) and whose values are the number of times that character appears in
   the argument. Your function should be case sensitive.
   _Hint:_ start with an empty Object, then loop through the letters one at a
   time (you can access them with bracket notation, like with an array). For 
   each letter, increase the value associated with that key by one. Watch out 
   for if the letter is not in the Object yet!
   You can test this method with a word like "Mississippi". */

   function getLetterFrequencies(string) {

    let charCount = {};

    for (let i = 0; i < string.length; i++) {

      if (string.charAt(i) in charCount) {


        charCount[string.charAt(i)]++;
        

      } else { 

        charCount[string.charAt(i)] = 1;

      }
   
    }

    return charCount;

   }

/* Create a variable `deck` that represents a deck of modern playing cards
   (https://en.wikipedia.org/wiki/Playing_card). This variable should be an
   *array* of 52 elements, each of which is an Object with properties:
     - `suit`, with a string value that is either `"hearts"`, `"diamonds"`, 
       `"clubs"`, or `"spades"`
     - `rank`, with an integer value ranging from 2 to 14 inclusive (values 
        11-14 represent a Jack, Queen, King, or Ace respectively).
    Tip: use a pair of nested loops to add each combination of suit and rank to 
    the `deck` array! 
    
    You can log out the `deck` to check your work! */

    let deck = [];
    
    let suit = ['hearts', 'diamonds', 'clubs', 'spades'];

    let index = 0;

      for (let i = 0; i < suit.length; i++) {
                
        for (let j = 2; j <= 14; j++) {

          deck[index] = {'suit':suit[i], 'rank':j};
          index++;

        }

      }


//You can test the below functions by creating e.g., a `pokerHand` array that 
//contains five cards from the `deck`.

/* Define a function `containsQueenOfHearts()` that takes in an array of "card"
   objects (e.g., a Poker hand) and returns whether or not the Queen of Hearts
   is in that array.
   Hint: use a loop to check each card. */

   
function containsQueenOfHearts(hand) {

  for (let i = 0; i < hand.length; i++) {

    if (hand[i].suit == 'hearts' && hand[i].rank == 12) {

      return true;

    }

  }

  return false;

}


/* Define a function `getHighCard()` that takes in an array of "card" objects
  and returns the card object with the highest value. The "high card" is the one
  with the highest rank. Cards of different suits but the same rank are 
  considered to have the same value, and either is a valid result */

  function getHighCard(hand) {

    let highestCard = hand[0];
    
    for (let i = 1; i < hand.length; i++) {

      //using > returns earliest card of highest rank, using >= returns latest card of highest rank
      if (hand[i].rank > highestCard.rank) {

        highestCard = hand[i];

      } 
      
    }

    return highestCard;

  }
  

/* Define a function `isFlush()` that takes in an array of "card" objects and
   returns whether or not the cards all have the same _suit_. */

   
  function isFlush(hand) {

    let firstSuit = hand[0].suit;

    for (let i = 1; i < hand.length; i++) {

      if (hand[i].suit != firstSuit) {

        return false;

      }

    }

    return true;

  }



/* Extra challenge: define a function `hasPair()` that takes in an array of 
   "card" objects and returns whether or not there is at least one _pair_ (two 
   cards with the same _rank_) in the array.
   Double challenge: return the rank of the pair of cards with the highest rank 
   (e.g., if the hand contains more than one pair!) */

    //this question does not specify whether the pair [Hearts-10 and Diamonds-10] is the same as [Diamonds-10 and Hearts-10]
    //i.e. does pair order matter? I'm assuming it does not and the above example is counted as the same pair
    function hasPair(hand) {

      //pairArray.length is NOT equal to the number of pairs, but if there are more than 2 cards then there is more than 1 pair
      //I would keep track of number of pairs with a different variable...but the exact number of pairs past 1 doesn't matter since after 1 pair, the return value is just the highest rank
      let pairArray = [];

      //LOOP to add pairs into pairArray
      //for all of the cards in the deck (focus card)
      for (let i = 0; i < hand.length; i++) {

        //look at each card
        for (let j = 0; j < hand.length; j++) {

          //if the card you're looking at isn't the focus card (to not pair a card with itself...or if there happens to be a copy for some reason)
          if (i != j) {

            let iRank = hand[i].rank;
            let jRank = hand[j].rank;
            let iSuit = hand[i].suit;
            let jSuit = hand[j].suit;

            //and if the card you're looking at has the same rank as the focus card
            if (iRank == jRank) {

              let iExists = false;
              let jExists = false;

              //check if they exist as a pair in pairArray already 
              //(they just have to exist in the array of cards since pair order doesn't matter)
              for (let k = 0; k < pairArray.length; k++) {

                //if the i Card exists in pairArray
                if (pairArray[k].suit == iSuit && pairArray[k].rank == iRank) {

                  iExists = true;

                }

                //if the j Card exists in pairArray
                if (pairArray[k].suit == jSuit && pairArray[k].rank == jRank) {

                  jExists = true;

                }

              }

              //if that pair doesn't both exist in pairArray already (to make it a pair)...in other words, if one of them is missing
              if (!iExists && !jExists || iExists && !jExists || !iExists && jExists) {
            
                //if i isn't already in pairArray
                if (!iExists) {
                  pairArray.push({'suit':iSuit, 'rank':iRank});
                } 

                //if j isn't already in pairArray
                if (!jExists) {
                  pairArray.push({'suit':jSuit, 'rank':jRank});
                }

              }

            }

          }

        }

      } //end loop to add cards to pairArray

      //if there is more than one pair, meaning more than 2 cards (since pair order doesn't matter) 
      if (pairArray.length > 2) {

        //find the highest rank - by default, the first card
        let highestRank = pairArray[0].rank;

        //look at each card
        //(technically can start at 2 - the third card in pairArray - since logically the second card will pair with the first)
        for (let i = 2; i < pairArray.length; i++) {

          //if the card you're looking at has a higher rank than the current highestRank, assign it to highestRank
          if (pairArray[i].rank > highestRank) {

            highestRank = pairArray[i].rank;

          } 
      
        }

        return highestRank;

      } else { 

        //return: if there's at least 1 pair
        return pairArray.length == 2;

      } 

    }

    let over1PairHand = [{'suit':'hearts', 'rank':10},  {'suit':'diamonds', 'rank':10}, {'suit':'clubs', 'rank':10}, {'suit':'hearts', 'rank':14}, {'suit':'diamonds', 'rank':14}, {'suit':'hearts', 'rank':7}];
    let singlePairHand = [{'suit':'hearts', 'rank':10},  {'suit':'diamonds', 'rank':10}];
    let noPairHand = [{'suit':'hearts', 'rank':10},  {'suit':'diamonds', 'rank':11}];
    let emptyHand = [];

    hasPair(over1PairHand); //should return 14
    hasPair(singlePairHand); //should return true
    hasPair(noPairHand); //should return false
    hasPair(emptyHand); //should return false


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof addFour !== 'undefined') 
    module.exports.addFour = addFour;
  if(typeof twelveString !== 'undefined') 
    module.exports.twelveString = twelveString;
  if(typeof compoundInterest !== 'undefined') 
    module.exports.compoundInterest = compoundInterest;
  if(typeof fizzBuzz !== 'undefined') 
    module.exports.fizzBuzz = fizzBuzz;
  if(typeof getLetterFrequencies !== 'undefined')
    module.exports.getLetterFrequencies = getLetterFrequencies;
  if(typeof deck !== 'undefined')
    module.exports.deck = deck;
  if(typeof containsQueenOfHearts !== 'undefined')
    module.exports.containsQueenOfHearts = containsQueenOfHearts;
  if(typeof getHighCard !== 'undefined')
    module.exports.getHighCard = getHighCard;
  if(typeof isFlush !== 'undefined')
    module.exports.isFlush = isFlush;
}
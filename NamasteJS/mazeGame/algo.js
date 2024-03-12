// fake sample data from local storage or any api for ranking purposes
let winnerData = [
  [
    { playerName: "abc", attempts: 2 },
    { playerName: "bc", attempts: 2 },
    { playerName: "c", attempts: 2 },
    { playerName: "d", attempts: 2 },
    { playerName: "e", attempts: 2 },
  ],
  [
    { playerName: "Elon", attempts: 6 },
    { playerName: "Viz", attempts: 6 },
    { playerName: "Obama", attempts: 6 },
  ],
  [
    { playerName: "prash", attempts: 4 },
    { playerName: "saad", attempts: 4 },
    { playerName: "Adnan", attempts: 4 },
  ],
  [
    { playerName: "abc", attempts: 5 },
    { playerName: "bc", attempts: 5 },
    { playerName: "c", attempts: 5 },
    { playerName: "d", attempts: 5 },
    { playerName: "e", attempts: 5 },
  ],
  [
    { playerName: "Elon", attempts: 9 },
    { playerName: "Viz", attempts: 9 },
    { playerName: "Obama", attempts: 9 },
  ],
  [
    { playerName: "prash", attempts: 8 },
    { playerName: "saad", attempts: 8 },
    { playerName: "Adnan", attempts: 8 },
  ],
];

// making the 2d array in 1d array and sorting it acc to increasing 'attempts'
winnerData = winnerData.flat().sort((a, b) => a.attempts - b.attempts);
let myTempArray = [];
let newWinners = [];
// assigning 1st rank element to temp array aka first sorted element/object
myTempArray[0] = winnerData[0];
console.log(winnerData);

// iterating through flat array
for (let i = 1; i < winnerData.length; i++) {
  // placing objects with same attempts in temp array
  if (winnerData[i].attempts == winnerData[i - 1].attempts) {
    myTempArray.push(winnerData[i]);
  } else {
    // when attempts miss match, else block executes and pushes temp array to newWinner array.
    newWinners.push(myTempArray);
    // then temp array is flushed to empty.
    myTempArray = [];
    // lastly temp array is pushed with the last object which failed if condition and entered else block
    myTempArray.push[i + 1];
  }

  // and hence the loop keeps repeating, creating arrays of same attempts and finally push it to 'newWinner' array
}


// pushing elements from temp array here cuz in last iteration of if else block, the else block does not exicutes, because of which, the last set of element/array outputs will not get pushed. (reason: we have been pushing temp array into newWinner in else block)
newWinners.push(myTempArray);
console.log(newWinners);

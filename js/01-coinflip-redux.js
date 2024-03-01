let coinFlip;
let userInput = Number(prompt('How many times do you want to toss the coin? Enter a number'))
for (let i = 0; i <= userInput - 1; i++) {
  coinFlip = Math.round(Math.random());
  
  if (coinFlip === 0) {
    console.log('Heads');
  } else if (coinFlip === 1) {
    console.log('Tails');
  }
};
// Code your solutions in this file
// writeCards function
function writeCards(namesArray, eventName) {
  const cards = [];
  for (let i = 0; i < namesArray.length; i++) {
    cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return cards;
}
// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
// write a function, countDown, that takes in any positive integer and,
// starting from that number, counts down to zero using console.log().
function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}


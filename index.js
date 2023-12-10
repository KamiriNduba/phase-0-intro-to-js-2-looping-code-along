// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Test calls for writeCards function
  writeCards(["Ada", "Brendan", "Ali"], "birthday");
  
  // Test call for countDown function
  countDown(10);
  
  module.exports = {
    writeCards,
    countDown,
  };
  
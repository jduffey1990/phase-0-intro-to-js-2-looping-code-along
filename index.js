function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
    return messages;
  }
  function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}
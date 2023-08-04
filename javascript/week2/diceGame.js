function rollDice() {
  let goldCoins = 0;
  for (let i = 0; i < 10; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    alert(`You rolled a ${roll}`);
    if (roll === 1) {
      alert(`Game over!`);
      break;
    } else if (roll === 5 || roll === 6) {
      alert(`Congratulations, you receive ${roll} coins!`);
      goldCoins += roll;
    } else {
      alert(`Roll again`);
    }
    alert(`Your total so far is: ${goldCoins}!`);
  }
  alert(`Congratulations. You earned: ${goldCoins} gold coins!`);
}

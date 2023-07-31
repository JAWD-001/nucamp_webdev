const GENERAL_ADMISSION_TICKET = 20;
const CHILD_SENIOR_TICKET = 10;

function buyTicket() {
  let age = getAge();
  let cost = ticketCost(age);
  alert(
    `Thank you for your business, the price of your movie is $${cost}! Now, let's select a film and showtime!`
  );
}

function getAge() {
  alert(
    "Welcome to the Magical Mystery Theater! We are the place where magic and mystery meet to create a theatrical experience like no other!"
  );
  let age = prompt(
    "Before we discuss ticket prices and showtimes, what is your age?"
  );
  return age;
}

function ticketCost(age) {
  let cost = undefined;
  if (age < 12 || age > 65) {
    cost = GENERAL_ADMISSION_TICKET;
  } else {
    cost = CHILD_SENIOR_TICKET;
  }
  return cost;
}

const WAVE_POOL_MIN_HEIGHT = 42; // in inches
const WATERSLIDE_MIN_HEIGHT = 48; // in inches
const LAZY_RIVER_MIN_HEIGHT = 36; // in inches

function buyTicket() {
  alert("Welcome to Wild Waves Aquatic Park where you can splash into fun!");
  const attractionType = prompt(
    "'Which attraction do you want to visit: type 'wave' for wave pool, 'water' for waterslide, or 'river' for lazy river?'"
  );
  const userHeight = prompt("What is your height in inches?");
  const isAllowed = checkHeight(attractionType, userHeight);
  if (isAllowed === true) {
    alert(`Awesome, you are tall enough to ride ${attractionType}!`);
  } else if (isAllowed === false && userHeight >= 43) {
    const adult = adultPresent();
    if (adult === true) {
      alert("Great, you are able to ride the ride!");
    } else {
      alert(
        "I'm sorry, but you an not allow to ride the ride. Please select another attraction!"
      );
    }
  } else {
    alert(
      "I'm sorry, but you are not allowed to ride the ride. Please select another attraction!"
    );
  }
}

function checkHeight(attraction, height) {
  if (height >= WATERSLIDE_MIN_HEIGHT) {
    return true;
  } else if (attraction === "river" && height > LAZY_RIVER_MIN_HEIGHT) {
    return true;
  } else if (attraction === "wave" && height >= WAVE_POOL_MIN_HEIGHT) {
    return true;
  } else {
    return false;
  }
}

function adultPresent() {
  const adultPresent = prompt(
    "I'm sorry, but you are not tall enough for that right, will you be riding with an adult?"
  );
  if (adultPresent.toLowerCase() === "yes") {
    return true;
  } else {
    return false;
  }
}

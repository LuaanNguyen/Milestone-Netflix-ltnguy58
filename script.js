/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

function chooseRandomGenre() {
  // Deliverable 1: Your code here 👇
  let genreArray = ["drama", "fantasy", "comedy"];
  let randomNumber = getRandomNumber(0, 3);
  if (randomNumber === 0) {
    return genreArray[randomNumber];
  }
  else if (randomNumber === 1) {
    return genreArray[randomNumber];
  }
  else if (randomNumber === 2) {
    return genreArray[randomNumber];
  }
  else {
    return -1;
  }
}

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  if (genre === "random") {
    let randomGenre = chooseRandomGenre();
    if (randomGenre === "drama") {
      let random = getRandomNumber(0, 4);
      return displayShow(dramaShows[random]);
    }
    else if (randomGenre === "fantasy") {
      let random = getRandomNumber(0, 4);
      return displayShow(fantasyShows[random]);
    }
    else {
      let random = getRandomNumber(0, 4);
      return displayShow(comedyShows[random]);
    }
  }
  else if (genre === "drama") {
    let random = getRandomNumber(0, 4);
    return displayShow(dramaShows[random]);
  }
  else if (genre === "fantasy") {
    let random = getRandomNumber(0, 4);
    return displayShow(fantasyShows[random]);
  }
  else {
    let random = getRandomNumber(0, 4);
    return displayShow(comedyShows[random]);
  }
}



//Question 1

(a, b) => a - b;

// Question 2

const loadGames = "https://api.rawg.io/api/games?genres=sports";

fetch(loadGames)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    sportsGames(json);
  })
  .catch(function (error) {
    window.location.replace("error.html");
  });

function sportsGames(json) {
  const games = json.results;
  for (let i = 0; i < games.length; i++) {
    console.log(games[i].name);
  }
}

// Question 3

const cats = "These cats are outrageous";
const giraffes = cats.replace("cats", "giraffes");

// Question 4

const theURL = new URL("https://my.site.com/?userId=7");
const params = new URLSearchParams(theURL.search);

let id;

id = params.get("userId");

if (params.has("userId")) {
  if (id < 10) {
    document.location = "first.html";
  } else if (id >= 10) {
    document.location = "second.html";
  }
} else {
  document.location = "third.html";
}

// Question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// Question 6

const animalList = document.querySelector(".animals");

const listItem = document.createElement("li");
listItem.className = "parrots";

const listItemContent = document.createTextNode("Parrots");
listItem.appendChild(listItemContent);

animalList.appendChild(listItem);

// Question 7

const getGames = "https://api.rawg.io/api/games/3801";

fetch(getGames)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    gameDetails(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function gameDetails(details) {
  const container = document.querySelector(".rating");
  container.innerText = details.rating;
}

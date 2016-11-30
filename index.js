var data;

function onload() {
  data = loadJSON("dogs.json");
}

function setup() {
  noCanvas();
  var dogs = data.dogs;
  for (var i = 0; i < dogs.length; i++) {
    createElement('h1', dogs[i]);
  }
}

// window.addEventListener("DOMContentLoaded", onload);
//
// function onload() {
//   data = loadJSON("dogs.json");
// }
//
// var dog;
//
// function setup() {
//   createCanvas(400, 400);
//   dog = loadJSON("dogs.json");
// }

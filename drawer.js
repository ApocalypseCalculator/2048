// GLOBAL VARIABLES --------------------------------------------

var canvas
var ctx
var length

const numSquares = 4;
const lineWidthP = 4;
const lineColor = "#8a6d5c";
const cellMarginFromLineCenter = 1;

const numberImagePrefix = "img"

var imagePaths = {
  border: "border"
}
// Elements should be put in as a string, just to stay consistent
var images = {};


// EXTERNAL FUNCTIONS --------------------------------------------

// initialize variables and stuff
function initialize() {
  console.log("hi")
  canvas = document.getElementById("mainCanvas");
  ctx = canvas.getContext("2d");

  length = Math.min(window.innerWidth, window.innerHeight) * 0.9;
  canvas.width = length;
  canvas.height = length;

  for (let i = 2; i <= 2048; i <<= 1) {
    var image = document.createElement("img")
    image.src = "./images/tiles/" + i + ".png"
    imagePaths["" + i] = numberImagePrefix + i
    image.id = numberImagePrefix + i
    document.getElementById("images").appendChild(image)
  }

  for (var key in imagePaths) {
    images[key] = document.getElementById(imagePaths[key]);
  }
}

// Rendering the array
function render(numbers){
  drawImageP(0, 0, 100, 100, "border")
  drawLines();


  for(let x = 0; x < numbers.length; ++x){
    for(let y = 0; y < numbers.length; ++y){
      if(numbers[x][y] == 0){
        continue;
      }
      drawCell(x, y, 1 << numbers[x][y]);
    }
  }
}


// DRAWING FUNCTIONS --------------------------------------------

// Draw the lines of the thingymabober
function drawLines() {
  var width = 100 - lineWidthP;
  var increase = width / numSquares;

  for (var i = 1, x = increase; i < numSquares; i++, x += increase) {
    fillRectP(x, 0, lineWidthP, length, lineColor);
    fillRectP(0, x, length, lineWidthP, lineColor);
  }
}

// Draw an image at some place, image is just id
function drawImage(x, y, width, height, image) {
  ctx.drawImage(images[image], x, y, width, height);
}

// drawImage but for the resizables, image is just id
function drawImageP(x, y, width, height, image) {
  ratio = length * 0.01
  drawImage(x * ratio, y * ratio, width * ratio, height * ratio, image)
}

// fill a rectangle with some color
function fillRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

// fillRect but inputs are in percentages; out of 100
function fillRectP(x, y, width, height, color) {
  ratio = length * 0.01
  fillRect(x * ratio, y * ratio, width * ratio, height * ratio, color)
}

function drawCell(x, y, value){
  increase = (100 - lineWidthP) / numSquares

  width = increase - 2 * cellMarginFromLineCenter
  x = x * increase + lineWidthP / 2 + cellMarginFromLineCenter;
  y = y * increase + lineWidthP / 2 + cellMarginFromLineCenter

  drawImageP(x, y, width, width, value)
}

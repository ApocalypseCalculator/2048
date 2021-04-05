var canvas
var ctx
var length

const numSquares = 4;
const lineWidthP = 2.5;
const lineColor = "#8a6d5c";

const numberImagePrefix = "img"

var imagePaths = {
  border: "border"
}
var images = {};

window.onload = function() {
  initialize();

  drawImageP(0, 0, 100, 100, "border")
  drawLines();
}

// initialize variables and stuff
function initialize(){
  console.log("hi")
  canvas = document.getElementById("mainCanvas");
  ctx = canvas.getContext("2d");

  length = Math.min(window.innerWidth, window.innerHeight) * 0.9;
  canvas.width = length;
  canvas.height = length;

  for(let i = 2; i <= 2048; i <<= 1){
    var image = document.createElement("image")
    image.src = "./images/" + i + ".png"
    imagePaths["" + i] = numberImagePrefix + i
    image.id = numberImagePrefix + i
    document.getElementById("images").appendChild(image)
  }

  for(var key in imagePaths){
    images[key] = document.getElementById(imagePaths[key]);
  }
}

function drawLines(){
  var width = 100 - lineWidthP;
  var increase = width / numSquares;

  for(var i = 1, x = increase; i < numSquares; i++, x += increase){
    fillRectP(x, 0, lineWidthP, length, lineColor);
    fillRectP(0, x, length, lineWidthP, lineColor);
  }
}

// DRAWING FUNCTIONS

// Draw an image at some place
function drawImage(x, y, width, height, image){
  ctx.drawImage(images[image], x, y, width, height);
}

// drawImage but for the resizables
function drawImageP(x, y, width, height, image){
  ratio = length * 0.01
  drawImage(x * ratio, y * ratio, width * ratio, height * ratio, image)
}

// fill a rectangle with some color
function fillRect(x, y, width, height, color){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

// fillRect but inputs are in percentages; out of 100
function fillRectP(x, y, width, height, color){
  ratio = length * 0.01
  fillRect(x * ratio, y * ratio, width * ratio, height * ratio, color)
}

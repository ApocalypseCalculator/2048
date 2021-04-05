var canvas
var ctx
var length

var imagePaths = {
  numberBack: "numberBackground"
}
var images = {};

window.onload = function() {
  initialize();

  fillRectP(25, 25, 50, 50, "yellow");
}

// initialize variables and stuff
function initialize(){
  console.log("hi")
  canvas = document.getElementById("mainCanvas");
  ctx = canvas.getContext("2d");

  length = Math.min(window.innerWidth, window.innerHeight) * 0.9;
  canvas.width = length;
  canvas.height = length;

  for(var key in imagePaths){
    images[key] = document.getElementById(imagePaths[key]);
  }
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

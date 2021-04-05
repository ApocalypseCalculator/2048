// numbers[x][y] = val, where then number is 2^{val}
var numbers = [[1, 1, 3, 3], [1, 3, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

window.onload = function() {
  initialize();
  setTimeout(render, 500, numbers)
}

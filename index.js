// numbers[x][y] = val, where then number is 2^{val}
var numbers = [[1, 1, 3, 3], [1, 3, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

window.onload = function() {
  initialize();
  update()
}

function update(){
  render();
  setTimeout(update, 100)
}

function render(){
  render_grid(numbers)
}

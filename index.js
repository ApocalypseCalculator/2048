// numbers[row][column] = val, where then number is 2^{val}
var numbers = [[1, 1, 3, 3], [1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

const numSquares = 4;

// Bootleg enums
const directions = Object.freeze({
  "right": 0,
  "left": 1,
  "up": 2,
  "down": 3
})

window.onload = function() {
  initialize();

  document.addEventListener("keydown", keyDown)
  update()
}

function update(){
  render();
  setTimeout(update, 100)
}

function render(){
  render_grid(numbers)
}

function getIntervalFromDirection(direction){
  switch(direction){
    case "ArrowRight":
      return [0, 1]
      break
    case "ArrowLeft":
      return [0, -1]
      break
    case "ArrowDown":
      return [1, 0]
      break
    case "ArrowUp":
      return [-1, 0]
      break
    default:
      return [0, 0]
  }
}

function getStartingConsider(direction){
  if(direction == "ArrowRight" || direction == "ArrowDown"){
    return [numSquares - 1, numSquares - 1, -1, -1]
  }else{
    return [0, 0, 1, 1]
  }
}

function move(direction){
  var [rowInterval, colInterval] = getIntervalFromDirection(direction)
  if(rowInterval == 0 && colInterval == 0){
    return;
  }

  var [startingRow, startingCol, rowMove, colMove] = getStartingConsider(direction)

  for(var sr = startingRow; numSquares > sr && sr >= 0; sr += rowMove){
    for(var sc = startingCol; numSquares > sc && sc >= 0; sc += rowMove){
      if(numbers[sr][sc] == 0){
        continue
      }
      var c = sc
      var r = sr
      while(true){
        var nc = c + colInterval
        var nr = r + rowInterval
        if(!(0 <= nc && nc < numSquares && 0 <= nr && nr < numSquares)){
          [numbers[r][c], numbers[sr][sc]] = [numbers[sr][sc], numbers[r][c]]
          break
        }
        if(numbers[nr][nc] != 0){
          if(numbers[nr][nc] == numbers[sr][sc]){
            numbers[nr][nc]++
            numbers[sr][sc] = 0
            break;
          }else{
            [numbers[r][c], numbers[sr][sc]] = [numbers[sr][sc], numbers[r][c]]
            break
          }
        }
        [c, r] = [nc, nr]
      }
    }
  }
}

function keyDown(e){
  move(e.code)
}
